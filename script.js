function toggleMenu(){
  document.getElementById("nav").classList.toggle("show");
}

function scrollToSection(){
  document.getElementById("projects").scrollIntoView({behavior:"smooth"});
}
new Typed("#typing",{
  strings:[
    "Grade 11 Student",
    "Learning Web Development",
    "Building Responsive Websites",
    "HTML & CSS Developer",
    "Focused on Clean UI & UX Design",
    "Practicing Real-World Projects"  
  ],
  typeSpeed:60,
  backSpeed:40,
  loop:true
});
