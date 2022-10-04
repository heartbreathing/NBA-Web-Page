//  sidebar toggle button function 
// $() is a shorthand of  "document.getElementByIdx_x()"

// $('.btn').on('click', function () {
//     $('.btn').toggleClass('btnc');
//     $('.sidebar').toggleClass('side');
//   });


// 
var para = document.createElement('p');
var node = document.createTextNode('The Bulls are the only NBA franchise to win multiple championships while never losing an NBA Finals series in their history.')
para.appendChild(node);

var parent = document.getElementById('content2');
var child = document.getElementById('p1');
parent.replaceChild(para, child);
