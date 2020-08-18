
var parentElement = document.getElementById('product1');
var parentElementTwo = document.getElementById('product2');
var parentElementThree = document.getElementById('product3');

var productArray = [];

function Product(filepath, alt, title) {
  this.filepath = filepath;
  this.alt = alt;
  this.title = title;
  this.clicks = 0;

  productArray.push(this);
}

new Product('img/bag.jpg', 'picture of a bag', 'picture of a bag');
new Product('img/banana.jpg', 'banana', 'banana');
new Product('img/bathroom.jpg', 'bathroom', 'bathroom');
new Product('img/boots.jpg', 'boots', 'boots');
new Product('img/breakfast.jpg', 'breakfast', 'breakfast');
new Product('img/bubblegum.jpg', 'bubblegum', 'bubblegum');
new Product('img/chair.jpg', 'chair', 'chair');
new Product('img/cthulhu.jpg', 'cthulhu', 'cthulhu');
new Product('img/dog-duck.jpg', 'dog-duck', 'dog-duck');
new Product('img/dragon.jpg', 'dragon', 'dragon');
new Product('img/pen.jpg', 'pen', 'pen');
new Product('img/pet-sweep.jpg', 'pet-sweep', 'pet-sweep');
new Product('img/scissors.jpg', 'scissors', 'scissors');
new Product('img/shark.jpg', 'shark', 'shark');
new Product('img/sweep.png', 'sweep', 'sweep');
new Product('img/tauntaun.jpg', 'tauntaun', 'tauntaun');
new Product('img/unicorn.jpg', 'unicorn', 'unicorn');
new Product('img/usb.gif', 'usb', 'usb');
new Product('img/water-can.jpg', 'water-can', 'water-can');
new Product('img/wine-glass.jpg', 'wine-glass', 'wine-glass');


function getRandomImage() {
  var randomIndex = getRandomNumber(productArray.length);
  var chosenImage = productArray[randomIndex];
  var imageElement = document.createElement('img');
  imageElement.setAttribute('src', chosenImage.filepath);
  imageElement.setAttribute('alt', chosenImage.alt);
  imageElement.setAttribute('title', chosenImage.title);
  parentElement.appendChild(imageElement);
}

function getRandomImage2() {
  var randomIndex = getRandomNumber(productArray.length);
  var chosenImage = productArray[randomIndex];
  var imageElement = document.createElement('img');
  imageElement.setAttribute('src', chosenImage.filepath);
  imageElement.setAttribute('alt', chosenImage.alt);
  imageElement.setAttribute('title', chosenImage.title);
  parentElementTwo.appendChild(imageElement);
}

function getRandomImage3() {
  var randomIndex = getRandomNumber(productArray.length);
  var chosenImage = productArray[randomIndex];
  var imageElement = document.createElement('img');
  imageElement.setAttribute('src', chosenImage.filepath);
  imageElement.setAttribute('alt', chosenImage.alt);
  imageElement.setAttribute('title', chosenImage.title);
  parentElementThree.appendChild(imageElement);
}

function getRandomNumber(max) {
  return Math.floor(Math.random() * Math.floor(max));
}


function handleClick() {
  console.log('an image was clicked');
  for (var i = 0; i < productArray.length; i++) {
    if (event.target.alt === productArray[i].alt) {
      productArray[i].click++;
    }
  }

  parentElement.innerHTML = '';
  parentElementTwo.innerHTML = '';
  parentElementThree.innerHTML = '';
  getRandomImage();
  getRandomImage2();
  getRandomImage3();
}

parentElement.addEventListener('click', handleClick)
parentElementTwo.addEventListener('click', handleClick)
parentElementThree.addEventListener('click', handleClick)
getRandomImage();
getRandomImage2();
getRandomImage3();