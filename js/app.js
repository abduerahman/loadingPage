var navbar = document.querySelector('nav');
const sections = document.querySelectorAll('section');


// this to create the navber elment
var ul = document.createElement('ul');
for(let i =1; i<= sections.length; i++){
    const li = document.createElement('li')
    li.setAttribute('id',`section${i}`);
    const a = document.createElement('a');
    a.href = `#section${i}_`;
    a.textContent = `Section ${i}`;
    li.appendChild(a);
    ul.appendChild(li);
}
navbar.appendChild(ul);



// this function to show navbar which you scroll or click and do that using visiibilty
function onScrolling(){
    navbar.style.visibility = 'visible';
    setTimeout(function(){
        navbar.style.visibility = 'hidden';
        // and hide it ones again after 5s
    },5000)
}


// this elment in which by click on will hide the detail of a section
var is = document.querySelectorAll('i');

is.forEach(function(e){
    e.onclick = () =>{
        let span = document.querySelector(`span[data-key='${event.target.getAttribute('data-key')}']`);
        let sec  =document.querySelector(`section[data-key='${event.target.getAttribute('data-key')}']`);
        // it use the css class collapes to hide and to give it a less hight using  sectionCollapedHeight css class
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


// this code to control the active li in the ul
var ul = document.querySelector('ul');
const childs = ul.children;

// this code control the active section , the active list and
window.onscroll = (e) =>{
    onScrolling();
    e.preventDefault();
    const element = document.body.getBoundingClientRect();
    const se = document.querySelector('section');
    // find which section is on views
    let postion = Math.round(-((element.top)/ se.getBoundingClientRect().height));
    let sectionName = 'section'+postion;
    // find the section name
    let section = 'section'+postion+'_';
    let div = document.querySelector(`div[data-key="${1}"]`);
    for(let i = 0; i <sections.length; i++){
        div = document.querySelector(`div[data-key="${i+1}"]`);
        // this to style the active section 
        if(sections[i].id === section){
            sections[i].classList.add('active-class');
        }
        else if(sections[i].classList.contains('active-class')){
            sections[i].classList.remove('active-class');
        }

        //this to remove the circle if it viewd in any sections
        if(div.classList.contains('circle')){
            div.classList.remove('circle');
        }

        // give the active section in the
        if(childs[i].id === sectionName){
            childs[i].classList.add('active');
            childs[i].children[0].style.color = 'white';
        }
        else if(childs[i].classList.contains('active')){
            childs[i].classList.remove('active');
            childs[i].children[0].style.color = 'black';
        }
    }
    // makes the active section view the circle
    if(postion >= 1){
        div = document.querySelector(`div[data-key="${postion}"`);
        div.classList.add('circle');
    }

}
