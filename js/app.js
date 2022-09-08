var navbar = document.querySelector('nav');
var sections = document.querySelectorAll('section');

// this to create the navber elment
var ul = document.createElement('ul');

for(let i =1; i<= sections.length; i++){
    var li = document.createElement('li')
    li.setAttribute('data-key', `${i}`)
    li.setAttribute('id',`section${i}`);
    li.textContent = `Section${i}`;
    ul.appendChild(li);
}

navbar.appendChild(ul);

// this fucntion execpt to to take an iterators and class which you want to remove from the iterator
function removeClass(iterators,className){
    iterators.forEach(e=>{
        if(e.classList.contains(className)){
            e.classList.remove(className);
        }
    })
}

var lists = document.querySelectorAll('li');
ul.onclick = (e) =>{
    removeClass(lists,'active');
    e.target.classList.add('active');
    window.location.hash = e.target.id+'_';
}

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
        var span = document.querySelector(`span[data-key='${event.target.getAttribute('data-key')}']`);
        var sec  =document.querySelector(`section[data-key='${event.target.getAttribute('data-key')}']`);
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

// this code control the active section , the active list and
window.onscroll = (e) =>{
    const element = document.body.getBoundingClientRect();
    const se = document.querySelector('section').getBoundingClientRect().height;
    // find which section is on views
    const postion = Math.round(-((element.top)/ se));
    // find the section name
    let sectionId = 'section'+postion+'_';
    removeClass(sections, 'active-class');
    removeClass(sections,'circle');

    // makes the active section view the circle
    // add the active to the perticuler elemnt and add
    if(postion >= 1){
        var lis= document.querySelector(`li[data-key="${postion}"]`);
        removeClass(lists,'active');      
        lis.classList.add('active');
        var section = document.querySelector(`#${sectionId}`);
        var div = document.querySelector(`div[data-key="${postion}"]`);
        section.classList.add('active-class');
        div.classList.add('circle');
    }
    onScrolling();
}