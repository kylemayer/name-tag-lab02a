const myInput = document.getElementById ('my-input');
const myButton = document.getElementById ('my-button');
const wordBox = document.getElementById ('word-box');

myButton.addEventListener('click', () => {
    // post-click logic goes here!
    const userWords = myInput.value;
    wordBox.textContent = userWords;
})


const myColor = document.getElementById ('favcolor')
const colorButton = document.getElementById ('color-button')
const tagColor = document.getElementById ('tag-back')

colorButton.addEventListener('click', () => {
    // post-click logic goes here!
    const newColor = favcolor.value;
    tagColor.style.backgroundColor = newColor;

})