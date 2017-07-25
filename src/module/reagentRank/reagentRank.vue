<template>
    <div id="vue">
    <div class="headdate"><span class="triangle-left"></span><input id="month" class="datechose"><span  class="triangle-right"></span><span class="sortbtn" @click="togglesort">{{sortval}}</span></div>
    <!--<div style="padding:10px 10px  0 10px;background-color:#EDEDED" >
        <div class="hlist">
            <ul v-for="(item,index) in data.pd" @click="detail(item.deviceId.toString())" v-bind:class="{ 'firstcolor': (index==0),  'secondcolor': (index==1), 'thirdcolor': (index==2)}">
                <li class="li-top" v-if="index==0">
                    <span class="circletop firstcolor">1</span> {{item.deviceId}}({{item.areaName}})
                </li>
                <li class="li-top"  v-if="index==1">
                    <span class="circletop secondcolor">2</span> {{item.deviceId}}({{item.areaName}})
                </li>
                <li class="li-top"  v-if="index==2">
                    <span class="circletop thirdcolor">3</span> {{item.deviceId}}({{item.areaName}})
                </li>
                <li class="li-top" v-if="index>2">
                    <span class="circleb"></span> {{item.deviceId}}({{item.areaName}})
                </li>
                <li class="li-center">
                    <span>{{item.hospitalName}}</span><span>{{item.hospitalDepartmentName}}</span>
                </li>
                <li class="li-bottom">
                    <span>使用量</span><span>{{item.number}}人份</span>
                </li>
            </ul>
        </div>
        <div v-if="data.noData" class="nodata" ><img src="../img/no_data.png" class="nodata"/><p>暂无数据</p></div>
    </div>-->
    </div>
</template>

<script>
    export default {
        data () {
            return {
                msg: ''
            }
        },
      methods:{
        togglesort(){
          console.log(111)
        }
      }
    }

</script>
<style type="text/css">
    body{
        background-color:#EDEDED
    }
    .headdate{
        text-align:center;
        line-height: 3;
        background-color: #fff;
        position: relative;
    }
    .datechose{
        border:none;
        width:100px;
        height:2em;
        text-align: center;
        background-color:transparent;
        -webkit-appearance:none;
    }
    .datechose:after{
        content:" "
    }
    .triangle-left {
        display: inline-block;
        width: 0;
        height: 0;
        border-top: 8px solid transparent;
        border-right: 8px solid #105CA8;
        border-bottom: 8px solid transparent;
        vertical-align: middle;
        margin-right:20px
    }

    .triangle-right {
        display: inline-block;
        width: 0;
        height: 0;
        border-top: 8px solid transparent;
        border-left: 8px solid #105CA8;
        border-bottom: 8px solid transparent;
        vertical-align: middle;
        margin-left:20px;
    }
    .circleb{
        display: inline-block;
        width: 0;
        border-radius: 100%;
        border:3px solid #105CA8;
        margin-right: 3px;
    }
    .hlist >.firstcolor{
        border-top-color:#F54C10;
    }

    .hlist >.secondcolor{
        border-top-color: #FCA739;
    }

    .hlist >.thirdcolor{
        border-top-color: #60CD1E;
    }
    .li-top>.firstcolor{
        background-color:#F54C10 ;
    }
    .li-top>.secondcolor{
        background-color:#FCA739 ;
    }
    .li-top>.thirdcolor{
        background-color: #60CD1E ;
    }

    .hlist{
        background-color: #fff;
    }
    .hlist ul{
        border-top:2px solid #8BC0FF;
    }
    .hlist ul li{
        padding:0 10px;
    }
    .hlist .li-top{
        font-size:1.1em;
        line-height: 2;
        border-bottom:1px solid #EDEDED;
    }

    .hlist .li-center{
        line-height: 2;
    }
    .hlist .li-center span:nth-last-child(1){
        float: right;
    }
    .hlist .li-bottom{
        line-height: 2;
    }
    .hlist .li-bottom span:nth-last-child(1){
        float: right;
    }
    .circletop{
        width: 14px;
        height: 14px;
        font-size:0.6rem;
        border-radius: 100%;
        color: #fff;
        display: inline-block;
        vertical-align: middle;
        line-height: 14px;
        text-align: center;
    }

    .sortbtn{
        width: 45px;
        background: #105CA8;
        color:#fff;
        transform: translate(-50%,-50%);
        top: 50%;
        right: 0;
        position: absolute;
        height: 2em;
        line-height: 2em;
        border-radius: 5px;
        font-size: 1rem
    }
    .nodata img {
        display: block;
        margin: auto;
        margin-top: 50%;
        margin-bottom: 20px;
        width: 100px;
    }

    .nodata {
        text-align: center;
    }
    .dropdown{
        width: 112px;
        -webkit-box-shadow: 0px 14px 33px -9px rgba(0, 0, 0, 0.75);
        -moz-box-shadow: 0px 14px 33px -9px rgba(0, 0, 0, 0.75);
        box-shadow: 0px 14px 33px -9px rgba(0, 0, 0, 0.75);
        z-index: 1002;
        display: none;
        position: absolute;
        top: 40px;
        right: 5px;
        text-align: center;
        background: rgba(0,0,0,0.7);
        padding: 8px 5px;
        -webkit-border-radius: 4px;
        -moz-border-radius: 4px;
        -ms-border-radius: 4px;
        border-radius: 4px;
        -webkit-transition: 0s;
        -o-transition: 0s;
        transition: 0s;
        line-height: 28px;
        color: white;
        font-size: 14px;
    }
    .dropdown li.active{
        color: #8BC0FF;
    }
    .dropdown li{
        border-bottom: 0.5px solid #e5e5e5;
    }
    .dropdown li:last-child{
        border: 0;
    }
    .arr{
        border: 10px solid transparent;
        width: 0;
        height: 0;
        border-bottom-color: rgba(0,0,0,0.7);
        position: absolute;
        top: -20px;
        right: 20px;
    }
</style>