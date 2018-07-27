import Vue from 'vue';
import Router from 'vue-router';
import home from './views/home/home.vue';
import root from './views/root.vue';
import * as setupi18n from './i18n-setup';

const locale = require('browser-locale')();
const supportedLocales = ['en', 'es', 'nl', 'hu', 'fr'];

Vue.use(Router);

// Lazy load everything but home page!
const contactUs = () => import('./views/contact-us/contact-us.vue');
const aboutUs = () => import('./views/about-us/about-us.vue');
const manifesto = () => import('./views/manifesto/manifesto.vue');
const faq = () => import('./views/faq/faq.vue');
const jobs = () => import('./views/jobs/jobs.vue');
const press = () => import('./views/press/press.vue');
const newsroom = () => import('./views/newsroom/newsroom.vue');
const vulnerabilityReport = () => import('./views/vulnerability-report/vulnerability-report.vue');

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
            path: '/newsroom',
            redirect: `/${browserLang}/newsroom`
        },
        {
            path: '/manifesto',
            redirect: `/${browserLang}/manifesto`
        },
        {
            path: '/press',
            redirect: `/${browserLang}/press`
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
                        title: 'Home | Openbook social network'
                    }
                },
                {
                    path: 'about-us',
                    name: 'about-us',
                    component: aboutUs,
                    meta: {
                        title: 'About us | Openbook social network'
                    }
                },
                {
                    path: 'contact-us',
                    name: 'contact-us',
                    component: contactUs,
                    meta: {
                        title: 'Contact us | Openbook social network'
                    }
                },
                {
                    path: 'faq',
                    name: 'faq',
                    component: faq,
                    meta: {
                        title: 'FAQ | Openbook social network'
                    }
                },
                {
                    path: 'jobs',
                    name: 'jobs',
                    component: jobs,
                    meta: {
                        title: 'Jobs | Openbook social network'
                    }
                },
                {
                    path: 'press',
                    name: 'press',
                    component: press,
                    meta: {
                        title: 'Press | Openbook social network'
                    }
                },
                {
                    path: 'newsroom',
                    name: 'newsroom',
                    component: newsroom,
                    meta: {
                        title: 'Newsroom | Openbook social network'
                    }
                },
                {
                    path: 'vulnerability-report',
                    name: 'vulnerability-report',
                    component: vulnerabilityReport,
                    meta: {
                        title: 'Report vulnerability | Openbook social network'
                    }
                },
                {
                    path: 'manifesto',
                    name: 'manifesto',
                    component: manifesto,
                    meta: {
                        title: 'Manifesto | Openbook social network'
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
