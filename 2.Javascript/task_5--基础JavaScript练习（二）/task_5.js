// 定义存放数据的数组
var data = [];
//定义更新ul的字符串
var str = "";
var List = document.getElementById("list");

//随机背景颜色
function rancolor() {
  var colorstr = ["#FF4D00","#FFBF00","#00FFFF","#66FF00","#6495ED","#DA70D6","#C0C0C0","#8CE600","#FF8C69","#00FA9A"];
  var i = Math.floor(Math.random()*10);
  return colorstr[i];
}

//数据更新函数
function updata() {
  List.innerHTML = "";
  for (var i = 0; i <= data.length-1; i++) {
    var Li = document.createElement("li");
    Li.innerText = data[i];
    Li.style.height = data[i]*1.6 + "px";
    Li.style.backgroundColor = rancolor();
    Li.setAttribute("id","li-"+i);
    List.appendChild(Li);
  }
  document.getElementById("input").value = "";
}

//输入并处理数据的函数
function inputnum() {
  Input = document.getElementById("input").value.trim();
  if (data.length>60) {alert("数据已满");return 0;}
  if (Input>100||Input<10) {alert("请输入10~100之间的数字");return 0;}
  if (Input=="") {alert("请输入10~100之间的数字");return 0;}
  if (isNaN(Input)) {alert("请输入10~100之间的数字");return 0;}
}

//事件绑定与处理
var leftIn = document.getElementById("left_in").onclick = function() {
  // 若输入不合法则跳出函数
  if (inputnum()==0) return;
  data.splice(0,0,Input);
  updata();
}
var rightIn = document.getElementById("right_in").onclick = function() {
  if (inputnum()==0) return;
  data.push(Input);
  updata();
}
var leftOut = document.getElementById("left_out").onclick = function() {
  alert(data.splice(0,1));
  updata();
}
var rightOut = document.getElementById("right_out").onclick = function() {
  alert(data.pop());
  updata();
}

// 点击删除的代码
List.addEventListener("click",function(e) {
  //若点击的不是LI标签，则返回
  if(e.target.nodeName != "LI") return;
  liid = parseInt(e.target.getAttribute("id").substr(3));
  console.log(liid);
  data.splice(liid,1);
  updata();
})

// 随机生成数据
document.getElementById("random").onclick = function() {
  for (var i = 0; i <=50; i++) {
    data[i] = Math.floor(Math.random()*91+9);
  }
  updata();
}

//排序算法
document.getElementById("sortdata").onclick = function() {
  var i = 0, j = 1, temp;
  var len = data.length;
  var timer = null;
  timer = setInterval(run,25);
  function run() {
    if (i < len) {
      if (j < len) {
        if (data[i] > data[j]) {
          temp = data[i];
          data[i] = data[j];
          data[j] = temp;
          updata();
        }
        j++;
      } else {
        i++;
        j = i + 1;
      }
    } else {
      clearInterval(timer);
      return;
    }
  }
} 