let js = document.getElementById('js');
let html = document.getElementById('html');
let css = document.getElementById('css');
let git = document.getElementById('git');
let gitHub = document.getElementById('gitHub');
let nodeJS= document.getElementById('nodeJS');
let npm = document.getElementById('npm');
let accessibility = document.getElementById('accessibility');
let commandLine = document.getElementById('command-line');
let postman = document.getElementById('postman');





let skillBar = document.getElementById('skills');

skillBar.addEventListener('mouseover', (target) => {
    let topText = document.getElementById('skill-description-top');
    if (event.target === js){
        topText.innerHTML='Javascript';
    }
    if (event.target === html){
        topText.innerHTML='HTML';
    }
    if (event.target === css){
        topText.innerHTML='CSS';
    }
    if (event.target === git){
        topText.innerHTML='Git';
    }
    if (event.target === commandLine){
        topText.innerHTML='Command Line';
    }
    let botText = document.getElementById('skill-description-bottom');
    if (event.target === gitHub){
        botText.innerHTML='Git Hub';
    }
    if (event.target === nodeJS){
        botText.innerHTML='node.js';
    }
    if (event.target === npm){
        botText.innerHTML='Node Package Manager';
    }
    if (event.target === postman){
        botText.innerHTML='Postman';
    }
    if (event.target === accessibility){
        botText.innerHTML='Accessibility';
    }
    let topBlank = document.getElementById('skill-bar1');
    let botBlank = document.getElementById('skill-bar2');
    let blank = document.getElementById('skills-container');
    if(event.target === topBlank || event.target === botBlank || event.target === skillBar){
        topText.innerHTML="";
        botText.innerHTML="";
    }

});