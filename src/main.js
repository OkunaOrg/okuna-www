import Vue from 'vue'
import Buefy from 'buefy'
import VueScrollTo from 'vue-scrollto';
import VeeValidate from 'vee-validate';
import SocialSharing from 'vue-social-sharing';

import App from './App.vue'
import router from './router'
import twemoji from './directives/twemoji.js';
import rainbowText from './directives/rainbow-text.js';
import './lib/fontawesome-all.min.exec.js';
import * as vuei18n from './i18n-setup';
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

Raven.config('https://2bc7c06c27df4f2f9a612cfdd8548a72@sentry.io/1212325').install();


Raven.context(function () {
    Vue.use(SocialSharing);

    Vue.use(Buefy, {
        defaultIconPack: 'fa'
    });
    Vue.use(VeeValidate);
    Vue.use(VueScrollTo, {
        offset: -90
    });

const i18n = vuei18n.i18n;

    // Load Vue globals
    Vue.directive('twemoji', twemoji);

    Vue.directive('rainbow-text', rainbowText);

// Start app
    Vue.config.productionTip = false;
    new Vue({
        i18n,
        router,
        render: h => h(App)
    }).$mount('#app');
});
