let stacksize = 1000; // define the size of the image stack
let clearness = 40;

function preload() {
  img0 = loadImage('https://scontent-lht6-1.xx.fbcdn.net/v/t1.0-9/68881794_10157572465227164_5096209456706879488_o.jpg?_nc_cat=103&_nc_sid=2d5d41&_nc_ohc=14c7qbKWUgUAX9j3WNg&_nc_ht=scontent-lht6-1.xx&oh=994d2b9ee23aefca61c6270497eafa63&oe=5EEB8696');
  img1 = loadImage('https://scontent-lhr8-1.xx.fbcdn.net/v/t1.0-9/69203664_2492891857610482_6748460457532588032_o.jpg?_nc_cat=110&_nc_sid=110474&_nc_ohc=QPvNpwPQKxIAX_xzIVn&_nc_ht=scontent-lhr8-1.xx&oh=eef76fc448b139e20390cceadfed28f8&oe=5EEBE830');
  img2 = loadImage('https://scontent-lhr8-1.xx.fbcdn.net/v/t1.0-9/68736465_2107691639532691_5695011348983840768_o.jpg?_nc_cat=109&_nc_sid=8024bb&_nc_ohc=4y8MAffhOwkAX-HbccP&_nc_ht=scontent-lhr8-1.xx&oh=1cb31e3064e34eef70458bfeb7cefc75&oe=5EEC3E7A');
  img3 = loadImage('https://scontent-lhr8-1.xx.fbcdn.net/v/t1.0-9/68687767_2510578599174711_2509315057637130240_o.jpg?_nc_cat=101&_nc_sid=110474&_nc_ohc=-zpMr0-I4_sAX9sLM_0&_nc_ht=scontent-lhr8-1.xx&oh=ac82d943bd1c6cf1c06a5d5f5fe1ff6a&oe=5EEE895A');
  img4 = loadImage('https://scontent-lhr8-1.xx.fbcdn.net/v/t1.0-9/69138849_10156134430836286_6223749663099453440_o.jpg?_nc_cat=102&_nc_sid=110474&_nc_ohc=5NE8Idl4QGwAX_PIe11&_nc_ht=scontent-lhr8-1.xx&oh=e0e7bac5644028856a7c615efbe9c268&oe=5EEC2027');
  img5 = loadImage('https://scontent-lht6-1.xx.fbcdn.net/v/t1.0-9/69339788_2419242788332366_1267828638737235968_n.jpg?_nc_cat=105&_nc_sid=8024bb&_nc_ohc=0O6pA7GEnJQAX_HfKum&_nc_ht=scontent-lht6-1.xx&oh=157608f089abebba7e7d1b92300d674e&oe=5EEF4270');
  img6 = loadImage('https://scontent-lht6-1.xx.fbcdn.net/v/t1.0-9/69071850_2743884679028792_1314113830543949824_n.jpg?_nc_cat=105&_nc_sid=110474&_nc_ohc=Vf8lP-voLNYAX8L3xcv&_nc_ht=scontent-lht6-1.xx&oh=15d20f94188c62a336b34b702cbaff15&oe=5EEF1F78');
  img7 = loadImage('https://scontent-lhr8-1.xx.fbcdn.net/v/t1.0-9/s960x960/68752597_10157603056028656_3566741048203935744_o.jpg?_nc_cat=101&_nc_sid=8024bb&_nc_ohc=qqZo4LMbSDIAX9Wsy2W&_nc_ht=scontent-lhr8-1.xx&_nc_tp=7&oh=b4c06e7ff0e3adb58c86ce10fb0fa5fe&oe=5EEDE280');
  img8 = loadImage('https://scontent-lhr8-1.xx.fbcdn.net/v/t1.0-9/69745038_1099792167077212_4471287600560209920_o.jpg?_nc_cat=101&_nc_sid=110474&_nc_ohc=oqlLdoZTSA0AX_3fnzN&_nc_ht=scontent-lhr8-1.xx&oh=1c574fce87ec69562737636540da26fe&oe=5EEECD6D');
  img9 = loadImage('https://scontent-lht6-1.xx.fbcdn.net/v/t1.0-9/68496478_514789772611165_1498210959372582912_n.jpg?_nc_cat=108&_nc_sid=110474&_nc_ohc=VZ-tMWsMhq4AX-Id89G&_nc_ht=scontent-lht6-1.xx&oh=6f09b4c4a16e504acf5b4e1c52cbc514&oe=5EEBB337');
}

function setup() {

  createCanvas(stacksize,stacksize);

  if (img9.width > img2.height) {
    tint(255, clearness)
    imageMode(CENTER);
    img9.resize(stacksize,0);
    image(img9, stacksize/2, stacksize/2, stacksize, 0);
  } else {
    tint(255, clearness)
    imageMode(CENTER);
    img9.resize(0,stacksize);
    image(img9, stacksize/2, stacksize/2, 0, stacksize);
  }


  if (img8.width > img2.height) {
    tint(255, clearness)
    imageMode(CENTER);
    img8.resize(stacksize,0);
    image(img8, stacksize/2, stacksize/2, stacksize, 0);
  } else {
    tint(255, clearness)
    imageMode(CENTER);
    img8.resize(0,stacksize);
    image(img8, stacksize/2, stacksize/2, 0, stacksize);
  }

  if (img7.width > img2.height) {
    tint(255, clearness)
    imageMode(CENTER);
    img7.resize(stacksize,0);
    image(img7, stacksize/2, stacksize/2, stacksize, 0);
  } else {
    tint(255, clearness)
    imageMode(CENTER);
    img7.resize(0,stacksize);
    image(img7, stacksize/2, stacksize/2, 0, stacksize);
  }

  if (img6.width > img2.height) {
    tint(255, clearness)
    imageMode(CENTER);
    img6.resize(stacksize,0);
    image(img6, stacksize/2, stacksize/2, stacksize, 0);
  } else {
    tint(255, clearness)
    imageMode(CENTER);
    img6.resize(0,stacksize);
    image(img6, stacksize/2, stacksize/2, 0, stacksize);
  }

  if (img5.width > img2.height) {
    tint(255, clearness)
    imageMode(CENTER);
    img5.resize(stacksize,0);
    image(img5, stacksize/2, stacksize/2, stacksize, 0);
  } else {
    tint(255, clearness)
    imageMode(CENTER);
    img5.resize(0,stacksize);
    image(img5, stacksize/2, stacksize/2, 0, stacksize);
  }

  if (img4.width > img2.height) {
    tint(255, clearness)
    imageMode(CENTER);
    img4.resize(stacksize,0);
    image(img4, stacksize/2, stacksize/2, stacksize, 0);
  } else {
    tint(255, clearness)
    imageMode(CENTER);
    img4.resize(0,stacksize);
    image(img4, stacksize/2, stacksize/2, 0, stacksize);
  }

  if (img3.width > img2.height) {
    tint(255, clearness)
    imageMode(CENTER);
    img3.resize(stacksize,0);
    image(img3, stacksize/2, stacksize/2, stacksize, 0);
  } else {
    tint(255, clearness)
    imageMode(CENTER);
    img3.resize(0,stacksize);
    image(img3, stacksize/2, stacksize/2, 0, stacksize);
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

  if (img1.width > img1.height) {
    tint(255, clearness)
    imageMode(CENTER);
    img1.resize(stacksize,0);
    image(img1, stacksize/2, stacksize/2, stacksize, 0);
  } else {
    tint(255, clearness)
    imageMode(CENTER);
    img1.resize(0,stacksize);
    image(img1, stacksize/2, stacksize/2, 0, stacksize);
  }

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

}
