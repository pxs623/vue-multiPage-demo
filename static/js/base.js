/**
 * @Author: le
 * @Date: 2016/11/2
 */

import Vue from 'vue'
import $ from 'jquery'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios);

module.exports = {
    Vue, $
}