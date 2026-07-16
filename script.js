// Smooth Scroll for Navigation

document.querySelectorAll('nav a').forEach(link => {

link.addEventListener('click', function(e){

e.preventDefault();

const target = document.querySelector(this.getAttribute('href'));

if(target){

target.scrollIntoView({
behavior:'smooth'
});

}

});

});


// Navbar Shadow on Scroll

window.addEventListener('scroll',()=>{

const nav=document.querySelector('nav');

if(window.scrollY>50){

nav.style.boxShadow="0 8px 25px rgba(0,0,0,.12)";

}else{

nav.style.boxShadow="0 2px 20px rgba(0,0,0,.08)";

}

});


// Fade Animation

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

document.querySelectorAll("section").forEach(sec=>{

observer.observe(sec);

});
