let stacksize = 1000; // define the size of the image stack
let canvasspace = 100; // define the space around the image stack
let canvassize = stacksize + (canvasspace * 2);
let clearness = 100; // set transparency levels
let savebutton;
let savebuttonx = 220;
let savebuttony = (canvasspace/2);
let imagecount = 0;
let imagex;
let imagey;
let imagesegment;
let sel;

let imagesStack = [] // set up array

function preload() {
  // you can put as many images you want in the array
  imagesStack[0] = loadImage('https://pbs.twimg.com/media/ECpd2aLU8AEq5v5.jpg');
  imagesStack[1] = loadImage('https://pbs.twimg.com/ext_tw_video_thumb/1166750163517550592/pu/img/7wexKT4MWmBexVgc.jpg');
  imagesStack[2] = loadImage('https://pbs.twimg.com/ext_tw_video_thumb/1165573527799566336/pu/img/XyWQQcwKkNyNSOLd.jpg');
  imagesStack[3] = loadImage('https://pbs.twimg.com/media/ECqt8TdVAAECAjG.jpg');
  imagesStack[4] = loadImage('https://pbs.twimg.com/tweet_video_thumb/ECrwf-yU0AABxDL.jpg');
  imagesStack[5] = loadImage('https://pbs.twimg.com/media/EC0DTueVAAEDV8u.jpg');
  imagesStack[6] = loadImage('https://pbs.twimg.com/media/EC0DUyhU0AY8LEh.jpg');
  imagesStack[7] = loadImage('https://pbs.twimg.com/media/EC0DUUNU0AI-gyP.jpg');
  imagesStack[8] = loadImage('https://pbs.twimg.com/ext_tw_video_thumb/1163916283307540480/pu/img/r1gelCcI--jn2Fls.jpg');
  imagesStack[9] = loadImage('https://pbs.twimg.com/ext_tw_video_thumb/1165037625897553920/pu/img/pwQGsiiHfbTLZhvJ.jpg');
}

function setup() {

  //count number of images
  imagenumber = imagesStack.length;
  imagesegment = stacksize/imagenumber;
  print(imagesegment);

  sel = createSelect();
  sel.option(BLEND);
  sel.option(DARKEST);
  sel.option(LIGHTEST);
  sel.option(DIFFERENCE);
  sel.option(MULTIPLY);
  sel.option(EXCLUSION);
  sel.option(SCREEN);
  sel.option(REPLACE);
  sel.option(OVERLAY);
  sel.option(HARD_LIGHT);
  sel.option(SOFT_LIGHT);
  sel.option(DODGE);
  sel.option(BURN);
  sel.option(ADD);
  sel.option(NORMAL);
  sel.selected(NORMAL);
  sel.changed(mySelectEvent);
  sel.position(canvasspace, (canvasspace / 2));

  savebutton = createButton('Save image');
  savebutton.position(savebuttonx, savebuttony);
  savebutton.mousePressed(saveimg);

  // reverse the images in the array (so that first images are loaded last.
  // This may be useful, e.g., where the most prominent images should be most visible in the stack.
  imagesStack = imagesStack.reverse();

  createCanvas(canvassize,canvassize);
  background('#FFFFFF');

  // istead of rewriting the operation for each image,
  // we can use a for loop.
  // for each image in the 'imagesStack' array, we perform the same operations

  for(let i = 0; i < imagesStack.length; i++) {

	  // load the image contained in the 'imagesStack' array at index 'i'
	  // and put it in a temporary variable called 'currentImage'
	  let currentImage = imagesStack[i];
    imagecount = i;

	  if (currentImage.width > currentImage.height) {
	    currentImage.resize(0,stacksize);
      imagex = canvasspace + ((imagecount - 1) * imagesegment);
      imagey = canvasspace;
      imagew = imagesegment;
      imageh = stacksize;
      blend(currentImage, imagex, 0, imagew, imageh, (imagex + canvasspace), imagey, imagew, imageh, sel.value());
	  } else {
	    currentImage.resize(0,stacksize);
      imagex = canvasspace + ((imagecount - 1) * imagesegment);
      imagey = canvasspace;
      imagew = imagesegment;
      imageh = stacksize;
      blend(currentImage, imagex, 0, imagew, imageh, (imagex + canvasspace), imagey, imagew, imageh, sel.value());
	  }
  }
}


function mySelectEvent () {

  for(let i = 0; i < imagesStack.length; i++) {

	  // load the image contained in the 'imagesStack' array at index 'i'
	  // and put it in a temporary variable called 'currentImage'
	  let currentImage = imagesStack[i];
    imagecount = i;

	  if (currentImage.width > currentImage.height) {
	    currentImage.resize(0,stacksize);
      imagex = canvasspace + ((imagecount - 1)* imagesegment);
      imagey = canvasspace;
      imagew = imagesegment;
      imageh = stacksize;
      blend(currentImage, imagex, 0, imagew, imageh, (imagex + canvasspace), imagey, imagew, imageh, sel.value());
	  } else {
	    currentImage.resize(0,stacksize);
      imagex = canvasspace + ((imagecount - 1) * imagesegment);
      imagey = canvasspace;
      imagew = imagesegment;
      imageh = stacksize;
      blend(currentImage, imagex, 0, imagew, imageh, (imagex + canvasspace), imagey, imagew, imageh, sel.value());
	  }
  }
}

function saveimg() {
  saveCanvas('myCanvas', 'jpg');
}
