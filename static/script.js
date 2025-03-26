console.log("Welcome to ColorPick");
var toCopy = '';

let colorCards = document.querySelectorAll('.color');
let randomColorButton = document.getElementById('random-color-button');
let colorCode = document.getElementById('color-code');
let copyIconPath = document.getElementById('copy');


// all the functions below

function setBackgroundColor(color) {
    document.body.style.backgroundColor = color;
};

function showColorCode(color) {
    colorCode.innerHTML = `HEX : ${color}`;
    copyIconPath.innerHTML = '<path d="M384 336H192c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16l140.1 0L400 115.9V320c0 8.8-7.2 16-16 16zM192 384H384c35.3 0 64-28.7 64-64V115.9c0-12.7-5.1-24.9-14.1-33.9L366.1 14.1c-9-9-21.2-14.1-33.9-14.1H192c-35.3 0-64 28.7-64 64V320c0 35.3 28.7 64 64 64zM64 128c-35.3 0-64 28.7-64 64V448c0 35.3 28.7 64 64 64H256c35.3 0 64-28.7 64-64V416H272v32c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V192c0-8.8 7.2-16 16-16H96V128H64z"/>';
};

function generateRandomColor() {
    let randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    return randomColor;
};

function copyToClipboard(text) {
    // Create a text area element to temporarily hold the text
    const textArea = document.createElement('textarea');
    textArea.value = text;
    // Append the text area to the document
    document.body.appendChild(textArea);
    // Select the text in the text area
    textArea.select();
    // Execute the copy command
    document.execCommand('copy');
    // Remove the temporary text area from the document
    document.body.removeChild(textArea);
}



// all the event listeners below

window.addEventListener('DOMContentLoaded', () => {
    const colour = generateRandomColor();
    setBackgroundColor(colour);
    showColorCode(colour);
});

colorCards.forEach((colorCard) => {
    colorCard.addEventListener('click', () => {
        const backgroundColor = colorCard.getAttribute('data-color');
        setBackgroundColor(backgroundColor);
        showColorCode(backgroundColor);
        toCopy = backgroundColor;
    });
});

randomColorButton.addEventListener('click', () => {
    let noOfTimes = 0;
    const interval = setInterval(() => {
        let randomColor = generateRandomColor();
        toCopy = randomColor;
        setBackgroundColor(randomColor);
        showColorCode(randomColor);
        noOfTimes++;
        if (noOfTimes === 5) {
            clearInterval(interval);
        }}, 40
    );
});

copyIconPath.addEventListener('click', () => {
    copyIconPath.innerHTML = '<path d="M208 0H332.1c12.7 0 24.9 5.1 33.9 14.1l67.9 67.9c9 9 14.1 21.2 14.1 33.9V336c0 26.5-21.5 48-48 48H208c-26.5 0-48-21.5-48-48V48c0-26.5 21.5-48 48-48zM48 128h80v64H64V448H256V416h64v48c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V176c0-26.5 21.5-48 48-48z"/>';
    copyToClipboard(toCopy);
    console.log(`HEX Code copied to clipboard: ${toCopy}`);
});