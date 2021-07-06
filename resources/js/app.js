require('./bootstrap');

window.Vue = require('vue').default;

import VueRouter from 'vue-router'
Vue.use(VueRouter)

import App from './components/App.vue'
import CommentsIndex from './components/comments/index.vue'
import CommentsCreate from './components/comments/create.vue'

const router = new VueRouter({
	mode: 'history',
	routes: [
		{
			path: '/',
			component:CommentsIndex,
			name: 'comments.index'
		},
		{
			path:'/comments/create',
			component: CommentsCreate,
			name: 'comments.create'
		},
	]
})

/*Vue.component('comments-index', 
	require('./components/comments/index.vue')
	.default);*/

Vue.component('pagination', require('laravel-vue-pagination'));

const app =new Vue({
	el: "#app",
	components: { App },
	router	
});