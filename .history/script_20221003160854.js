//  sidebar toggle button function 
// $() is a shorthand of  "document.getElementByIdx_x()"

// $('.btn').on('click', function () {
//     $('.btn').toggleClass('btnc');
//     $('.sidebar').toggleClass('side');
//   });



  document.getElementById('.btn').on('click',function(){
    document.getElementById('.btn').toggleClass('.btnc');
    document.getElementById('.sidebar').toggleClass('side');
  })
document.getElementById('.btn').click();
// document.getElementById("btnc").click();

document.getElementById("btnc").onclick = function() {
    //定义点击事件  当点击后触发什么函数
    alert("123123");
  };
————————————————
版权声明：本文为CSDN博主「香煎三文鱼」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
原文链接：https://blog.csdn.net/qq_39569480/article/details/115958879