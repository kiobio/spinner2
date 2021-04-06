const firstImg = document.querySelector('.spinner');
const secondImg= document.querySelector('.pig');


firstImg.addEventListener('mouseenter', function(){
    firstImg.style.transform = "rotate(360deg)";
    firstImg.style.transition = "4s" ;



setTimeout(function(){
    firstImg.className='pig'
    secondImg.className= 'spinner'
}, 4000)
} )