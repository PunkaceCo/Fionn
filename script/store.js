// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
// var btn = document.getElementById("buy");
// console.log(btn);
// Get the <span> element that closes the modal


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
successBuy = document.getElementById('successBuy');
var accept = document.getElementById('accept');
var done = document.getElementById('ok');

// accept.onclick = function () {
//   modal.style.display = "none";
//   successBuy.style.display = "block";

// };

done.onclick = function () {
  modal.style.display = "none";
  successBuy.style.display = "none";

};



var all = document.querySelector('.all');
console.log('all',all);

var image = document.createElement('img');
var title = document.createElement('h1');
var description = document.createElement('p');
var btn = document.createElement('button');

let products =[
  {
    img:'../asset/png/cd.png',
    title:'TITEL',
    price:'66$',
    desc:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur, veritatis.',
  },
  {
    img:'../asset/png/coffe.png',
    title:'TITEL',
    price:'66$',
    desc:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur, veritatis.',
  },
  {
    img:'../asset/png/cd.png',
    title:'TITEL',
    price:'66$',
    desc:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur, veritatis.',
  },
  {
    img:'../asset/png/cd.png',
    title:'TITEL',
    price:'66$',
    desc:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur, veritatis.',
  },
  {
    img:'../asset/png/coffe.png',
    title:'TITEL',
    price:'66$',
    desc:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur, veritatis.',
  },
  {
    img:'../asset/png/cd.png',
    title:'TITEL',
    price:'66$',
    desc:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur, veritatis.',
  },
];

let buyForm = {
  fullName:'',
  email:'',
  phone:'',
  address:'',
};

var all = document.querySelector('.all');
var card = document.createElement('div');
card.setAttribute('class', 'product-card col-3');

function showBuyForm(event){
  var thisProduct = event.path[1].children;
  console.log("show buy form",thisProduct);
  modal.style.display = "block";
  img.src = thisProduct[0].src;
  h.innerHTML = thisProduct[1].innerHTML;

  d.innerHTML = thisProduct[2].innerHTML;
}

function load(n){
  image.src = products[n].img;
  title.innerHTML = products[n].title;
  description.innerHTML = products[n].desc;
  btn.innerHTML = 'BUY';
}

function addItems(){
  for (var i = 0; i < products.length; i++) {
    card.addEventListener('DOMContentLoaded', load(i));
    card.setAttribute("onclick",'showBuyForm(event)');

    card.appendChild(image);
    card.appendChild(title);
    card.appendChild(description);
    card.appendChild(btn);

    var clone = card.cloneNode(true);
    all.appendChild(clone);
  }
}

addItems();

//make buy form
var modalContent = document.querySelector('.modal-content');

var close = document.createElement('span');
close.setAttribute('class',"close");
close.innerHTML = '&times;';
modalContent.appendChild(close);

var form = document.createElement('div');
form.setAttribute('class', 'form');
modalContent.appendChild(form);

var row = document.createElement('div');
row.setAttribute('class','row');
form.appendChild(row);

var product = document.createElement('div');
product.setAttribute('class', 'product-card col-5');
row.appendChild(product);

var img = document.createElement('img');
img.setAttribute('style',"width:100%");

var h = document.createElement('h1');
var price = document.createElement('div');
price.setAttribute('class', 'price');
var p = document.createElement('p');

p.setAttribute('style', 'color:#FF9B04');
p.innerHTML = "price: ";
var value = document.createElement('p');
price.appendChild(p);
price.appendChild(value);

var d = document.createElement('p');

product.appendChild(img);
product.appendChild(h);
product.appendChild(price);
product.appendChild(d);


var info = document.createElement('div');
info.setAttribute('class', 'information');
row.appendChild(info);

var fullName = document.createElement('div');
fullName.setAttribute('class','row');
info.appendChild(fullName);

namediv = document.createElement('div');
fullName.appendChild(namediv);

namelbl = document.createElement('label');
namelbl.setAttribute('style','width:100%');
namelbl.setAttribute('for','fullname');
namelbl.innerHTML = 'FULLNAME';
namediv.appendChild(namelbl);

nameinput = document.createElement('input');
nameinput.setAttribute('type','text');
nameinput.setAttribute('id','fullname');
nameinput.setAttribute('name','fullname');
namediv.appendChild(nameinput);
/////////////////////////////////////////
var email = document.createElement('div');
email.setAttribute('class','row');
info.appendChild(email);

emaildiv = document.createElement('div');
email.appendChild(emaildiv);

emaillbl = document.createElement('label');
emaillbl.setAttribute('style','width:100%');
emaillbl.setAttribute('for','email');
emaillbl.innerHTML = 'EMAIL';
emaildiv.appendChild(emaillbl);

emailinput = document.createElement('input');
emailinput.setAttribute('type','text');
emailinput.setAttribute('id','email');
emailinput.setAttribute('name','email');
emaildiv.appendChild(emailinput);



var phone = document.createElement('div');
phone.setAttribute('class','row');
info.appendChild(phone);

phonediv = document.createElement('div');
phone.appendChild(phonediv);

phonelbl = document.createElement('label');
phonelbl.setAttribute('style','width:100%');
phonelbl.setAttribute('for','phone');
phonelbl.innerHTML = 'PHONE';
phonediv.appendChild(phonelbl);

phoneinput = document.createElement('input');
phoneinput.setAttribute('type','text');
phoneinput.setAttribute('id','phone');
phoneinput.setAttribute('name','phone');
phonediv.appendChild(phoneinput);

var address = document.createElement('div');
address.setAttribute('class','row');
info.appendChild(address);

addressdiv = document.createElement('div');
address.appendChild(addressdiv);

addresslbl = document.createElement('label');
addresslbl.setAttribute('style','width:100%');
addresslbl.setAttribute('for','address');
addresslbl.innerHTML = 'ADDRESS';
phonediv.appendChild(addresslbl);

addressinput = document.createElement('textarea');
addressinput.setAttribute('id','address');
addressinput.setAttribute('name','address');
addressinput.setAttribute('placeholder','Address');
phonediv.appendChild(addressinput);

var buybtn = document.createElement('div');
buybtn.setAttribute('class','row');
info.appendChild(buybtn);

buydiv = document.createElement('div');
buybtn.appendChild(buydiv);

buyinput = document.createElement('input');
buyinput.setAttribute('id','accept');
buyinput.setAttribute('type','submit');
buyinput.setAttribute('value','BUY');
buyinput.setAttribute('placeholder','Address');
buydiv.appendChild(buyinput);


var span = document.querySelector('.close');
console.log("S",span);

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
};