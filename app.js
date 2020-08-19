var wrapper1 = document.getElementById('product1');
var wrapper2 = document.getElementById('product2');
var wrapper3 = document.getElementById('product3');
wrapper1.addEventListener('click', handleClick)
wrapper2.addEventListener('click', handleClick)
wrapper3.addEventListener('click', handleClick)

var finalList = document.getElementById('ul')
var productArray = [];
var totalClicks = 0;
var productNames = [];
var productClicks = [];
var productShown = [];

function Product(filepath, alt, title) {
  this.filepath = filepath;
  this.alt = alt;
  this.title = title;
  this.clicks = 0;
  this.shown = 0;
  productArray.push(this);
}

function onPageLoad() {
  if (productArray.length === 0) {
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
  }
  pageRefresh();
}


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
      productArray[i].clicks++;
      productArray[i].shown++;
    }
  }
  var stringifyProducts = JSON.stringify(productArray);
  localStorage.setItem('productArray', stringifyProducts);
  wrapper1.innerHTML = '';
  wrapper2.innerHTML = '';
  wrapper3.innerHTML = '';
  random();
  if (totalClicks >= 25) {
    wrapper1.removeEventListener('click', handleClick);
    for (var j = 0; j < productArray.length; j++) {
      console.log(productArray[i])
      var li = document.createElement('li');
      li.textContent = productArray[j].title + ' had ' + productArray[j].clicks + ' votes and was shown ' + productArray[j].shown + ' times.'
      finalList.appendChild(li);
    }
    dataInArray();
    generateChart();
  }

}

function pageRefresh() {
  if (localStorage.getItem('productArray')) {
    var getProductArray = localStorage.getItem('productArray');
    var parsedProducts = JSON.parse(getProductArray);
    productArray = parsedProducts;
  }
}


function randomNumber() {
  return Math.floor(Math.random() * Math.floor(productArray.length));
}

function dataInArray() {
  for (var i = 0; i < productArray.length; i++) {
    productNames.push(productArray[i].title)
    productClicks.push(productArray[i].clicks)
    productShown.push(productArray[i].shown)
  }
}

var ctx = document.getElementById('myChart').getContext('2d');
function generateChart() {
  var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: productNames,
      datasets: [{
        label: '# of Votes',
        data: productClicks,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(75, 192, 192, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(75, 192, 192, 1)',
        ],
        borderWidth: 1
      },
      {
        label: '# of times Shown',
        data: productShown,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(75, 192, 192, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(75, 192, 192, 1)',
        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });
}

onPageLoad();
random();
