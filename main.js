
function toTop(){
scrollTo(0,0);    
}



var hanbtn = document.getElementById('hamburgerbtn');


hanbtn.addEventListener('click', () => {
     document.getElementsByClassName('overlay')[0].style.display = "block"; 
})


var xxx = document.getElementById('x');
xxx.addEventListener('click', () => {
     document.getElementsByClassName('overlay')[0].style.display = "none";   
    
})






/*

    var element = document.getElementById('about1');
    var rect = element.getBoundingClientRect();
    var position = rect.top;    
    
    
   function  scrollToTop() {
  scrollTo(0, position);
    }*/


