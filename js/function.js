//解决ie兼容问题
//类名方式去获取元素
function getClass(classname,range){// 第一个参数是要获取的类名，第二个参数是范围
	if(range.getElementsByClassName){  //判断当前是ff(返回是一个函数)还是ie浏览器  (返回是未定义) 如果是ff就执行下面代码
		return range.getElementsByClassName(classname)
	}else{   //如果是ie就执行下面代码
		var all=range.getElementsByTagName("*")
		 //把页面中所有的标签名拿出来
		var arr=[];    //新建一个空数组
		for (var i=0; i<all.length; i++) {   //遍历所有的标签
			//all[i].className==classname
			if(checkClass(all[i].className,classname)){  //如果标签名中的className属性的值==classname执行下面代码
				arr.push(all[i]);       //把all里符合条件的放到arr数组中
			}
		};return arr;

	}
	
	
}
//检测当前元素的
function checkClass(Tagname,aclass){  //checkClass是一个检索函数  
	var arr=Tagname.split(" ");   //用空格把tagname分开放到arr这个数组中
	for (var i = 0; i<arr.length; i++) {   //遍历数组
		if(arr[i]==aclass){   //如果数组中的第i个==aclass
			return true;			//返回true
		}
	};
	return false;  //否则返回false
}
//解决textContent在ie6~8中的兼容问题
    function text(obj,val){	
    if(val==undefined){  //如果第二个参数val是空值的话,那么就是要获取内容
    	if(obj.textContent!=undefined){  
    		return obj.textContent;  
    	}else{
    		return obj.innerText;
    	}
   }else{  				//如果第二个参数val有值的话就是要把这个值赋值给对象
	   	if(obj.textContent!=undefined){
	    		obj.textContent=val;
	    	}else{
	    		obj.innerText=val;
	    	}
   }
}
   //获取通用样式
   // getStyle(obj,shuxing)
   // obj 要
   function getStyle(obj,shuxing){
   	if(obj.currentStyle){
   		return obj.currentStyl[shuxing];
   	}else{
   		return getComputedStyle(obj,null)[shuxing];
   	}
}



//获取页面元素
//页面加载
	function $(selector,range){
		
			var range=range||document;
		if(typeof selector=="string"){
			// alert(获取)
			if(selector.charAt(0)=="#"){
				return range.getElementById(selector.split(1));
			}
			if(selector.charAt(0)=="."){
				return getClass(selector.slice(1),range);
			}
			if(/^[a-zA-Z][a-zA-Z1-6]{0,9}$/.test(selector))
				return range.getElementsByTagName(selector);
			//
		}else if(typeof selector=="function"){
			// alert(页面加载)
			window.onload=selector;
		}
}
//获取所有子节点
//不要换行 ，不要注释
	function getChilds(obj){
		var childs=obj.childNodes;
		var newArr=[];
		for (var i = 0; i<childs.length; i++) {
			if(!(childs[i].nodeType==8||(childs[i].nodeType==3&&tram(childs[i].nodeValue)=="")))
			{
				newArr.push(childs[i])
			}	
		}return newArr;

	};
			
	function tram(str){
		return str.replace(/^\s+|\s+$/g,"")
		//把字符串左右两边的空白去掉  g是全局
	}
//获取第一个子节点
	function getFirst(parent){
		return getChilds(parent)[0];
	}
//获取最后一个子节点
	function getLast(parent){
		var last=getChilds(parent)
		return last[last.length-1]
	}
//获取指定节点
//i是要获取元素的下标
   function getIndex(parent,i){
   	return getChilds(parent)[i]
   }
//获取下一个兄弟节点
  function getNext(obj){
  	var next=obj.nextSibling;
  	if(!next){
  		return
  	}
  	while(next.nodeType==8||(next.nodeType==3&&tram(next.nodeValue)=="")){
  		next=next.nextSibling
  		if(!next){
  			return false
  		}
  		//while循环  当条件满足的时候，执行循环体，当不满足的时候退出循环体
  	}return next;
  }
  //获取上一个兄弟元素
  function getup(obj){
  	var up=obj.previousSibling;
  	if(!up){
  		return
  	}
  	while(up.nodeType==8||(up.nodeType==3&&tram(up.nodeValue)=="")){
  		up=up.previousSibling
  		if(!up){
  			return false
  		}
  		//while循环  当条件满足的时候，执行循环体，当不满足的时候退出循环体
  	}return up;
}
//插入到某个对象之前
		// 第一个参数是要插入的对象，之前的对象
function insertbefore(obj1,obj2){
	var parent=obj2.parentNode;
	parent.insertBefore(obj1,obj2);
}
//插入到某个对象之后
// 要插入的，之后的
function inserAfter(obj,endobj){
	var parent=endobj.parentNode;
	var next=getNext(endobj)
	if(next){
		parent.insertBefore(obj,next)
	}else{
		parent.appendChild(obj)
	}
	
}












