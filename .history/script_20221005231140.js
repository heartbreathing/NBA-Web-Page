//  sidebar toggle button function 
// $() is a shorthand of  "document.getElementByIdx_x()"

// $('.btn').on('click', function () {
//     $('.btn').toggleClass('btnc');
//     $('.sidebar').toggleClass('side');
//   });



// // Replace the element.
var para = document.createElement('p');
var node = document.createTextNode('1991~1998 SIX NBA CHAMPIONSHIPS ')
para.appendChild(node);

var parent = document.getElementById('content2');
var child = document.getElementById('p1');
parent.replaceChild(para, child);

//Change the style.
document.getElementById('p2').style.fontFamily= "Arial";
document.getElementById('p2').style.color = "white";


function clickMe() {
    alert('Wellcome to my web site!')
}

// animation
// function animate() {
//     let box1 = document.getElementById('myBox');
//     box1.classList.add('box1-animated');
// }
// let box1 = document.getElementById('myBox');
// box1.addEventListener('mousedown',animate)
 



