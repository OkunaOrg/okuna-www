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


const router = new Router({
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
