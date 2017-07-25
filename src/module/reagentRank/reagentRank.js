import { Vue,$ } from '../../js/base'
import tpl from './reagentRank.vue'
import { Toast } from 'mint-ui';
import 'mint-ui/lib/style.css';
import '../../js/lib/util'
localStorage.USER='{"id":"10000","name":"彭雪松","phone":"13372034425","agentType":"role_21"}'

var totalPage = 1;
var formdata = {"showCount": 10, "currentPage": 1, "sort": "DESC"}
var date = new Date();

var vue = new Vue({
  el: '#vue',
  data: {
    data: {pd: []},
    sort:'DESC',
    sortval:'升序'
  },
  mounted(){
    this.init()
  },
  render: h => h(tpl),
  methods: {
    init(beforeOrAfter){
      if(localStorage.USER){
        var user =JSON.parse(localStorage.USER);
        formdata.userId = user.id;
      }
      if (beforeOrAfter != null) {
        formdata.currentPage = 1;
        vue.data.pd = [];
      }
      formdata.sort=this.sort;
      formdata.month = date.beforeAfterMonth(date, beforeOrAfter).format("yyyy-MM");
      $("#month").val(date.getFullYear() + "年" + (parseInt(date.getMonth()) + 1 ) + "月");
/*
      $("#month").mobiscroll('setDate', date, true, 0);
*/
    },
    detail(id) {
      window.location.href = "reagentDetail.html?id=" + id
    },
    togglesort(){
     /* if (vue.sort == 'DESC') {
        vue.sort = 'ASC';
        vue.sortval = '降序'
      } else {
        vue.sort = 'DESC';
        vue.sortval = '升序'
      }
      formdata.currentPage = 1;
      vue.data.pd = [];
      vue.init();*/
    }
  }
});
$(window).scroll(function () {
  if ($(document).scrollTop() <= 0) {
    // $(".ui-loading-wrap").css("display","none");
  }
  if (($(document).scrollTop() >= $(document).height() - $(window).height())) {
    //if( formdata.currentPage<totalPage){
    formdata.currentPage = formdata.currentPage + 1;
    vue.init();
    //}
  }
});
/*
$("#month").mobiscroll('setDate', date, true).date({
  lang: "zh",
  dateFormat: 'yy/mm', //返回结果格式化为年月格式
  defaultValue: date,
  // wheels:[], 设置此属性可以只显示年月，此处演示，就用下面的onBeforeShow方法,另外也可以用treelist去实现
  onBeforeShow: function (inst) {
    inst.settings.wheels[0].length > 2 ? inst.settings.wheels[0].pop() : null;
  }, //弹掉“日”滚轮
  formatValue: function (data) {
    return data[0] + "年" + (parseInt(data[1]) + 1) + "月";
  },
  onSelect: function (valueText, inst) {
    var month = valueText.substr(5, 2)
    if (month.indexOf("月") > 0) {
      month = month.substr(0, 1);
    }
    date.setFullYear(parseInt(valueText.substr(0, 4)));
    date.setMonth(parseInt(month) - 1);
    formdata.currentPage = 1;
    vue.data.pd = [];
    vue.init();
  }
});*/
