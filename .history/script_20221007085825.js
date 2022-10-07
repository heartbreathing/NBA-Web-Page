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

// add a 'click' on 'about
function clickMe() {
    alert('Welcome to my web site!');
}
let button = document.getElementById('about');
button.addEventListener('click',clickMe)


 



