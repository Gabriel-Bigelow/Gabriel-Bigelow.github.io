const fortuneTellerButton = document.getElementById('fortune-teller-button-container');
const fortuneTellerButtonInfo = document.getElementById('fortune-teller-button-info');

const fortuneTellerPreview = document.getElementById('fortune-teller-preview');

const fortuneTellerInfo = document.getElementById('fortune-teller-info');



let fortuneTellerClicked = false;

const openFortuneTeller = () => {
    fortuneTellerButton.style.width="80%";
    fortuneTellerButton.style.transform="scale(1)";
    fortuneTellerButtonInfo.style.fontSize="30px";
    fortuneTellerInfo.style.display="block";
    setTimeout(function (){
        fortuneTellerInfo.style.opacity= "100%";
        fortuneTellerButton.scrollIntoView();
    }, 500);
    fortuneTellerClicked = true;
}

const closeFortuneTeller = () => {
    fortuneTellerButton.style.width="50%";
    fortuneTellerButton.style.transform="scale(1.2)";
    fortuneTellerButtonInfo.style.fontSize="16px";
    fortuneTellerInfo.style.opacity="0%";
    setTimeout(function (){
        fortuneTellerInfo.style.display= "none";
    }, 500);
    fortuneTellerClicked = false;
}




fortuneTellerButton.addEventListener('click', function(){
    if(fortuneTellerClicked === false){
        openFortuneTeller();
    }
    fortuneTellerClicked = true;
})



fortuneTellerButton.addEventListener('mouseover', function() {
    if (fortuneTellerClicked === false){
        fortuneTellerButton.style.transform="scale(1.2)"
        fortuneTellerButtonInfo.style.opacity="100%";
    }    
});

fortuneTellerButton.addEventListener('mouseout', function(){
    if(fortuneTellerClicked === false){
        fortuneTellerButton.style.transform="scale(1)"
        fortuneTellerButtonInfo.style.opacity="0%";
    }
})