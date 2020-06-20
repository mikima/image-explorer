let stacksize = 1000; // define the size of the image stack
let canvasspace = 100; // define the space around the image stack
let canvasspacey = 160;
let canvassize = stacksize + (canvasspace * 2);
let clearness = 100; // set transparency levels
let savebutton, textarea, loadbutton, urls;  // create save button, load button, text box and urls
let savebuttonx = 520;
let savebuttony = (canvasspace/2)+160;

let imagesStack = [] // set up array

function preload() {
  urls = localStorage.getItem("urls"); //load previously saved data from localstorage
  if(urls){ //skips if no data before
	  urls = urls.split("\n"); //every line contains a new url
	  for(let i=0; i<urls.length; i++){
		if(urls[i].trim()!=""){
		  imagesStack[i] = loadImage(urls[i],null,(e)=>{
			  alert("One or more urls failed to load. Please try again or double check the urls.");
			  localStorage.removeItem("urls");
			  location.reload();
		  }); //load images from localstorage lines
		}
	  }
  }
}

function setup() {

  // create and position slider
  slider = createSlider(0, 255, 100);
  slider.position(canvasspace, canvasspace/2);
  slider.style('width', '400px');

  //

  //Display the textarea and assign a class
  textarea = createElement("textarea");
  textarea.position(canvasspace, (canvasspace / 2));
  textarea.class("image-inputs");
  textarea.size(400,100);
  if(urls){ //if urls exist in localstorage just put it in the textarea and clear the localstorage
    textarea.value(urls.join("\n"));
    localStorage.removeItem("urls");
  }

  // display button to load images and bind its event handler
  loadbutton = createButton('Load Images');
  loadbutton.position(canvasspace, savebuttony-40);
  loadbutton.mousePressed(loadimgs);

  // display button to save images
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

	  if (currentImage.width > currentImage.height) {
	    tint(255, clearness)
	    imageMode(CENTER);
	    currentImage.resize(stacksize,0);
	    image(currentImage, width/2, height/2, stacksize,0);
	  } else {
	    tint(255, clearness)
	    imageMode(CENTER);
	    currentImage.resize(0,stacksize);
	    image(currentImage, width/2, height/2, 0, stacksize);
	  }
  }
}

// when mouse is released then update image based on slider value
function mouseReleased () {

  // image transparency is set to slider value
  clearness = slider.value();

  // reload the images based on new transparency value (same code as above)

  for(let i = 0; i < imagesStack.length; i++) {

	  // load the image contained in the 'imagesStack' array at index 'i'
	  // and put it in a temporary variable called 'currentImage'
	  let currentImage = imagesStack[i];

	  if (currentImage.width > currentImage.height) {
	    tint(255, clearness)
	    imageMode(CENTER);
	    currentImage.resize(stacksize,0);
	    image(currentImage, width/2, height/2, stacksize,0);
	  } else {
	    tint(255, clearness)
	    imageMode(CENTER);
	    currentImage.resize(0,stacksize);
	    image(currentImage, width/2, height/2, 0, stacksize);
	  }
  }
}

function loadimgs(){
  // save the data in localstorage and reload the page, so that next time on pageload the images will be read from localstorage and initiated in p5
  localStorage.setItem("urls",textarea.value());
  location.reload();
}

function saveimg() {
  saveCanvas('myCanvas', 'jpg');
}
