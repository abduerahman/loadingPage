var navbar = document.querySelector('nav');

navbar.addEventListener('click', function(e){
    window.location.hash= e.target.id+'_';
    document.querySelectorAll('navbar li').forEach(e =>{
        if(e.classList.contains('active')){
            e.classList.remove('active');
        }
    })
    onScrolling();
});

var nav = document.querySelector('nav');

function onScrolling(){
    nav.style.visibility = 'visible';
    setTimeout(function(){
        nav.style.visibility = 'hidden';
    },5000)
}


window.onscroll = function(e){
    onScrolling();
}

var is = document.querySelectorAll('i');

is.forEach(function(e){
    e.onclick = () =>{
        var span = document.querySelector(`span[data-key='${event.target.getAttribute('data-key')}']`);
        var sec  =document.querySelector(`section[data-key='${event.target.getAttribute('data-key')}']`);
        if(span.classList.contains('collapes')){
            span.classList.remove('collapes');
            sec.classList.remove('sectionCollapedHeight');
            
        }
        else{
            span.classList.add('collapes');
            sec.classList.add('sectionCollapedHeight');
        }
    }
})
