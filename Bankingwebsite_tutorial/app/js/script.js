//use id in html file for java script functionality
const btnHamburger = document.querySelector('#btnHambrgr');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay')
const fadeElems = document.querySelectorAll('.has-fade');
const body = document.querySelector('body');

btnHamburger.addEventListener('click', function(){

    if(header.classList.contains('open')){
        console.log('close hamburger');
        body.classList.remove('no-scroll');
        header.classList.remove('open');
        fadeElems.forEach(function(element) {
            element.classList.remove('fade-in');
            element.classList.add('fade-out');
        });
        
        
    }
    else{
        console.log('open hamburger');
        body.classList.add('no-scroll');
        header.classList.add('open');
        fadeElems.forEach(function(element){
            element.classList.remove('fade-out');
            element.classList.add('fade-in');
        });
        
        
    }
    
});
