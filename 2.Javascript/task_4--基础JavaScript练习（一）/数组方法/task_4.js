(function() {
  // 定义一个空数组，用来封装数字
  var queue = [];

  var showQueue = function() {
    var tmp = [];
    //遍历queue中的数字，创建div展示出来
    for(var i in queue) {
      tmp.push("<div>" + queue[i] + "</div>")
    }
    //将tmp的内容在list中展示出来
    document.getElementById("list").innerHTML = tmp.join();
  }
  
  // click事件--事件委托
  document.getElementById("click_area").addEventListener("click",function(e) {
    //事件捕获
    var btn = e.target;
    var Input = document.getElementById("input");
    //函数：将queue与input的值关联起来
    function alertNow(index) {
      var re = /^[0-9]+\.?[0-9]*$/;
      if (re.test(Input.value)) {
        index.call(queue,Input.value);
      }
      else {
        alert("请输入纯数字");
      }
    }

    switch(btn.id) {
      case "left_in": alertNow([].unshift);
      break;
      case "right_in": alertNow([].push);
      break;
      case "left_out": alert(queue.shift());
      break;
      case "right_out": alert(queue.pop());
      break;
      default:
      break;
    }

    // 清空input的值，以便输入新的值
    Input.value = "";
    showQueue();
  })

})()