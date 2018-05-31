/*用DOM element 实现*/
window.onload =function() {
	var leftIn = document.getElementById("left_in");
	var rightIn = document.getElementById("right_in");
	var leftOut = document.getElementById("left_out");
  var rightOut = document.getElementById("right_out");
  var Input = document.getElementById("input");
  var List = document.getElementById("list");
  
  //创建元素
  function Create() {
    var re = /^[0-9]+\.?[0-9]*$/;
    var Div = document.createElement("div");
    if (re.test(Input.value)) {
      Div.innerHTML = Input.value;
      return Div;
    }
    else {
      alert("请输入纯数字");
    }
  }
  //删除元素
  function Delete(node) {
    var Div = List.getElementsByTagName("div");
    List.removeChild(node);
  }


  // 事件绑定函数，兼容浏览器差异
  function addEvent(element, event, listener) {
    if (element.addEventListener) {
      element.addEventListener(event, listener, false )
    }
    else if (element.attachEvent) {
      element.attachEvent("on" + event, listener);
    }
    else {
      element["on" + event] = listener;
    }
  }

  // 为四个按钮绑定事件
  addEvent(leftIn, "click", function() {
    List.insertBefore(Create(), List.firstChild);
    Input.value = "";
  });
  addEvent(rightIn, "click", function() {
    List.appendChild(Create());
    Input.value = "";
  });
  addEvent(leftOut, "click", function() {
    var node = List.firstChild;
    Delete(node);
    alert(node.innerText);
  });
  addEvent(rightOut, "click", function() {
    var node = List.lastChild;
    Delete(node);
    alert(node.innerText);
  });

  //点击删除元素
  addEvent(List, "click", function(e) {
    List.removeChild(e.target);
  })
}