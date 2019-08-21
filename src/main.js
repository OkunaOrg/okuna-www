import Vue from 'vue'
import Buefy from 'buefy'
import VueScrollTo from 'vue-scrollto';
import VeeValidate from 'vee-validate';
import SocialSharing from 'vue-social-sharing';

import App from './App.vue'
import router from './router'
import store from './store';
import buildLocale from './lib/buildLocale';
import twemoji from './directives/twemoji.js';
import rainbowText from './directives/rainbow-text.js';
import './lib/fontawesome-all.min.exec.js';
// Load stylesheets
import './styles/index.scss';

// Load jQuery and it's global plugins
window['jQuery'] = window['$'] = require('jquery');
require('default-passive-events');
require('slick-carousel');

require('script-loader!raven-js/dist/vue/raven.js');

// Raven loaded through script tag
const Raven = window['Raven'] || {
    context(startApp) {
        startApp()
    },
    config() {
        return {
            install() {

            }
        }
    }
};

Raven.config('https://e5a6200cf851482cabf0d4ba7ff8bc60@sentry.openbook.social/2').install();


Raven.context(function () {
    Vue.use(SocialSharing);

    Vue.use(Buefy, {
        defaultIconPack: 'fa'
    });
    Vue.use(VeeValidate);
    Vue.use(VueScrollTo, {
        offset: -90
    });

    const i18n = buildLocale(store);

    // Load Vue globals
    Vue.directive('twemoji', twemoji);

    Vue.directive('rainbow-text', rainbowText);

// Start app
    Vue.config.productionTip = false;
    new Vue({
        i18n,
        router,
        store,
        render: h => h(App)
    }).$mount('#app');
});
