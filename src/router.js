import Vue from 'vue';
import Router from 'vue-router';
import home from './views/home/home.vue';
import root from './views/root.vue';
import * as setupi18n from './i18n-setup';

Vue.use(Router);

// Lazy load everything but home page!
const contactUs = () => import('./views/contact-us/contact-us.vue');
const aboutUs = () => import('./views/about-us/about-us.vue');
const manifesto_en = () => import('./views/manifesto/en/manifesto.vue');
const manifesto_es = () => import('./views/manifesto/es/manifesto.vue');
const manifesto_nl = () => import('./views/manifesto/nl/manifesto.vue');
const faq = () => import('./views/faq/faq.vue');
const jobs = () => import('./views/jobs/jobs.vue');
const press = () => import('./views/press/press.vue');
const newsroom = () => import('./views/newsroom/newsroom.vue');
const vulnerabilityReport = () => import('./views/vulnerability-report/vulnerability-report.vue');

const browserLang = 'en'; //navigator.language.substring(0,2);

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
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
        // {
        //     path: '/en/manifesto',
        //     name: 'manifesto',
        //     component: manifesto_en,
        //     meta: {
        //         title: 'Manifesto | Openbook social network'
        //     }
        // },
        // {
        //     path: '/nl/manifesto',
        //     name: 'manifesto',
        //     component: manifesto_nl,
        //     meta: {
        //         title: 'Manifesto | Openbook social network'
        //     }
        // },
        // {
        //     path: '/es/manifesto',
        //     name: 'manifesto',
        //     component: manifesto_es,
        //     meta: {
        //         title: 'Manifesto | Openbook social network'
        //     }
        // },
        {
            path: '/press',
            redirect: `/${navigator.language.substring(0,2)}/press`
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
                // Remove this when enabling localisation
                {
                    path: 'manifesto',
                    name: 'manifesto',
                    component: manifesto_en,
                    meta: {
                        title: 'Manifesto | Openbook social network'
                    }
                },
                // {
                //     path: '/',
                //     redirect: `/${navigator.language.substring(0,2)}/home`
                // }
            ]
        },
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
        locale = navigator.language.substring(0,2);
    }
    if (locale !== 'en') {
        router.replace({name: to.name, params: {locale: 'en'}});
    } else {
        setupi18n.loadLanguageAsync(locale).then(() => next())
    }
});

export default router;
