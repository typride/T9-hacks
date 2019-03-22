#Each user is considered to be a person 
class Person{
    constructor(EI, SN, TF, JP){
        this.EI=EI;
        this.SN=SN;
        this.TF=TF;
        this.JP=JP;
    }
}


/*var imgArray = new Array();

imgArray[0] = new Image();
imgArray[0].src = 'images/layer-1/9.jpg';
*/
/*for (var i = 0; i < 34; i++) {
        var imageSrc= 'images/layer-1/' + i+1 + '.jpg';
        imgArray[i] = new Image();
        imageArry[i].src = imageSrc;
}*/
*handleClick awaits for button click on submit page for questionnaire*
function handleClick() {
    console.log("Button clicked!");

    const sumEI = sumPersonality("question1");
    const letterIE = personalityLetter(sumEI, 'I','E');

    const sumSN = sumPersonality("question2");
    const letterNS = personalityLetter(sumSN, 'S','N');

    const sumTF = sumPersonality("question3");
    const letterTF = personalityLetter(sumTF, 'T', 'F');

    const sumJP = sumPersonality("question4");
    const letterJP = personalityLetter(sumJP, 'J','P');

    
    const user = new Person(sumEI, sumSN, sumTF, sumJP);

    window.localStorage.setItem('letEI',letterIE);
    window.localStorage.setItem('letSN',letterNS);
    window.localStorage.setItem('letTF',letterTF);
    window.localStorage.setItem('letJP',letterJP);


}

//function to return sum of all the 
function sumPersonality(questionNum){
    var sum=0;

    var questionVal = $("input:radio[name='" + questionNum  + "']:checked").val();
    questionVal = Number(questionVal);

    console.log(questionVal);
        
    if(questionVal){
        sum = sum + Number(questionVal);
    }
    // else{
    //     console.log("NaN");
    // }

    return sum
    
}

function personalityLetter(sum, letterAgree, letterDisagree){
    if(sum<=0){
        console.log(" personalityLetter"+ letterDisagree);
        return letterDisagree;
    }else{
        console.log(" personalityLetter"+ letterAgree);
        return letterAgree;
    }
}

function replaceImage(elementID,source){
    //document.getElementsByClassName(elementID).src = source;
    $(`#${elementID}`).attr("src", source);
}

function replaceBackgroundImage(elementID,source){
    console.log("I SHOULD BE REPLACING BACKGROUND")
    console.log(source);
    
    $(`#${elementID}`).css('background-image',`url('${source}')`);
}

const pictureGetter=(whichImage,filename) =>{
    return `images/${whichImage}/${filename}.jpg`;
}



/*
var bottomImage, topImage;

bottomImage.onload = function() {
  topImage.onload = function(){
    // finish loading two images here, call the function to process the data
    drawImagesOnCanvas(bottomImage, topImage);
  };
  topImage.src = 'images/layer-1/INFJ.jpg';
};
bottomImage.src = 'images/layer-2/INFJ.jpg';

function applyBlending(bottomImageData, topImageData) {
  // create the canvas
  var canvas = document.createElement('canvas');
  canvas.width = 400;
  canvas.height = 600;
  var ctx = canvas.getContext('2d');


}*/
/*
function drawImagesOnCanvas(bottomImage, topImage){
  // create canvases
  var bottomCanvas = document.createElement('canvas');
  var topCanvas = document.createElement('canvas');

  // set the size for them, for example 500x500 pixels
  bottomCanvas.width = 400;
  bottomCanvas.height = 600;
  topCanvas.width = 400;
  topCanvas.height = 600;


  // get the 2d context to draw
  var bottomCtx = bottomCanvas.getContext('2d');
  var topCtx = topCanvas.getContext('2d');

  // draw the image to top and bottom canvas, from the position x, y (0, 0) and
  // with the size 500, 500 pixels
  bottomCtx.drawImage(bottomImage, 0, 0, 400, 600);
  topCtx.drawImage(topImage, 0, 0, 400, 600);

  // get the pixel data of the 2 canvas, from the position x, y (0, 0) and
  // with the size 500, 500 pixels
  var bottomImageData = bottomCtx.getImageData(0, 0, 400, 600);
  var topImageData = topCtx.getImageData(0, 0, 400, 600);

  // apply blending, will be discussed in the next section
  applyBlending(bottomImageData, topImageData);


}

function exportImage(canvas) {
  // append it to the document's body to see
  document.body.appendChild(canvas);
}

function applyBlending(bottomImageData, topImageData) {
  // create the canvas
  var canvas = document.createElement('canvas');
  canvas.width = 400;
  canvas.height = 600;
  var ctx = canvas.getContext('2d');

  // get the pixel data as array
  var bottomData = bottomImageData.data;
  var topData = topImageData.data;

  // loop each pixel data, calculate the new pixel value and assign it directly
  // to the topData (to save memory)
  // if you want to keep the original data, don't do this. instead create a new
  // image data object
  for(var i = 0; i < topData.length; i += 4) {
    topData[i] = topData[i] * bottomData[i] / 255;
    topData[i+1] = topData[i+1] * bottomData[i+1] / 255;
    topData[i+2] = topData[i+2] * bottomData[i+2] / 255;
  }
  // draw it on the canvas with the size 500, 500
  ctx.putImageData(topImageData, 400, 600);

  // export image, discussed in the next part
  exportImage(canvas);
}
*/
/*function baz (whichImage) {
    return `${a}${b}${c}${d}_${whichImage}`
}

//const INFJ = 'INFJ';

const INFJ= whichImage => {
    return `images/${whichImage}/${INFJ}.jpg`
}
const INFP = whichImage => {
    return = `images/${whichImage}/${INFP}.jpg`
}
const INTJ = whichImage => {
    return = `images/${whichImage}/${INTJ}.jpg`
}

INFJ('layer-1');*/

/*

imgArray[1] = new Image();
imgArray[1].src = 'images/layer-1/11.jpg';

imgArray[2] = new Image();
imgArray[2].src = 'images/layer-1/20.jpg';

imgArray[3] = new Image();
imgArray[3].src = 'images/layer-1/19.jpg';

imgArray[4] = new Image();
imgArray[4].src = 'images/layer-1/21.jpg';

imgArray[5] = new Image();
imgArray[5].src = 'images/layer-1/6.jpg';

imgArray[6] = new Image();
imgArray[6].src = 'images/layer-1/7.jpg';

imgArray[7] = new Image();
imgArray[7].src = 'images/layer-1/8.jpg';

imgArray[8] = new Image();
imgArray[8].src = 'images/layer-1/9.jpg';

imgArray[9] = new Image();
imgArray[9].src = 'images/layer-1/10.jpg';

imgArray[10] = new Image();
imgArray[10].src = 'images/layer-1/11.jpg';

imgArray[11] = new Image();
imgArray[11].src = 'images/layer-1/12.jpg';

imgArray[12] = new Image();
imgArray[12].src = 'images/layer-1/13.jpg';

imgArray[13] = new Image();
imgArray[13].src = 'images/layer-1/14.jpg';

imgArray[14] = new Image();
imgArray[14].src = 'images/layer-1/15.jpg';

imgArray[15] = new Image();
imgArray[15].src = 'images/layer-1/16.jpg';*/
/*------------------------------------*/

/*function nextImage(element)
{
    var img = document.getElementById(element);

    for(var i = 0; i < imgArray.length;i++)
    {
        if(imgArray[i].src == img.src) // << check this
        {
            if(i === imgArray.length){
                document.getElementById(element).src = imgArray[0].src;
                break;
            }
            document.getElementById(element).src = imgArray[i+1].src;
            break;
        }
    }
}*/
