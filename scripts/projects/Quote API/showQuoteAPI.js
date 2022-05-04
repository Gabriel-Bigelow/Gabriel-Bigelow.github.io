const quoteAPIButton = document.getElementById('quote-api-button-container');
const quoteAPIButtonInfo = document.getElementById('quote-api-button-info');

const quoteAPIInfo = document.getElementById('quote-api-info');
const quoteAPIVideo = document.getElementById('quote-api-video');

let quoteAPIClicked = false;

const openQuoteAPI = () => {
    quoteAPIButton.style.width="80%";
    quoteAPIButton.style.transform="scale(1)";
    quoteAPIButtonInfo.style.fontSize="30px";
    quoteAPIInfo.style.display="block";
    quoteAPIVideo.style.display="block";
    setTimeout(function (){
        quoteAPIInfo.style.opacity= "100%";
        quoteAPIVideo.style.opacity="100%";
        quoteAPIButton.scrollIntoView();
    }, 500);
    quoteAPIClicked = true;
}

const closeQuoteAPI = () => {
    quoteAPIButton.style.width="50%";
    quoteAPIButton.style.transform="scale(1.2)";
    quoteAPIButtonInfo.style.fontSize="16px";
    quoteAPIInfo.style.opacity="0%";
    quoteAPIVideo.style.opacity="0%";
    setTimeout(function (){
        quoteAPIInfo.style.display= "none";
        quoteAPIVideo.style.display="none";
    }, 500);
    quoteAPIClicked = false;
}




quoteAPIButton.addEventListener('click', function(){
    if(quoteAPIClicked === false){
        openQuoteAPI();
    }
    quoteAPIClicked = true;
})



quoteAPIButton.addEventListener('mouseover', function() {
    if (quoteAPIClicked === false){
        quoteAPIButton.style.transform="scale(1.2)"
        quoteAPIButtonInfo.style.opacity="100%";
    }    
});

quoteAPIButton.addEventListener('mouseout', function(){
    if(quoteAPIClicked === false){
        quoteAPIButton.style.transform="scale(1)"
        quoteAPIButtonInfo.style.opacity="0%";
    }
})