function onScrolling(){
    nav.style.visibility = 'visible';
    setTimeout(function(){
        nav.style.visibility = 'hidden';
    },5000)
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

var ul = document.querySelector('ul');
let childs = ul.children;
ul.onclick = (e) =>{
    let childs = ul.children;
    for(let c of childs){
        if(c.classList.contains('active')){
            c.classList.remove('active');
            c.children[0].style.color= 'black';
        }
    }
    e.target.parentElement.classList.add('active');
    e.target.style.color= 'white';
}

window.onscroll = (e) =>{
    var element = document.body.getBoundingClientRect();
    var se = document.querySelector('section');
    let postion = Math.round(-((element.top)/ se.getBoundingClientRect().height));
    let sectionName = 'section'+postion;
    for(let i of childs){
        if(i.id == sectionName){
            i.classList.add('active');
            i.children[0].style.color = 'white';
        }
        else if(i.classList.contains('active')){
            i.classList.remove('active');
            i.children[0].style.color = 'black';
        }
    }
}