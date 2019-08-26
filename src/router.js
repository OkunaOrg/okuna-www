import Vue from 'vue';
import Router from 'vue-router';
import home from './views/home/home.vue';
import root from './views/root.vue';
import i18next from 'i18next';
import store from './store';

const locale = require('browser-locale')();
const supportedLocales = ['en', 'de', 'es', 'fr', 'hu', 'it', 'nl', 'pt-br', 'sv', 'tr'];

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

const getLocalizedTitle = key => {
    return (i18next.t(`common:meta.${key}`) + ' | Okuna') || 'Okuna';
};

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
                    component: home
                },
                {
                    path: 'about-us',
                    name: 'about-us',
                    component: aboutUs
                },
                {
                    path: 'contact-us',
                    name: 'contact-us',
                    component: contactUs
                },
                {
                    path: 'faq',
                    name: 'faq',
                    component: faq
                },
                {
                    path: 'angel',
                    name: 'angel',
                    component: angel
                },
                {
                    path: 'getapp',
                    name: 'getapp',
                    component: getApp
                },
                {
                    path: 'vulnerability-report',
                    name: 'vulnerability-report',
                    component: vulnerabilityReport
                },
                {
                    path: 'manifesto',
                    name: 'manifesto',
                    component: manifesto
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
    let locale = to.params.locale;
    if (!locale && to.name === 'manifesto') {
        locale = to.path.split('/')[1];
    } else if (!locale) {
        locale = browserLang;
    }

    // ugly workaround for waiting until the translations are ready
    // to set the title
    const interval = setInterval(() => {
        if (store.getters.isI18nLoaded) {
            document.title = getLocalizedTitle(to.name);
            clearInterval(interval);
        }
    }, 500);

    if (supportedLocales.indexOf(locale) === -1) {
        next('/en/home');
    } else {
        i18next.changeLanguage(locale);
        return next();
    }
});

export default router;
