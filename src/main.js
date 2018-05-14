import Vue from 'vue'
import App from './App.vue'
import router from './router'

// Load stylesheets
import './styles/index.scss';

// Load third party js libs
//import './scripts/fontawesome-all.exec.js';

// Load jQuery and it's global plugins
window['jQuery'] = window['$'] = require('jquery');
require('slick-carousel');


// Load Vue plugins
import Buefy from 'buefy'
import VueScrollTo from 'vue-scrollto';

Vue.use(Buefy);

// Current workaround to preserve element hash after scroll
// See issue here https://github.com/rigor789/vue-scrollto/issues/85
Vue.use(VueScrollTo, {
    onDone: function (element) {
        const elementHasId = typeof element.id !== 'undefined';
        if (elementHasId) {
            window.location.hash = element.id;
        }
    }
});

// Load Vue globals
import twemoji from './directives/twemoji.js';
Vue.directive('twemoji', twemoji);

// Start app
Vue.config.productionTip = false;

new Vue({
    router,
    render: h => h(App)
}).$mount('#app');
