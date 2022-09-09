let navbar = document.querySelector('nav');
const sections = document.querySelectorAll('section');

// this to create the navber elment
let ul = document.createElement('ul');

for(let i =1; i<= sections.length; i++){
    //create a list
    let li = document.createElement('li')
    li.setAttribute('data-key', `${i}`)
    li.setAttribute('id',`section${i}`);
    li.textContent = `Section${i}`;
    //add the list to the ul element
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



// it give for the active section it's properties
function activeSection(postion){
    // get the section id
    const sectionId = 'section'+postion+'_';

    //removes the active-class from sections
    removeClass(sections, 'active-class');
    //removes the circle class fomr sections
    removeClass(sections,'circle');
    //gets the list with a perticular element
    let lis= document.querySelector(`li[data-key="${postion}"]`);
    //remove the active class from lists
    removeClass(lists,'active');      
    //Adding active list to the list you click on
    lis.classList.add('active');
    //makes the viewd sections look active by adding active-class and circle
    let section = document.querySelector(`#${sectionId}`);
    let div = document.querySelector(`div[data-key="${postion}"]`);
    section.classList.add('active-class');
    div.classList.add('circle');
}


// This function return which postion you are looking for
function getPosition(){
    const element = document.body.getBoundingClientRect();
    const se = document.querySelector('section').getBoundingClientRect().height;
    const postion = Math.round(-((element.top)/ se));
    return postion;
}

let lists = document.querySelectorAll('li');
ul.addEventListener('click', function(event){
    //removeClass it remove a class from a specfic iterators
    removeClass(lists,'active');    
    event.target.classList.add('active');
    const elemnt = document.querySelector(`#${event.target.id+'_'}`);
    activeSection(elemnt.getAttribute('data-key'));
    //remove the scroll event
    document.removeEventListener('scroll',scrolling);

    //move to the specfic elemnt
    elemnt.scrollIntoView(elemnt.getAttribute('data-key'));


    // calculate the time it will take to go to the sectin you click on in the navbar
    const currentPosition = getPosition();
    const currentHeight = document.querySelector('section').getBoundingClientRect().height;
    const nextPosition = elemnt.getAttribute('data-key');
    const settime = ((Math.abs(currentPosition - nextPosition)) * currentHeight) / 2.6;

    setTimeout(function(){
        document.addEventListener('scroll',scrolling);
    },settime);
});
//set time as a default a active
document.addEventListener('scroll',scrolling);

// this function to show navbar which you scroll or click and do that using visiibilty
function onScrolling(){
    navbar.style.visibility = 'visible';
    setTimeout(function(){
        navbar.style.visibility = 'hidden';
        // and hide it ones again after 5s
    },5000)
}

// this elment in which by click on will hide the detail of a section
let is = document.querySelectorAll('i');
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


//the scrolling function which control the looks of the section you looking at
function scrolling(){
    if(getPosition() >= 1){
        activeSection(getPosition());
    }
    onScrolling();
}
// this code control the active section , the active list and


//when the window loads it show the navbar as a defualt action
window.onload = () =>{
    onScrolling();
}
