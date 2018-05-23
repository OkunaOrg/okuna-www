import Vue from 'vue'
import Buefy from 'buefy'
import VueScrollTo from 'vue-scrollto';
import VeeValidate from 'vee-validate';


import App from './App.vue'
import router from './router'
import twemoji from './directives/twemoji.js';

// Load stylesheets
import './styles/index.scss';


// Load jQuery and it's global plugins
window['jQuery'] = window['$'] = require('jquery');
require('slick-carousel');

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
    Vue.use(Buefy);
    Vue.use(VeeValidate);
    Vue.use(VueScrollTo);


// Load Vue globals
    Vue.directive('twemoji', twemoji);

// Start app
    Vue.config.productionTip = false;

    new Vue({
        router,
        render: h => h(App)
    }).$mount('#app');
});
