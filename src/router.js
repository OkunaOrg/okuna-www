import Vue from 'vue';
import Router from 'vue-router';
import home from './views/home/home.vue';
import root from './views/root.vue';
import * as setupi18n from './i18n-setup';

const locale = require('browser-locale')();
const supportedLocales = ['en'];

Vue.use(Router);

// Lazy load everything but home page!
const contactUs = () => import('./views/contact-us/contact-us.vue');
const aboutUs = () => import('./views/about-us/about-us.vue');
const manifesto = () => import('./views/manifesto/en/manifesto.vue');
const faq = () => import('./views/faq/faq.vue');
const angel = () => import('./views/angel/angel.vue');
const vulnerabilityReport = () => import('./views/vulnerability-report/vulnerability-report.vue');
const getApp = () => import('./views/get-app/get-app.vue');

const browserLang = (locale || 'en-US').substring(0, 2);

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '*',
            redirect: `/${browserLang}/home`
        },
        {
            path: '/about-us',
            redirect: `/${browserLang}/about-us`
        },
        {
            path: '/home',
            redirect: `/${browserLang}/home`
        },
        {
            path: '/contact-us',
            redirect: `/${browserLang}/contact-us`
        },
        {
            path: '/faq',
            redirect: `/${browserLang}/faq`
        },
        {
            path: '/jobs',
            redirect: `/${browserLang}/jobs`
        },
        {
            path: '/manifesto',
            redirect: `/${browserLang}/manifesto`
        },
        {
            path: '/getapp',
            redirect: `/${browserLang}/getapp`
        },
        {
            path: '/kickstarter',
            redirect: `/${browserLang}/kickstarter`
        },
        {
            path: '/:locale',
            component: root,
            children: [
                {
                    path: 'home',
                    name: 'home',
                    component: home,
                    meta: {
                        title: 'Home | Okuna'
                    }
                },
                {
                    path: '*',
                    redirect: `/${browserLang}/home`
                }
            ]
        }
    ],
    scrollBehavior() {
        return {
            x: 0,
            y: 0
        }
    }
});
router.beforeEach((to, from, next) => {
    document.title = to.meta.title;

    let locale = to.params.locale;
    if (!locale && to.name === 'manifesto') {
        locale = to.path.split('/')[1];
    } else if (!locale) {
        locale = browserLang;
    }

    if (supportedLocales.indexOf(locale) === -1) {
        next('/en/home');
    } else {
        setupi18n.loadLanguageAsync(locale).then(() => next());
    }

});

export default router;
