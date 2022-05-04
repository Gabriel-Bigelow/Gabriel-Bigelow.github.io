const navigationBar = document.getElementById('navigation-bar');
const aboutMe = document.getElementById('about-me-link');
const projects = document.getElementById('projects-link');
const skills = document.getElementById('skills-link');
const contact = document.getElementById('contact-link');

const backToTop = document.getElementById('back-to-top-link');

const retracted = "3px 30px";
const extended = "20px 30px";

backToTop.style.margin = extended;
aboutMe.style.margin = extended;
projects.style.margin = extended;
skills.style.margin = extended;
contact.style.margin = extended;








let backgroundTimer = 5000;
let backgroundLoopStarted = false;

let changeBackground1 = () => {
    backgroundLoopStarted = true;
    let background1 = document.getElementById('about-me-background-1');
    background1.style.opacity = 0;
    setTimeout(() => {changeBackground2();}, backgroundTimer)
}

let changeBackground2 = () => {
    let background2 = document.getElementById('about-me-background-2');
    background2.style.opacity = 0;
    setTimeout(() => {changeBackground3();}, backgroundTimer)
}

let changeBackground3 = () => {
    let background3 = document.getElementById('about-me-background-3');
    background3.style.opacity = 0;
    setTimeout(() => {changeBackground4();}, backgroundTimer)
}

let changeBackground4 = () => {
    let background1 = document.getElementById('about-me-background-1');
    let background2 = document.getElementById('about-me-background-2');
    let background3 = document.getElementById('about-me-background-3');
    background1.style.opacity = 100;
    setTimeout(() => {background2.style.opacity=100;
        background3.style.opacity=100;}, backgroundTimer/4);
    setTimeout(() => {changeBackground1();}, backgroundTimer)
}










window.addEventListener('scroll', function () {
    const offset = window.pageYOffset;

    if (offset > 0){
        navigationBar.classList.add('scroll');
        backToTop.style.color = "white";
        backToTop.innerHTML = "Back To Top";

        backToTop.style.margin = retracted;
        aboutMe.style.margin = retracted;
        projects.style.margin = retracted;
        skills.style.margin = retracted;
        contact.style.margin = retracted;

    } else if (offset <= 0){
        navigationBar.classList.remove('scroll');
        backToTop.style.color = "#2d2d2d";
        setTimeout(() => {backToTop.innerHTML = "";}, 1000);
        

        backToTop.style.margin = extended;
        aboutMe.style.margin = extended;
        projects.style.margin = extended;
        skills.style.margin = extended;
        contact.style.margin = extended;
    }

    if (offset > 600 && offset < 3000 && backgroundLoopStarted === false){
        setTimeout(() => {changeBackground1();}, backgroundTimer);
    }
})