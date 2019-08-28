import i18next from 'i18next';
import i18nextXHRBackend from 'i18next-xhr-backend';
import i18nextBrowserLanguageDetector from 'i18next-browser-languagedetector';
import Vue from 'vue';
import VueI18Next from '@panter/vue-i18next';

export default (store) => {
  Vue.use(VueI18Next);

  i18next.on('loaded', function (strings) {
    if (Object.keys(strings).length) {
      // only commit to store if strings were *actually* loaded via XHR
      store.commit('fetchI18nSuccess');
    }
  });

  i18next.on('error', function () {
    store.commit('fetchI18nFailure');
  });

  i18next.on('languageChanged', function (language) {
    store.commit('updateI18n', language);
  });

  i18next
    .use(i18nextBrowserLanguageDetector)
    .use(i18nextXHRBackend)
    .init({
      fallbackLng: 'en',
      ns: [ 'common', 'about', 'angel', 'contact', 'faq', 'home', 'jobs', 'manifesto', 'press', 'team', 'vulnerability' ],
      defaultNS: 'common',
      debug: process.env.NODE_ENV !== 'production',
      backend: {
        loadPath: '/i18n/{ lng }/{ ns }.json'
      },
      interpolation: {
        prefix: '{',
        suffix: '}'
      }
    });

  return new VueI18Next(i18next);
};
