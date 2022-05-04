const navBar = document.getElementById('navigation-bar');
const landingText = document.getElementById('landing-container-text');

const waitForAnimate = () => {
    if (window.pageYOffset <= 0){
        setTimeout(()=>{
            navBar.style.top ="0%";
            landingText.style.left ="0vw";
        }, 300)
        setTimeout(() => {
            navBar.style.width = "100vw";
        }, 1000);
    } else {
        navBar.style.width = "100vw";
        navBar.style.top ="0%";
        landingText.style.left ="0vw";
    }
}
waitForAnimate();
