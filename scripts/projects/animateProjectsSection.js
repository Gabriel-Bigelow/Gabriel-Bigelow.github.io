const projectsContainer = document.getElementById('projects');
const projectsExit = document.getElementById('projects-exit');
const projectsNav = document.getElementById('projects-nav');

projectsContainer.addEventListener('click', function (event){
    let showFourSquare = () => {
        fourSquareButton.style.display="block";
        setTimeout(() => {
            fourSquareButton.style.opacity = "100%";
        }, 500);
    }

    let hideFourSquare = () => {
        fourSquareButton.style.opacity="0%";
        setTimeout(() => {
            fourSquareButton.style.display="none";
        }, 500);
    }

    let showFortuneTeller = () => {
        fortuneTellerButton.style.display="block";
        setTimeout(function(){
            fortuneTellerButton.style.opacity="100%";
        }, 500);
    }

    let hideFortuneTeller = () => {
        fortuneTellerButton.style.opacity="0%";
        setTimeout(function(){
            fortuneTellerButton.style.display="none";
        }, 500);
    }

    let showQuoteAPI = () => {
        quoteAPIButton.style.display="block";
        setTimeout(() => {
            quoteAPIButton.style.opacity = "100%";
        }, 500);
    }

    let hideQuoteAPI = () => {
        quoteAPIButton.style.opacity="0%";
        setTimeout(function(){
            quoteAPIButton.style.display="none";
        }, 500);
    }






    document.addEventListener('click', function (event){
        let clickedFourSquare = fourSquareButton.contains(event.target);
        let clickedFortuneTeller = fortuneTellerButton.contains(event.target);
        let clickedQuoteAPI = quoteAPIButton.contains(event.target);

        const showProjectsExit = () => {
            projectsExit.style.display="block";
            setTimeout(function(){
                projectsExit.style.opacity = "100%";
            }, 1000);
        }
        const hideProjectsExit = () => {
            projectsExit.style.opacity = "0%";
            projectsNav.scrollIntoView();
            setTimeout(function (){
                projectsExit.style.display="none";
            }, 1000);
        }

        const showAllProjects = () => {
            if(!clickedFortuneTeller && !clickedFourSquare && !clickedQuoteAPI){
                showFourSquare();
                showFortuneTeller();
                showQuoteAPI();
                hideProjectsExit();
            } if (clickedFortuneTeller || clickedFourSquare || clickedQuoteAPI){
                showProjectsExit();
            }
        }


        const focusFourSquare = () => {
            if (clickedFourSquare){
                openFourSquare();
                hideFortuneTeller();
                hideQuoteAPI();
                fourSquareClicked = true;
            } else {
                closeFourSquare();
                fourSquareClicked = false;
                fourSquareButton.style.transform="scale(1)"
                fourSquareButtonInfo.style.opacity="0%";
                showAllProjects();
            }
        }

        const focusFortuneTeller = () => {
            if(clickedFortuneTeller){
                openFortuneTeller();
                hideFourSquare();
                hideQuoteAPI();
                fortuneTellerClicked = true;
            } else {
                closeFortuneTeller();
                fortuneTellerClicked = false;
                fortuneTellerButton.style.transform="scale(1)"
                fortuneTellerButtonInfo.style.opacity="0%";
                showAllProjects();
            }
        }

        const focusQuoteAPI = () => {
            if (clickedQuoteAPI){
                openQuoteAPI();
                hideFourSquare();
                hideFortuneTeller();
                quoteAPIClicked = true;
            } else {
                closeQuoteAPI();
                quoteAPIClicked = false;
                quoteAPIButton.style.transform="scale(1)";
                quoteAPIButtonInfo.style.opacity="0%";
                showAllProjects();
            }
        }

        focusFourSquare();
        focusFortuneTeller();
        focusQuoteAPI();
    })











    
})


