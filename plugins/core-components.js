import Vue from 'vue'

import AppButton from '@/components/UI/AppButton'
import AppControlInput from '@/components/UI/AppControlInput'
import PostList from '@/components/Posts/PostList'
import wysiwyg from "vue-wysiwyg";

Vue.component('AppButton', AppButton);
Vue.component('AppControlInput', AppControlInput);
Vue.component('PostList', PostList);
Vue.use(wysiwyg, {}); // config is optional. more below