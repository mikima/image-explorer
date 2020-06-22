let stacksize = 1000; // define the size of the image stack
let canvasspace = 100; // define the space around the image stack
let canvasspacey = 160; // additional spacing for image URL input box
let canvassize = stacksize + (canvasspace * 2);
let clearness = 100; // set transparency levels
let savebutton, textarea, loadbutton, urls; // create save button, load button, text box and urls
let savebuttonx = 520;
let savebuttony = (canvasspace / 2) + 160;

let loadedImages = []

function setup() {
	//Display the textarea and assign a class
	textarea = createElement("textarea");
	textarea.position(canvasspace, (canvasspace / 2));
	textarea.class("image-inputs");
	textarea.size(400, 100);

	// display button to load images and bind its event handler
	loadbutton = createButton('Load Images');
	loadbutton.position(canvasspace, savebuttony - 40);

	//when the button is pressed
	loadbutton.mousePressed(function() {
		// load the text in the textArea,
		// transform it in array by splitting the string
		// on carriage returns.
		let urls = textarea.value().split("\n")

		// create an array of promises:
		// images requires time to be loaded,
		// we want that our code stops and runs
		// only when all the mages are loaded.
		let promises = []
		// for each url, create a promise
		urls.forEach(function(url) {
			let promise = new Promise(function(resolve, reject) {
				// try to load the image. when the image is loaded,
				// return the image and pass to the next promise
				loadImage(url, function(img) {
						resolve(img)
					},
					function() {
						reject(Error("problem with", url))
					})
			})
			// add the promise to the promises array
			promises.push(promise);
		})
		// resolve all the promises
		Promise.all(promises)
			.then(function(results) {
				// when all the images has been loaded,
				// initilise the interface
				// and render the results

				loadedImages = results;

				initialise();

				render(loadedImages);
			})
		// now draw them
	})
}

function initialise() {

	// create and position slider
	slider = createSlider(0, 255, 100);
	slider.position(canvasspace, canvasspace / 2 + canvasspacey);
	slider.style('width', '400px');
	slider.mouseReleased(function() {
		render(loadedImages)
	})

	// display button to save images
	savebutton = createButton('Save image');
	savebutton.position(savebuttonx, savebuttony);
	savebutton.mousePressed(saveimg);

	createCanvas(canvassize, canvassize);
}

// the render function
// requires as input an array of images
// we will call this array "imagesStack".
// the array is passed by the promises
function render(imagesStack) {

	clear();

	clearness = slider.value();

	// istead of rewriting the operation for each image,
	// we can use a for loop.
	// for each image in the 'imagesStack' array, we perform the same operations

	for (let i = 0; i < imagesStack.length; i++) {

		// load the image contained in the 'imagesStack' array at index 'i'
		// and put it in a temporary variable called 'currentImage'
		let currentImage = imagesStack[i];



		if (currentImage.width > currentImage.height) {
			tint(255, clearness)
			imageMode(CENTER);
			currentImage.resize(stacksize, 0);
			image(currentImage, width / 2, height / 2, stacksize, 0);
		} else {
			tint(255, clearness)
			imageMode(CENTER);
			currentImage.resize(0, stacksize);
			image(currentImage, width / 2, height / 2, 0, stacksize);
		}
	}
}


function saveimg() {
	saveCanvas('myCanvas', 'jpg');
}
