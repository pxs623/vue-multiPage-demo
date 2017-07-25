var serverUrl='https://www.yjk2020.com/'
function getParameter(name) {        // 可以处理中文字符
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null)
        return decodeURI(r[2]);
    return "";
}
//倒计时
function showCountDown(date, divname) {
    var now = new Date();
    var endDate = new Date(date.replace(/-/g, '/'));
    var leftTime = endDate.getTime() - now.getTime();
    var leftsecond = parseInt(leftTime / 1000);
    //var day1=parseInt(leftsecond/(24*60*60*6)); 
    var day1 = Math.floor(leftsecond / (60 * 60 * 24));
    var hour = Math.floor((leftsecond - day1 * 24 * 60 * 60) / 3600);
    var minute = Math.floor((leftsecond - day1 * 24 * 60 * 60 - hour * 3600) / 60);
    var second = Math.floor(leftsecond - day1 * 24 * 60 * 60 - hour * 3600 - minute * 60);
    var cc = document.getElementById(divname);
    if (now > endDate) {
        cc.innerHTML = "已结束";
    } else {
        cc.innerHTML = day1 + "天" + hour + "小时" + minute + "分" + second + "秒";
    }
}
function basePath() {
    //获取当前网址，如： http://localhost:8080/ems/Pages/Basic/Person.jsp
    var curWwwPath = window.document.location.href;
    //获取主机地址之后的目录，如： /ems/Pages/Basic/Person.jsp
    var pathName = window.document.location.pathname;
    var pos = curWwwPath.indexOf(pathName);
    //获取主机地址，如： http://localhost:8080
    var localhostPath = curWwwPath.substring(0, pos);
    //获取带"/"的项目名，如：/ems
    var projectName = pathName.substring(0, pathName.substr(1).indexOf('/') + 1);
    //获取项目的basePath   http://localhost:8080/ems/
    var basePath = localhostPath + projectName + "/";
    return basePath;
};

function UUID() {
    var s = [];
    var hexDigits = "0123456789abcdef";
    for (var i = 0; i < 36; i++) {
        s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
    }
    s[14] = "4";
    s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1);

    s[8] = s[13] = s[18] = s[23] = "-";

    var uuid = s.join("");
    return uuid.substr(0,16);
}
// 日期格式化
Date.prototype.format = function (fmt) {
    var o = {
        "M+": this.getMonth() + 1,                 //月份
        "d+": this.getDate(),                    //日
        "h+": this.getHours(),                   //小时
        "m+": this.getMinutes(),                 //分
        "s+": this.getSeconds(),                 //秒
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度
        "S": this.getMilliseconds()             //毫秒
    };
    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    }
    for (var k in o) {
        if (new RegExp("(" + k + ")").test(fmt)) {
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        }
    }
    return fmt;
}
//获取上一月，下一月
Date.prototype.beforeAfterMonth = function (date, beforeOrAfter) {
    if ("before" == beforeOrAfter) {
        if (date.getMonth() == 0) {
            date.setFullYear(date.getFullYear() - 1);
            date.setMonth(11)
        } else {
            date.setFullYear(date.getFullYear());
            date.setMonth(date.getMonth() - 1)
        }
    } else if ("after" == beforeOrAfter) {
        if (date.getMonth() == 11) {
            date.setFullYear(date.getFullYear() + 1);
            date.setMonth(0)
        } else {
            date.setFullYear(date.getFullYear());
            date.setMonth(date.getMonth() + 1)
        }
    }
    return date;
}