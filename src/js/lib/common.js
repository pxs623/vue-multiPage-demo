;(function (factory) {
    if (typeof define === "function" && define.amd) {
        // AMD模式
        define([ "jquery" ], factory);
    } else {
        // 全局模式
        factory(jQuery);
    }
}(function ($) {
	//一般用于点击触发动画，执行完动画后再销毁此动画
	$.fn.animateObj=function(anim,thisdisplay){
		$(this).addClass(anim+' animated-long').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
			$(this).removeClass(anim+' animated-long');
			if(thisdisplay){
				$(this).css("display",thisdisplay);
			}
		});
	};
	//替换class
	$.fn.replaceClassTo=function(reclass){
		$(this).removeClass();
		$(this).addClass(reclass);
	};
	
	$.fn.serializeArray2=function(){  
        var serializeArray2=[];  
        $(this.serializeArray()).each(function(){ 
        	var tempobj= new Object();
        	tempobj.id=this.name;
        	tempobj.value=this.value;
        	serializeArray2.push(tempobj) ;
        });  
        return serializeArray2;  
    };
   
    $.fn.serializeObject = function()
    {
        var o = {};
        var a = this.serializeArray();
        $.each(a, function() {
            if (o[this.name] !== undefined) {
                if (!o[this.name].push) {
                    o[this.name] = [o[this.name]];
                }
                o[this.name].push(this.value || '');
            } else {
                o[this.name] = this.value || '';
            }
        });
        return o;
    };
}));