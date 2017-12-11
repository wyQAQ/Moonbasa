//----关闭头部广告
var headad=document.getElementById("headad");
var closepic=document.getElementById("closepic");
closepic.onclick=function(){
	headad.style.display="none";
}
//----关闭头部广告


//注册登录
var headnavright=document.querySelector(".headnav-right");
var log=headnavright.querySelectorAll('li')[0].querySelector('a');
var reg=headnavright.querySelectorAll('li')[2].querySelector('a');
log.onclick=function(){
	location.href="reglog.html?"+log.innerHTML;
}
reg.onclick=function(){
	location.href="reglog.html?"+reg.innerHTML;
}



ajax("get","data.json",'',function(goods){
	var allkinds=[];
	var types=[];
	var detailsinfo=[];
	var searchinput=document.getElementById("searchinput");
	var searchtxt=document.querySelector(".searchtxt");
	searchtxt.innerHTML+='<ul id="oList"></ul>';
	for(var i=0;i<goods.length;i++){
		allkinds.push(goods[i].inputtype);
		for(var j=0;j<goods[i].typeinfo.length;j++){
			types.push(goods[i].typeinfo[j].type);
			for(var k=0;k<goods[i].typeinfo[j].info.length;k++){
				detailsinfo.push(goods[i].typeinfo[j].info[k].detail);
			}
		}
	}
	var searchinput=document.getElementById("searchinput");
	var searchbtn=document.getElementById("searchbtn");
	var oList=document.getElementById("oList");
	searchinput.onfocus=function(){
		oList.style.display="block";
		if(searchinput.value.length==0){
			oList.innerHTML='';
			for(var ki=0;ki<allkinds.length;ki++){
				oList.innerHTML+='<li>'+allkinds[ki]+'</li>';
				/*searchinput.oninput=function(){
					if(searchinput.value==allkinds[ki]){
						oList.innerHTML='';
						for(var ti=0;ti<types.length;ti++){
							oList.innerHTML+='<li>'+types[ti]+'</li>';
						}
					}
				}*/	
			}
		}
		
		if(searchinput.value.length>0){
			oList.innerHTML='';
			var typelen=types.length;
			if(searchinput.value=="衣服"){
				for(ci=typelen-1;ci>typelen-3;ci--){
					oList.innerHTML+='<li>'+types[ci]+'</li>';
				}
			}else{
				for(var ti=0;ti<types.length-2;ti++){
					oList.innerHTML+='<li>'+types[ti]+'</li>';
				}
			}
			
		}
		var oLi=oList.querySelectorAll("li");
		for(var olii=0;olii<oLi.length;olii++){
			oLi[olii].onclick=function(){
				searchinput.value=this.innerHTML;
				oList.style.display="none";
			}
		}
		searchinput.onblur=function(){
			setTimeout(function(){
				oList.style.display="none";
			}, 1000)
			
		}
			
	}
	searchbtn.onclick=function(){
		if(searchinput.value){
			location.href="hatslist.html?"+searchinput.value;
		}	
	}
})

