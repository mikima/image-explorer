let table;
let stacksize = 500;
let clearness = 60;

function preload() {
  table = loadTable('https://raw.githubusercontent.com/jwyg/p5-experiments/master/image-grid/assets/images.csv?token=AAKCWY7MLIQVTP52RFYR6FS64MNVE', 'csv', 'header');

  print(table.getRowCount() + ' total rows in table');
  print(table.getColumnCount() + ' total columns in table');

  print(table.getRow(2))

  img0 = loadImage('table.getRow(1)');
  img1 = loadImage('table.getRow(1)');
  img2 = loadImage('table.getRow(1)');
}

function setup() {



  createCanvas(stacksize,stacksize);

  if (img0.width > img0.height) {
    tint(255, clearness)
    imageMode(CENTER);
    img0.resize(stacksize,0);
    image(img0, stacksize/2, stacksize/2, stacksize,0);
  } else {
    tint(255, clearness)
    imageMode(CENTER);
    img0.resize(0,stacksize);
    image(img0, stacksize/2, stacksize/2, 0, stacksize);
  }


  if (img1.width > img1.height) {
    tint(255, clearness)
    imageMode(CENTER);
    img1.resize(stacksize,0);
    image(img1, stacksize/2, stacksize/2, stacksize, 0);
  } else {
    tint(255, 100)
    imageMode(CENTER);
    img1.resize(0,stacksize);
    image(img1, stacksize/2, stacksize/2, 0, stacksize);
  }


  if (img2.width > img2.height) {
    tint(255, clearness)
    imageMode(CENTER);
    img2.resize(stacksize,0);
    image(img2, stacksize/2, stacksize/2, stacksize, 0);
  } else {
    tint(255, clearness)
    imageMode(CENTER);
    img2.resize(0,stacksize);
    image(img2, stacksize/2, stacksize/2, 0, stacksize);
  }

}
