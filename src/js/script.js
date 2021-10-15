/*
? Info:
? This program will change an image when a button is clicked, 
? to create a animation.

* Code Summary:
* There is a list that contains each frame's source image
* We have a variable which is a flag for the index of the list
* We Have a event listener that fires when the button is clicked
* when the button is clicked, we check if the index is greater than 9,
* if so change the index back to 0, else we add one more int to index
* then we change the image src to the list with a index of 'index'
*/

window.addEventListener("load", function () {
    const loader = document.querySelector(".loader");
    loader.className += " hidden"; // class "loader hidden"
});

const button = document.querySelector('.take-step')
const img = document.querySelector('.monkey')

const frames = [  
  '/public/f0.png',
  '/public/f1.png',
  '/public/f2.png',
  '/public/f3.png',
  '/public/f4.png',
  '/public/f5.png',
  '/public/f6.png',
  '/public/f7.png',
  '/public/f8.png',
  '/public/f9.png',
]

let index = 0;


button.onclick = () => {
  if (index === 9) {
    index = 0;
  } else index++;
  img.src = frames[index];
}