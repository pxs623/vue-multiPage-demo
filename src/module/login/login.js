import { Vue,$} from '../../js/base'
import login from './login.vue'
import 'mint-ui/lib/style.css'
var vue = new Vue({
    render: h => h(login)
}).$mount('#vue')
$("#menus").show();

