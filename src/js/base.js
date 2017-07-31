import Vue from 'vue'
import $ from 'jquery'
import axios from 'axios'
import VueAxios from 'vue-axios'
import CryptoJS from 'crypto-js'
import {UUID} from './lib/util'
import { AlertPlugin, ToastPlugin } from 'vux'

Vue.use(AlertPlugin)
Vue.use(ToastPlugin)
var debug = false
var token = '123456'
var secretKey = UUID();
function getSignature (nonce) {
  return CryptoJS.enc.Base64.stringify(CryptoJS.SHA1(token + secretKey + nonce))
}
if (debug) {
    axios.defaults.headers['skip'] = true
} else {
  let nonce = new Date().getTime();

  axios.defaults.headers = {
        'terminal': 'wx',
        'nonce': nonce,
        'signature': getSignature(nonce)
    }
}
Vue.use(VueAxios, axios)
require('src/scss/normalize.scss')
module.exports = {
    Vue, $
}