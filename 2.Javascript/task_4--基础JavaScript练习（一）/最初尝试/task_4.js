// 用了一种很直接的粗糙方法，仅供参考。
window.onload =function() {
	var leftIn = document.getElementById("left_in");
	var rightIn = document.getElementById("right_in");
	var leftOut = document.getElementById("left_out");
  var rightOut = document.getElementById("right_out");
  var Input = document.getElementById("input");
  var List = document.getElementById("list");
  var re = /^[0-9]+\.?[0-9]*$/;
  

  // 函数：点击后去除
  function Remove() {
    for (var i = 0; i < List.childNodes.length; i++) {
  	  List.childNodes[i].onclick = function() {
  	  this.parentNode.removeChild(this);	
  	  };
    }
  }

  // 左侧入
  leftIn.onclick = function() {
   var newItem = document.createElement("div");
   var textNode = document.createTextNode(Input.value);
   newItem.appendChild(textNode);
   //输出值只能是数字
   if (re.test(Input.value)) {
     List.insertBefore(newItem,List.childNodes[0]);
    }
   else {
    alert("请输入数字");
   }

   Remove();
  }

  // 右侧入
  rightIn.onclick = function() {
   var newItem = document.createElement("div");
   var textNode = document.createTextNode(Input.value);
   newItem.appendChild(textNode);
   //输出值只能是数字
   if (re.test(Input.value)) {
     List.appendChild(newItem);
   }
   else {
    alert("请输入数字");
   }
   Remove();
  }

  // 左侧出
  leftOut.onclick = function() {
  	List.removeChild(List.childNodes[0]);
  }

  // 右侧出
  rightOut.onclick = function() {
  	List.removeChild(List.lastChild);
  }

}