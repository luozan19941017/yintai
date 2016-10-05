window.onload=function(){
	var bannerBox=getClass("banner_tu",document)[0];
	var bannertuBox=getClass("banner-tu",bannerBox)[0];
	// console.log(bannertuBox)
	var as=bannertuBox.getElementsByTagName('a');
	// console.log(as)
	var lunbobox=getClass("lunbo",document)[0];
	// console.log(lunbobox)
	var as2=lunbobox.getElementsByTagName("a");
	// alert(as2.length)
	var buttonBox=getClass("button_box",bannerBox)[0];
	// alert(buttonBox.length)
	var butl=getClass("left",buttonBox)[0];
	// alert(butl.length)
	var butr=getClass("right",buttonBox)[0];
	// alert(butr.length)
	var index=0;
	as[0].style.zIndex=10;
	var t=setInterval(move,1000)
		function move(){
			index++;
			if(index==as.length){
				index=0;
			}
			for (var i = 0; i<as.length; i++) {
				as[i].style.zIndex=0;
				as2[i].style.background=""
			};
			as[index].style.zIndex=10;
			as2[index].style.background="#e5004f"
		}
	bannerBox.onmouseover=function(){
				clearInterval(t)
			}
	bannerBox.onmouseout=function(){
				t=setInterval(move,1000)
			}
	as2[0].style.background="#e5004f"
	for (var i = 0; i<as2.length; i++) {
		as2[i].index=i;
		as2[i].onmouseover=function(){
			for (var i=0; i<as.length; i++) {
				as[i].style.zIndex=0;
				as2[i].style.background=""
			};
			as2[this.index].style.background="#e5004f"
			as[this.index].style.zIndex=10;
			index=this.index;
		}
	};
	
	butr.onclick=function(){
		move()
	}
	butl.onclick=function(){
		index--;
		if(index<0){index=as.length-1}
		for (var i = 0; i < as.length; i++) {
			as[i].style.zIndex="0";
			as2[i].style.background="";
		};
			as[index].style.zIndex="10";
			as2[index].style.background="#e5004f";
	}
	buttonBox.style.opacity=0;
	bannertuBox.onmouseover=function(){
		buttonBox.style.opacity=0.8;
	}
	bannertuBox.onmouseout=function(){
		buttonBox.style.opacity=0;
	}
	butl.onmouseover=function(){
		butl.style.background="#e5004f"
	}
	butl.onmouseout=function(){
		butl.style.background=""
	}
	butr.onmouseover=function(){
		butr.style.background="#e5004f"
	}
	butr.onmouseout=function(){
		butr.style.background=""
	}
	var wheelBox=getClass("wheel",document)[0]
	// alert(wheelBox.length)
	var chaozhi=getClass("chaozhitemai",wheelBox)[0]
	// console.log(chaozhi)
	var as3=chaozhi.getElementsByTagName("a")
	// alert(as3.length)
	var temaiBox=getClass("temai",wheelBox);
	// console.log(temaiBox)
	var  sanjiao=$("div",chaozhi)
	// console.log(sanjiao)
	sanjiao[0].style.display="block"
	temaiBox[0].style.zIndex=10;
	// temaiBox[0].style.borderBottom="6px solid #e5004f";  //不管用
	for (var i = 0; i < as3.length; i++) {
		as3[i].index=i;
		as3[i].onmouseover=function(){
		   for (var j= 0; j<as3.length; j++) {
				as3[j].style.borderBottom=""
				// alert(as3[j])
				temaiBox[j].style.zIndex=0;
				sanjiao[j].style.display="none"

			};
			as3[this.index].style.borderBottom="6px solid #e5004f";
			
			temaiBox[this.index].style.zIndex=10;
			sanjiao[this.index].style.display="block"
		}
	};

	//banner右边左移效果
	var bannerright=$(".banner_right")[0]
	bannerright.onmouseover=function(){
		animate(bannerright,{marginRight:10})
	}
	bannerright.onmouseout=function(){
		animate(bannerright,{marginRight:0})
	}
	//第二部分开始
	var dierBox=getClass("dierbufen_right",document)[0];
	// alert(dierBox.length)
	var righta1Box=getClass("right_a1",dierBox)[0];
	// alert(righta1Box.length)
	var as6=righta1Box.getElementsByTagName("a")
	// alert(as6.length)
	var righttuBox=getClass("right_tupian",dierBox)
	// alert(righttuBox.length)
	as6[0].style.borderBottom="6px solid #e5004f"
	righttuBox[0].style.zIndex=10;	
	for (var i = 0; i < as6.length; i++) {
		as6[i].index=i;
		as6[i].onmousemove=function(){
			for (var j = 0; j<as6.length; j++) {
				righttuBox[j].style.zIndex=0;	
				as6[j].style.borderBottom=""
			};
				righttuBox[this.index].style.zIndex=10;	
				as6[this.index].style.borderBottom="6px solid #e5004f"
		}

	};


//第三部分开始
	var disBox=$(".disanbufen_a2",document);
	// wheel(disBox[3])
	for (var i = 0; i < disBox.length; i++) {
		 wheel(disBox[i])
	};
	function wheel(disBox){
	var imgs=$(".imgs",disBox)[0];
	var as4=$("a",imgs)
	var  but2=$(".button2",disBox)[0];
	var but2l=$(".button2_left",but2)[0];
	var but2r=$(".button2_right",but2)[0];
	var lunbo2=$(".lunbo2",disBox)[0];
	var as5=$("a",lunbo2)
	var w=parseInt($("img",as4[0])[0].width)
	imgs.style.width=w*as4.length+"px"
	as5[0].style.background="#e5004f"
	for (var i = 0; i < as5.length; i++) {
		as5[i].index=i;
		as5[i].onclick=function(){
			for (var j = 0; j < as4.length; j++) {
				as5[j].style.background=""
			};
			as5[this.index].style.background="#e5004f"
			animate(imgs,{left:-w*this.index})
		}
	};
	but2.style.opacity=0;
		disBox.onmouseover=function(){
			but2.style.opacity=0.8;
			disBox.style.opacity=0.8;

		}
		disBox.onmouseout=function(){
			but2.style.opacity=0;
			disBox.style.opacity=1;
		}
		but2r.onmouseover=function(){
			but2r.style.background="#e5004f"
		}
		but2r.onmouseout=function(){
			but2r.style.background=""
		}
		but2l.onmouseover=function(){
			but2l.style.background="#e5004f"
		}
		but2l.onmouseout=function(){
			but2l.style.background=""
		}
		var s=0; //定义一个全局变量保存下标
		but2r.onclick=function(){
			s++;
           if(s>as4.length-1){
				s=1;
			}
			// alert(s)
			for (var i=0; i<as4.length; i++) {
				as5[i].style.background=""
			};
			as5[s].style.background="#e5004f"
			animate(imgs,{left:-w*s})
		}
		but2l.onclick=function(){
			s--;
			if(s<0){s=0}
			for (var i=0; i<as4.length; i++) {
				as5[i].style.background=""
			};
			as5[s].style.background="#e5004f"
			animate(imgs,{left:-w*s})

		}



	}
	
	
//边框效果v
var disanBox=$(".disanbufen_tupian")
function bian(disanBox){
var oneBox=$(".one",disanBox)
for (var i = 0; i < oneBox.length; i++) {
	oneBox[i].onmouseover=function(){
		animate($(".bt",this)[0],{width:270})
		animate($(".bl",this)[0],{height:180})
		animate($(".br",this)[0],{height:180})
		animate($(".bb",this)[0],{width:270})
	}
	oneBox[i].onmouseout=function(){
		animate($(".bt",this)[0],{width:0})
		animate($(".bl",this)[0],{height:0})
		animate($(".br",this)[0],{height:0})
		animate($(".bb",this)[0],{width:0})
	}
};
}
	for (var i = 0; i <disanBox.length; i++) {
	bian(disanBox[i])
};
	var temai=$(".temai");
	function bian2(temai){
	var oneBox=$(".one",temai)
	for (var i = 0; i < oneBox.length; i++) {
	oneBox[i].onmouseover=function(){
		animate($(".bt",this)[0],{width:241})
		animate($(".bl",this)[0],{height:283})
		animate($(".br",this)[0],{height:283})
		animate($(".bb",this)[0],{width:241})
	}
	oneBox[i].onmouseout=function(){
		animate($(".bt",this)[0],{width:0})
		animate($(".bl",this)[0],{height:0})
		animate($(".br",this)[0],{height:0})
		animate($(".bb",this)[0],{width:0})
	}
};
}
for (var i = 0; i < temai.length-1; i++) {
	bian2(temai[i])
};
	var righttu=$(".right_tupian")[1];
	var oneBox=$(".one",righttu)
	for (var i = 0; i < oneBox.length; i++) {
	oneBox[i].onmouseover=function(){
		animate($(".bt",this)[0],{width:196})
		animate($(".bl",this)[0],{height:246})
		animate($(".br",this)[0],{height:246})
		animate($(".bb",this)[0],{width:196})
	}
	oneBox[i].onmouseout=function(){
		animate($(".bt",this)[0],{width:0})
		animate($(".bl",this)[0],{height:0})
		animate($(".br",this)[0],{height:0})
		animate($(".bb",this)[0],{width:0})
	}
};


// 
//无缝轮播
	var leftB=$(".left_c2")
	function lb(leftB){
	var iB=$(".imgbox",leftB)[0]
	var tubox=$(".left_c21",iB)
	var ww=parseInt(getStyle(tubox[0],"width"))
	var btnb=$(".btn",leftB)[0]
	var bll=$(".left",btnb)[0]
	var blr=$(".right",btnb)[0]
	tubox[0].style.left=0;
	var inde=0;
	var next=0;
	blr.onclick=function(){
		next++;
		if(next==tubox.length){
			next=0;
		}
		tubox[next].style.left=ww+"px"
		animate(tubox[inde],{left:-ww})
		animate(tubox[next],{left:0})
		inde=next
	}
	bll.onclick=function(){
		next--;
		if(next<0){next=tubox.length-1}
		tubox[next].style.left=-ww+"px"
		animate(tubox[inde],{left:ww})
		animate(tubox[next],{left:0})
		inde=next
	}

}
for (var i = 0; i < leftB.length; i++) {
	lb(leftB[i])
};
//第三部分结束
//商品分类导航
	var bannerleft=$(".banner_left")[0];
	var liss=$("li",bannerleft);
	var xuanfu=$(".xuanfu",bannerleft);
	// console.log(xuanfu)
	// console.log(liss)

	for (var i = 0; i < liss.length; i++) {
		liss[i].xiabiao=i;
		hover(liss[i],function(){
			xuanfu[this.xiabiao].style.display="block";
		},function(){
			xuanfu[this.xiabiao].style.display="none";
		})
		// liss[i].onmouseover=function(){
		// 	for (var p = 0; p < xuanfu.length; p++) {
		// 		xuanfu[p].style.display="none";
		// 	};
		// 	xuanfu[this.xiabiao].style.display="block";
		// 	// console.log("111")
		// }
	};
	// bannerleft.onmouseout=function(){
	// 	for (var i = 0; i < xuanfu.length; i++) {
	// 		xuanfu[i].style.display="none"
	// 		// console.log("222")
	// 	};
	// }

//固定定位
   var disanbufenbox=$(".disanbufen_box");
   var dw=$(".dw");
   var dingwei=$(".dingwei")[0];
   var lou=$("a",dingwei);
   var lh=document.documentElement.clientHeight;
   var flor=[];
   for (var i = 0; i < disanbufenbox.length; i++) {
   	flor.push(disanbufenbox[i].offsetTop)
   };
   window.onscroll=function(){
   	var top=document.body.scrollTop||document.documentElement.scrollTop;
   	if(top>1300){
   		dingwei.style.top=0;
   	}else{
   		dingwei.style.top="-800px";
   	}

    for (var i = 0; i < flor.length; i++) {
   	if(top+300>flor[i]){
   		for (var j = 0; j < dw.length; j++) {
   			dw[j].style.opacity=0;
   		};
   		dw[i].style.opacity=1;
   	}
   };
   for (var k = 0; k < lou.length; k++) {
   	lou[k].lll=k;
   	lou[k].onclick=function(){
   		animate(document.body,{scrollTop:flor[this.lll]},500);
		animate(document.documentElement,{scrollTop:flor[this.lll]},500)
   	}
   };
  //  var btt=$(".bt")[0];
  //  btt.onclick=function(){
		// 	animate(document.body,{scrollTop:0},200)
		// 	animate(document.documentElement,{scrollTop:0},200)
		// }

   //优化
    var yh=$(".yh");
    var shuzu=[];
 	var flags=[];
 	for (var i = 0; i<yh.length; i++) {
  		shuzu.push(yh[i].offsetTop)
  		flags.push(true);
  	};
  	 for (var f = 0; f < shuzu.length; f++) {
  	if(shuzu[f]<top+lh&&flags[f]){
  		flags[f]=false;
  			var ig=$("img",yh[f])
  			for (var g = 0; g < ig.length; g++) {
  				ig[g].src=ig[g].getAttribute("asrc")
  			};
  	}
  };
 }
//top我的银泰效果
	var yintai=$(".yintai")[0];
	var yul=$("ul",yintai)[0];

	hover(yintai,function(){
		yul.style.display="block"
		// console.log("移入")
	},function(){
		yul.style.display="none"
		// console.log("移出")
	})
	var a2a=$(".a2")[0];
	var w=$(".w",a2a)[0];
	hover(a2a,function(){
		w.style.display="block"
	},function(){
		w.style.display="none"
	})
	var a=$(".a");
	var zhezhao=$(".zhezhao");
	for (var i = 0; i < a.length; i++) {
		a[i].att=i;
	hover(a[i],function(){
		zhezhao[this.att].style.display="block"
	},function(){
		zhezhao[this.att].style.display="none"

	})
	};






 


	
}