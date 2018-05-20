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


export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/home'
        },
        {
            path: '/home',
            name: 'home',
            component: home
        },
        {
            path: '/about-us',
            name: 'about-us',
            component: aboutUs
        },
        {
            path: '/manifesto',
            name: 'manifesto',
            component: manifesto
        },
        {
            path: '/contact-us',
            name: 'contact-us',
            component: contactUs
        },
        {
            path: '/faq',
            name: 'faq',
            component: faq
        },
        {
            path: '/jobs',
            name: 'jobs',
            component: jobs
        }
    ],
    scrollBehavior(){
        return {
            x:0,
            y:0
        }
    }
})
