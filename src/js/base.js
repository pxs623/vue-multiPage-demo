import Vue from 'vue'
import $ from 'jquery'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios);
require('src/scss/normalize.scss')
module.exports = {
    Vue, $
}