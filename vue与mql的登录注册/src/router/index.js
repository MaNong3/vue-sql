import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/containers/home';
import Content from "@/containers/content";
import AddText from "@/containers/addText";
import TextType from "@/containers/textType";

Vue.use(Router)

export default new Router({
    mode: "history",
    routes: [{
        path: '/',
        name: 'home',
        component: Home
    }, {
        path: '/home',
        name: 'home',
        component: Home,
        children: [{
            path: 'addText',
            name: 'addText',
            component: AddText
        }]
    }, {
        path: '/content',
        name: 'content',
        component: Content,
        children: [{
            path: 'addText',
            name: 'addText',
            component: AddText
        }, {
            path: 'textType',
            name: 'textType',
            component: TextType
        }]
    }]
})