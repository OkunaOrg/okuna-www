const path = require('path');
const fs = require('fs');

const cheerio = require('cheerio');
const chalk = require('chalk');

const ALL_LOCALES_DIR = path.join(__dirname, '..', 'public', 'i18n');
let counter = 0;  // counts how many issues there are

/**
 * error()
 * Updates the error counter and prints out an error message in
 * connection with a given locale key
 * @param {string} lang - The code of the locale (e.g.: "en")
 * @param {string} err - The error message
 * @param {string} key - The locale key retrieved from the stack
 * @param {string} value - The value of the localization string
 */
const error = (lang, err, key, value) => {
  counter++;
  const message = chalk.red(`!!! [${lang}] ${key.slice(1)}: ${err}`);
  console.log(`${message}\n${value}\n`);
};

/**
 * loadLocale()
 * Creates an object that consists of all localization strings from each
 * JSON localization file.
 * @param {string} locale - The code of the locale (e.g.: "en")
 * @returns {object} - The keys of the provided locale
 */
const loadLocale = (locale) => {
  const localeDirectory = path.join(ALL_LOCALES_DIR, locale);

  const keys = {};

  fs.readdirSync(localeDirectory)
    .forEach(f => {
      if (f.split('.').pop() !== 'json') {
        return;
      }

      const currentKeys = require(path.join(localeDirectory, f));
      Object.assign(keys, currentKeys);
    });

  return keys;
};

/**
 * compare()
 * Runs several tests through a given locale string by comparing it
 * to the original English variant. The tests are:
 *  - Do both strings have the same amount of HTML tags? (if any)
 *  - Does the translated string have a script or link tag?
 *  - Are the HTML tags of the two strings identical
 * @param {string} src - The source string (original)
 * @param {string} dest - The new, translated string
 * @param {string} lang - The code of the locale (e.g.: "en")
 * @param {string} key - The locale key retrieved from the stack
 */
const compare = (src, dest, lang, key) => {
  const destHTML = cheerio.load(`<div id="root">${dest}</div>`);

  if (destHTML('#root > *').length === 0) {
    return;
  }

  const srcHTML = cheerio.load(`<div id="root">${src}</div>`);

  let srcSelectors = [];
  let destSelectors = [];

  srcHTML('#root > *').each((idx, el) => srcSelectors.push(el.name));
  destHTML('#root > *').each((idx, el) => destSelectors.push(el.name));

  if (srcSelectors.length !== destSelectors.length) {
    return error(lang, 'too many selectors in HTML string.', key, dest);
  }

  if (destSelectors.includes('script')) {
    return error(lang, 'found <script> tag.', key, dest);
  }

  if (destSelectors.includes('link')) {
    return error(lang, 'found <link> tag.', key, dest);
  }

  srcSelectors = srcSelectors.sort();
  destSelectors = destSelectors.sort();

  for (let i = 0; i < destSelectors.length; i++) {
    if (srcSelectors[i] !== destSelectors[i]) {
      return error(lang, `the tags are not the same - original: [${srcSelectors.join(', ')}], ${lang}: [${destSelectors.join(', ')}].`, key, dest);
    }
  }
};

/**
 * deepRecurse()
 * Recursively initiates the comparison of n-level deep objects
 * @param {object|string} src - The original object/string
 * @param {object|string} dest - The new, translated object/string
 * @param {string} lang - The code of the locale (e.g.: "en")
 * @param {string} stack - The locale key
 */
const deepRecurse = (src, dest, lang, stack = '') => {
  Object.keys(src).forEach(key => {
    if (typeof dest[key] === 'object' && dest[key] !== null) {
      return deepRecurse(src[key], dest[key], lang, `${stack}.${key}`);
    }

    compare(src[key], dest[key], lang, `${stack}.${key}`);
  });
};

const originalKeys = loadLocale('en');

fs.readdirSync(ALL_LOCALES_DIR)
  .forEach(dir => {
    const newKeys = loadLocale(dir);
    deepRecurse(originalKeys, newKeys, dir);
  });

const output = counter
  ? `Done! Found ${counter} problems.`
  : `Done! No issues found!`;

const exitCode = counter ? 1 : 0;

console.log(output);
process.exit(exitCode);
