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
let sel;

let imagesStack = [] // set up array

function preload() {
  // you can put as many images you want in the array
  imagesStack[0] = loadImage('https://scontent-lht6-1.xx.fbcdn.net/v/t1.0-9/68881794_10157572465227164_5096209456706879488_o.jpg?_nc_cat=103&_nc_sid=2d5d41&_nc_ohc=14c7qbKWUgUAX9j3WNg&_nc_ht=scontent-lht6-1.xx&oh=994d2b9ee23aefca61c6270497eafa63&oe=5EEB8696');
  imagesStack[1] = loadImage('https://scontent-lhr8-1.xx.fbcdn.net/v/t1.0-9/69203664_2492891857610482_6748460457532588032_o.jpg?_nc_cat=110&_nc_sid=110474&_nc_ohc=QPvNpwPQKxIAX_xzIVn&_nc_ht=scontent-lhr8-1.xx&oh=eef76fc448b139e20390cceadfed28f8&oe=5EEBE830');
  imagesStack[2] = loadImage('https://scontent-lhr8-1.xx.fbcdn.net/v/t1.0-9/68736465_2107691639532691_5695011348983840768_o.jpg?_nc_cat=109&_nc_sid=8024bb&_nc_ohc=4y8MAffhOwkAX-HbccP&_nc_ht=scontent-lhr8-1.xx&oh=1cb31e3064e34eef70458bfeb7cefc75&oe=5EEC3E7A');
  imagesStack[3] = loadImage('https://scontent-lhr8-1.xx.fbcdn.net/v/t1.0-9/68687767_2510578599174711_2509315057637130240_o.jpg?_nc_cat=101&_nc_sid=110474&_nc_ohc=-zpMr0-I4_sAX9sLM_0&_nc_ht=scontent-lhr8-1.xx&oh=ac82d943bd1c6cf1c06a5d5f5fe1ff6a&oe=5EEE895A');
  imagesStack[4] = loadImage('https://scontent-lhr8-1.xx.fbcdn.net/v/t1.0-9/69138849_10156134430836286_6223749663099453440_o.jpg?_nc_cat=102&_nc_sid=110474&_nc_ohc=5NE8Idl4QGwAX_PIe11&_nc_ht=scontent-lhr8-1.xx&oh=e0e7bac5644028856a7c615efbe9c268&oe=5EEC2027');
  imagesStack[5] = loadImage('https://scontent-lht6-1.xx.fbcdn.net/v/t1.0-9/69339788_2419242788332366_1267828638737235968_n.jpg?_nc_cat=105&_nc_sid=8024bb&_nc_ohc=0O6pA7GEnJQAX_HfKum&_nc_ht=scontent-lht6-1.xx&oh=157608f089abebba7e7d1b92300d674e&oe=5EEF4270');
  imagesStack[6] = loadImage('https://scontent-lht6-1.xx.fbcdn.net/v/t1.0-9/69071850_2743884679028792_1314113830543949824_n.jpg?_nc_cat=105&_nc_sid=110474&_nc_ohc=Vf8lP-voLNYAX8L3xcv&_nc_ht=scontent-lht6-1.xx&oh=15d20f94188c62a336b34b702cbaff15&oe=5EEF1F78');
  imagesStack[7] = loadImage('https://scontent-lhr8-1.xx.fbcdn.net/v/t1.0-9/s960x960/68752597_10157603056028656_3566741048203935744_o.jpg?_nc_cat=101&_nc_sid=8024bb&_nc_ohc=qqZo4LMbSDIAX9Wsy2W&_nc_ht=scontent-lhr8-1.xx&_nc_tp=7&oh=b4c06e7ff0e3adb58c86ce10fb0fa5fe&oe=5EEDE280');
  imagesStack[8] = loadImage('https://scontent-lhr8-1.xx.fbcdn.net/v/t1.0-9/69745038_1099792167077212_4471287600560209920_o.jpg?_nc_cat=101&_nc_sid=110474&_nc_ohc=oqlLdoZTSA0AX_3fnzN&_nc_ht=scontent-lhr8-1.xx&oh=1c574fce87ec69562737636540da26fe&oe=5EEECD6D');
  imagesStack[9] = loadImage('https://scontent-lht6-1.xx.fbcdn.net/v/t1.0-9/68496478_514789772611165_1498210959372582912_n.jpg?_nc_cat=108&_nc_sid=110474&_nc_ohc=VZ-tMWsMhq4AX-Id89G&_nc_ht=scontent-lht6-1.xx&oh=6f09b4c4a16e504acf5b4e1c52cbc514&oe=5EEBB337');
}

function setup() {

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
  sel.selected(DIFFERENCE);
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

    if (currentImage.width > currentImage.height) {
      aspect = currentImage.width / currentImage.height;
      currentImage.resize(stacksize,0);
      imagex = canvasspace;
      imagey = canvasspace + ((stacksize - (stacksize / aspect)) / 2);
      blend(currentImage, 0, 0, stacksize, (stacksize / aspect), imagex, imagey, stacksize, (stacksize / aspect), sel.value());
	  } else {
      aspect = currentImage.width / currentImage.height;
	    currentImage.resize(0,stacksize);
      imagex = canvasspace + ((stacksize - (stacksize * aspect)) / 2);
      imagey = canvasspace;
      blend(currentImage, 0, 0, (stacksize * aspect), stacksize, imagex, imagey, (stacksize * aspect), stacksize, sel.value());
    }
  }
}

function mySelectEvent () {

  for(let i = 0; i < imagesStack.length; i++) {

    // load the image contained in the 'imagesStack' array at index 'i'
    // and put it in a temporary variable called 'currentImage'
    let currentImage = imagesStack[i];

    if (currentImage.width > currentImage.height) {
      aspect = currentImage.width / currentImage.height;
      currentImage.resize(stacksize,0);
      imagex = canvasspace;
      imagey = canvasspace + ((stacksize - (stacksize / aspect)) / 2);
      blend(currentImage, 0, 0, stacksize, (stacksize / aspect), imagex, imagey, stacksize, (stacksize / aspect), sel.value());
	  } else {
      aspect = currentImage.width / currentImage.height;
	    currentImage.resize(0,stacksize);
      imagex = canvasspace + ((stacksize - (stacksize * aspect)) / 2);
      imagey = canvasspace;
      blend(currentImage, 0, 0, (stacksize * aspect), stacksize, imagex, imagey, (stacksize * aspect), stacksize, sel.value());
    }
  }
}

function saveimg() {
  saveCanvas('myCanvas', 'jpg');
}
