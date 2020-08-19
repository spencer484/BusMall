var wrapper1 = document.getElementById('product1');
var wrapper2 = document.getElementById('product2');
var wrapper3 = document.getElementById('product3');
wrapper1.addEventListener('click', handleClick)
wrapper2.addEventListener('click', handleClick)
wrapper3.addEventListener('click', handleClick)

var finalList = document.getElementById('ul')
var productArray = [];
var totalClicks = 0;

function Product(filepath, alt, title) {
  this.filepath = filepath;
  this.alt = alt;
  this.title = title;
  this.clicks = 0;
  this.shown = 0;
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






function random() {
  var tempArray = [];
  tempArray[0] = randomNumber();
  tempArray[1] = randomNumber();
  while (tempArray[0] === tempArray[1]) {
    tempArray[1] = randomNumber();
  }
  tempArray[2] = randomNumber();
  while (tempArray[2] === tempArray[1] || tempArray[2] === tempArray[0]) {
    tempArray[2] = randomNumber();
  }

  console.log(tempArray);
  for (var i = 0; i < tempArray.length; i++) {
    var temp;
    if (i === 0) temp = wrapper1;
    else if (i === 1) temp = wrapper2;
    else temp = wrapper3;


    var chooseImage = productArray[tempArray[i]];
    chooseImage.productShown++;
    var imageElement = document.createElement('img');
    imageElement.setAttribute('src', chooseImage.filepath);
    imageElement.setAttribute('alt', chooseImage.alt);
    imageElement.setAttribute('title', chooseImage.title);
    console.log(imageElement);
    temp.appendChild(imageElement);
    console.log(productArray);
  }
}

function handleClick() {
  totalClicks++;
  for (var i = 0; i < productArray.length; i++) {
    if (event.target.alt === productArray[i].alt) {
      productArray[i].click++;
      productArray[i].shown++;
    }
  }
  wrapper1.innerHTML = '';
  wrapper2.innerHTML = '';
  wrapper3.innerHTML = '';
  random();
  if (totalClicks >= 25) {
    wrapper1.removeEventListener('click', handleClick);
    for (var j = 0; j < productArray.length; j++) {
      var li = document.createElement('li');
      li.textContent = productArray[j].title + ' had ' + productArray[j].clicks + ' votes and was shown ' + productArray[j].shown + ' times.'
      finalList.appendChild(li);
    }
  }
}

function randomNumber() {
  return Math.floor(Math.random() * Math.floor(productArray.length));
}

random();