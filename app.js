var section1 = document.querySelector('#section1');
var section2 = document.querySelector('#section2');
var section3 = document.querySelector('#section3');
var section4 = document.querySelector('#section4');

section1.addEventListener('click', function(e){
    window.location.hash = 'fSection';
});
section2.addEventListener('click', function(e){
    window.location.hash = 'sSection';
});
section3.addEventListener('click', function(e){
    window.location.hash = 'tSection';
});
section4.addEventListener('click', function(e){
    window.location.hash = 'rSection';
});

var nav = document.querySelector('nav');

function onScrolling(){
    nav.style.visibility = 'visible';
    setTimeout(function(){
        nav.style.visibility = 'hidden';
    },5000)
}

document.addEventListener('click', function(e){
    e.stopPropagation();
    section1.classList.remove('active');
    section2.classList.remove('active');
    section3.classList.remove('active');
    section4.classList.remove('active');
    e.target.classList.add('active');
    onScrolling();
})

window.onscroll = function(e){
    onScrolling();
}

document.addEventListener('click', function(e){

    var section2 = document.querySelector('#sSection');
    var section3 = document.querySelector('#tSection');
    var section4 = document.querySelector('#rSection');
    var section1 = document.querySelector('#fSection');
    var firstLetter = document.querySelector('#firstLetter');
    var SecondLetter = document.querySelector('#secondLetter');
    var thirdLetter = document.querySelector('#thirdLetter');
    var forthLetter = document.querySelector('#forthLetter');
    document.querySelector('#firstClose').addEventListener('click',function(e){
        if(firstLetter.style.display === 'none'){
            firstLetter.style.display = 'flex';
            section1.style.minHeight = '90vh';
        }
        else{
            firstLetter.style.display = 'none';
            section1.style.minHeight = '10vh';
        }
    });
    document.querySelector('#secondClose').addEventListener('click', function(){
        if(SecondLetter.style.display === 'none'){
            SecondLetter.style.display = 'flex';
            section2.style.minHeight = '90vh';
        }
        else{
            SecondLetter.style.display = 'none';
            section2.style.minHeight = '10vh';
        }
    })
    document.querySelector('#thirdClose').addEventListener('click',function(){
        if(thirdLetter.style.display === 'none'){
            thirdLetter.style.display = 'flex';
            section3.style.minHeight = '90vh';
        }
        else{
            thirdLetter.style.display = 'none';
            section3.style.minHeight = '10vh';
        }
    })
    document.querySelector('#forthClose').addEventListener('click',function(){
        if(forthLetter.style.display === 'none'){
            forthLetter.style.display = 'flex';
            section4.style.minHeight = '90vh';
        }
        else{
            forthLetter.style.display = 'none';
            section4.style.minHeight = '10vh';
        }
    })

})
