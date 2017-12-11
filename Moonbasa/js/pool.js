//随机码
//0-9:48-57
//A-Z:65-90
//a-z:97-122
function  randomCode(){
	var str = '';
	for(var i=0;i<4;i++){
		var num = parseInt(48+Math.random()*(122-47));

		while(num>=58&&num<=64||num>=91&&num<=96){
			num = parseInt(48+Math.random()*(122-47))
		}
		str+=String.fromCharCode(num)
		
	}
	return str;
	}	

//获取cookie
function getCookie(_name){
	var cookie=document.cookie;
	var arr=cookie.split('; ');
	for(var i=0;i<arr.length;i++){
		var newArr=arr[i].split("=");
		if(newArr[0]==_name){
			return newArr[1];
		}
	}
}
//设置cookie
function setCookie(_name,_val,time){
	var d=new Date();
	d.setDate(d.getDate())+time;
	document.cookie=_name+"="+_val+";"+"path=/;"+"expires="+d;
}
//删除cookie
function removecookie(_name,_val){
	setCookie(_name,_val,-1);
}


//获取非行间样式
function getStyle(obj,attr){
	if(obj.currentStyle){
		return obj.currentStyle[attr];
	}else{
		return getComputedStyle(obj,false)[attr];
	}
}
//完美运动框架
function move(obj,json,fn){
	clearInterval(obj.timer);
	obj.timer=setInterval(function(){
		var Bstop=true;
		
		for(var attr in json){
			var Icur=0;
			if(attr=="opacity"){
				Icur=parseInt(parseFloat(getStyle(obj,attr))*100);
			}else{
				Icur=parseInt(getStyle(obj,attr));
			}

			var speed=(json[attr]-Icur)/8;
			speed=speed>0?Math.ceil(speed):Math.floor(speed);

			if(Icur!=json[attr]){
				Bstop=false;
			}

			if(attr=='opacity'){
				obj.style.opacity=parseFloat((Icur+speed)/100);
				obj.style.filter='alpha(opacity:'+(Icur+speed)+');'
			}else{
				obj.style[attr]=Icur+speed+'px';
			}

			if(Bstop){
				clearInterval(obj.timer);
				if(fn){
					fn();
				}
			}
		}
	},30)	
}

//判断某个属性值是否在cookie里,存在返回除本身外的其余数据字符串
function isIncooie(cookie,obj){
	var cookval=getCookie(cookie).split('-');
	var str='';
	var Bstop=true;
	var cook=[];
	//console.log(typeof cookval);
	for(var i=0;i<cookval.length-1;i++){
		cook.push(JSON.parse(cookval[i]));
		if(cook[i].id==obj.id&&cook[i].color==obj.color&& cook[i].size==obj.size){
			cook[i].count=cook[i].count+obj.count;
			Bstop=false;
			//cookval=cookval.slice(0,i)+cookval.slice(i+1,cookval.length-1);
			//console.log(cookval);
			//return cookval;
		}
		/*if(isInarr(attr,cook)){
			console.log('存在'+i)
			cookval=cookval.slice(0,i)+cookval.slice(i+1,cookval.length-1);
			//console.log(cookval);
			return cookval;
		}*/
	}

	for(var i in cook){
			str+=JSON.stringify(cook[i])+'-';
		}
	if(Bstop){
		str+=JSON.stringify(obj)+'-';
	}
	return str;
}
/*function isInarr(attr,obj){
	for(var key in obj){
		if(obj[key]==attr){
			return true;
		}
	}
	return false;
}*/
//isIncooie('carlist',"韩伊儿日韩时尚流行个性保暖茧型金属圈装饰大羽绒");