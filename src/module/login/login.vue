<template>
    <div id="menus" style="display: none">
        <div style="text-align: center;line-height: 2;margin-top: 108px"><p>欢迎进入IPOCT监管主页</p>
            <p>一健在手，市场无忧
            </p></div>
        <div class="menubtn" id="supervise">监管
        </div>
        <a class="menubtn" href="reagentRank.html">装机</a>
        <x-icon type="ios-ionic-outline" size="30"></x-icon>
        <x-icon type="ios-arrow-back" size="30"></x-icon>
        <x-icon type="ios-arrow-forward" size="30"></x-icon>
        <x-icon type="ios-arrow-up" size="30"></x-icon>
        <x-icon type="ios-arrow-right" size="30"></x-icon>
        <x-icon type="ios-arrow-down" size="30"></x-icon>
        <x-icon type="ios-arrow-left" size="30"></x-icon>
        <x-icon type="ios-arrow-thin-up" size="30"></x-icon>
        <x-icon type="ios-arrow-thin-right" size="30"></x-icon>
        <x-icon type="ios-arrow-thin-down" size="30"></x-icon>
        <x-icon type="ios-arrow-thin-left" size="30"></x-icon>
        <x-icon type="ios-circle-filled" size="30"></x-icon>
        <x-icon type="ios-circle-outline" size="30"></x-icon>
        <x-icon type="ios-checkmark-empty" size="30"></x-icon>
        <x-icon type="ios-checkmark-outline" size="30"></x-icon>
        <x-icon type="ios-checkmark" size="30"></x-icon>
        <x-icon type="ios-plus-empty" size="30"></x-icon>
        <x-icon type="ios-plus-outline" size="30"></x-icon>
        <x-icon type="ios-plus" size="30"></x-icon>
        <x-icon type="ios-close-empty" size="30"></x-icon>
        <x-icon type="ios-close-outline" size="30"></x-icon>
        <x-icon type="ios-close" size="30"></x-icon>
        <x-icon type="ios-minus-empty" size="30"></x-icon>
        <x-icon type="ios-minus-outline" size="30"></x-icon>
        <x-icon type="ios-minus" size="30"></x-icon>
        <x-icon type="ios-information-empty" size="30"></x-icon>
        <x-icon type="ios-information-outline" size="30"></x-icon>
        <x-icon type="ios-information" size="30"></x-icon>
        <x-icon type="ios-help-empty" size="30"></x-icon>
        <x-icon type="ios-help-outline" size="30"></x-icon>
        <x-icon type="ios-help" size="30"></x-icon>
        <x-icon type="ios-search" size="30"></x-icon>
        <x-icon type="ios-search-strong" size="30"></x-icon>
        <x-icon type="ios-star" size="30"></x-icon>
        <x-icon type="ios-star-half" size="30"></x-icon>
        <x-icon type="ios-star-outline" size="30"></x-icon>
        <x-icon type="ios-heart" size="30"></x-icon>
        <x-icon type="ios-heart-outline" size="30"></x-icon>
    </div>
</template>

<script>
  import { md5 } from 'vux'
  export default {
    components: {

    },
    data () {
      return {
        msg: '',
        value:['optionA']
      }
    },
    mounted () {
      this.axios.get('http://www.yjk2020.com/' + 'ec-web-api/agent/admc/gdus')
        .then(result => {
        console.log(result.data.data)
        })
      console.log(md5('VUX'))
      this.$vux.toast.text('hello', 'top')
    }
  }
</script>
<style type="text/css">
    .head {
        background-color: #5B9DF1;
        height: 260px;
        padding: 40px;
        vertical-align: middle;
        color: #fff;
        font-size: 2rem;
        line-height: 150px;
    }

    .head img {
        vertical-align: middle;
        width: 100px;
    }

    .lab-input {
        display: block;
        width: 80%;
        margin: auto;
        vertical-align: middle;
        position: relative;
        margin-top: 20px;
    }

    .ui-input {
        width: 100%;
        margin: auto;
        border: none;
        border-bottom: 1px solid #5B9DF1;
        padding: 10px 20px;
    }

    .smscode {
        font-size: 1.2rem;
        height: 3rem;
        line-height: 3rem;
        display: block;
        width: 80px;
        background-color: #5B9DF1;
        color: #fff;
        right: 0;
        top: -5px;
        z-index: 1;
        position: absolute;
        text-align: center;
        border-radius: 5px;
    }

    .loginbtn {
        width: 60%;
        margin: auto;
        text-align: center;
        padding: 10px;
        color: #fff;
        background-color: #5B9DF1;
        margin-top: 40px;
        display: block;
        text-decoration: none;
    }

    .menubtn {
        line-height: 4.5;
        width: 70%;
        margin: auto;
        text-align: center;
        padding: 10px;
        color: #fff;
        background-color: #105CA8;
        margin-top: 40px;
        display: block;
        text-decoration: none;
        border-radius: 5px;
    }

    .btngrey {
        background-color: #eee !important;
        color: #aaa !important;
    }
</style>