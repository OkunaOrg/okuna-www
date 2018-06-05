import Vue from 'vue';
import Router from 'vue-router';
import home from './views/home/home.vue';

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


const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: '/home'
        },
        {
            path: '/home',
            name: 'home',
            component: home,
            meta: {
                title: 'Home | Openbook social network'
            }
        },
        {
            path: '/about-us',
            name: 'about-us',
            component: aboutUs,
            meta: {
                title: 'About us | Openbook social network'
            }
        },
        {
            path: '/manifesto',
            name: 'manifesto',
            component: manifesto,
            meta: {
                title: 'Manifesto | Openbook social network'
            }
        },
        {
            path: '/contact-us',
            name: 'contact-us',
            component: contactUs,
            meta: {
                title: 'Contact us | Openbook social network'
            }
        },
        {
            path: '/faq',
            name: 'faq',
            component: faq,
            meta: {
                title: 'FAQ | Openbook social network'
            }
        },
        {
            path: '/jobs',
            name: 'jobs',
            component: jobs,
            meta: {
                title: 'Jobs | Openbook social network'
            }
        },
        {
            path: '/press',
            name: 'press',
            component: press,
            meta: {
                title: 'Press | Openbook social network'
            }
        },
        {
            path: '/newsroom',
            name: 'newsroom',
            component: newsroom,
            meta: {
                title: 'Newsroom | Openbook social network'
            }
        },
        {
            path: '/vulnerability-report',
            name: 'vulnerability-report',
            component: vulnerabilityReport,
            meta: {
                title: 'Report vulnerability | Openbook social network'
            }
        },
        {
            path: '*',
            redirect: 'home'
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
    next()
});

export default router;
