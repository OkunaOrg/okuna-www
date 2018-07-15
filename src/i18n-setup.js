import Vue from 'vue';
import VueI18n from 'vue-i18n';
import * as translations from './locale/en';
import axios from 'axios';

Vue.use(VueI18n);

const messages = translations.messages;
export const i18n = new VueI18n({
    locale: 'en', // navigator.language.substring(0,2), // set locale
    fallbackLocale: 'en',
    messages // set locale messages
});
const loadedLanguages = ['en']; // our default language that is preloaded

function setI18nLanguage (lang) {
    i18n.locale = lang;
    axios.defaults.headers.common['Accept-Language'] = lang;
    document.querySelector('html').setAttribute('lang', lang);
    return lang;
}

export function loadLanguageAsync (locale) {
    if (i18n.locale !== locale) {
        if (!loadedLanguages.includes(locale)) {
            return import(/* webpackChunkName: "locale-[request]" */ `@/locale/${locale}`).then(data => {
                i18n.setLocaleMessage(locale, data.messages[locale]);
                loadedLanguages.push(locale);
                return setI18nLanguage(locale);
            });
        }
        locale = 'en';
        return Promise.resolve(setI18nLanguage(locale));
    }
    return Promise.resolve(locale);
}
