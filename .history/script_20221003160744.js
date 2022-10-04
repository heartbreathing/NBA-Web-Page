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