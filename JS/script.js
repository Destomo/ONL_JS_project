const [btn1, btn2] = document.querySelectorAll('button');

btn1.addEventListener('click', clickHandler);
btn2.addEventListener('click', clickHandler);

function clickHandler( {target} ) {
    const img = target.parentNode.children[0];
    img.setAttribute('src', target.dataset.src);
}


/*
const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const image = document.getElementById('image');

button1.addEventListener('click', function() {
  const imageURL = button1.getAttribute('data-link');
  imageURL.setAttribute('src', sakura-hous.jpg);
});

button2.addEventListener('click', function() {
  const imageURL = button2.getAttribute('data-link');
  imageURL.setAttribute('src', sakura-moun.jpg);
});
*/