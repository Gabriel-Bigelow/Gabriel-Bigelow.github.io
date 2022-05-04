const fourSquareButton = document.getElementById('four-square-button-container');
const fourSquareButtonInfo = document.getElementById('four-square-button-info');

const fourSquarePreview = document.getElementById('four-square-preview');
const fourSquarePreviewVideo = document.getElementById('four-square-preview-video');

const fourSquareInfo = document.getElementById('four-square-info');
const fourSquareVideo = document.getElementById('four-square-video')


let fourSquareClicked = false;

const openFourSquare = () => {
    fourSquareButton.style.width="80%";
    fourSquareButton.style.transform="scale(1)";
    fourSquareButtonInfo.style.fontSize="30px";
    fourSquareInfo.style.display="block";
    fourSquareVideo.style.display="block";
    setTimeout(function (){
        fourSquareInfo.style.opacity= "100%";
        fourSquareVideo.style.opacity="100%";
        fourSquareButton.scrollIntoView();
    }, 500);

    fourSquarePreviewVideo.src="images/projects/four-square/demo2.mp4"
}

const closeFourSquare = () => {
    fourSquareButton.style.width="50%";
    fourSquareButton.style.transform="scale(1.2)";
    fourSquareButtonInfo.style.fontSize="16px";
    fourSquareInfo.style.opacity="0%";
    setTimeout(function (){
        fourSquareInfo.style.display= "none";
        fourSquareVideo.style.display= "none";
    }, 500);
    fourSquarePreviewVideo.src="images/projects/four-square/demo.mp4";
    fourSquarePreviewVideo.style.display="none";
    fourSquarePreview.style.display="block";
    fourSquareClicked=false;
}






fourSquareButton.addEventListener('mouseover', function () {
    if (fourSquareClicked === false){
        fourSquarePreview.style.display="none";
        fourSquarePreviewVideo.style.display="block";
        fourSquareButton.style.transform="scale(1.2)"
        fourSquareButtonInfo.style.opacity="100%";
    }    
})
fourSquareButton.addEventListener('mouseout', function () {
    if(fourSquareClicked === false){
        fourSquarePreviewVideo.style.display="none";
        fourSquarePreview.style.display="block";
        fourSquareButton.style.transform="scale(1)"
        fourSquareButtonInfo.style.opacity="0%";
    }
})