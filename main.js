// Menu
$(document).ready(function(){
    $(".menu").click(function(){
        $("nav").slideToggle();
    });
});
//slide show
var hinh = [
    'img/banner 1.webp',
    'img/banner2.jpg',
    'img/banner3.png',
];
var index = 0;
function prev(){
    index--;
    if(index<0) index=hinh.length-1;
    document.getElementById('banner').src=hinh[index];
    document.getElementById('0').style.color='white';
    document.getElementById('1').style.color='white';
    document.getElementById('2').style.color='white';
    document.getElementById(index).style.color='#1598d4';
}
function next(){
    index++; 
    if(index==hinh.length) index=0;
    document.getElementById('banner').src=hinh[index];
    document.getElementById('0').style.color='white';
    document.getElementById('1').style.color='white';
    document.getElementById('2').style.color='white';
    document.getElementById(index).style.color='#1598d4';
}
setInterval ('next()',2000);
var c1= document.getElementById('c1');
var c2= document.getElementById('c2');
var c3= document.getElementById('c3');
const root = document.querySelector(':root');

c1.addEventListener('click',function(){
    root.style.setProperty('--color2','#009943');
    localStorage.setItem('pickColor','#009943')
})

c2.addEventListener('click',function(){
    root.style.setProperty('--color2','#e2bb10');
    localStorage.setItem('pickColor','#e2bb10')
})

c3.addEventListener('click',function(){
    root.style.setProperty('--color2','#0fe3ea');
    localStorage.setItem('pickColor','#0fe3ea')
})
    
function loadTheme(){
    if(localStorage.getItem('pickColor') !=''){
        root.style.setProperty('--color2',localStorage.getItem("pickColor"));
    }
}
