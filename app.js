


const myMiddle = document.getElementById("middle");

const myInput = document.getElementById("nameInput");
const myButton = document.getElementById("nameButton");
const yellowButton = document.getElementById('yellowButton');    
const redButton = document.getElementById('redButton');  
const blueButton = document.getElementById('blueButton');  

console.log(myMiddle);
console.log(myInput);
console.log(myButton);
console.log(yellowButton);
console.log(redButton);
console.log(blueButton);

myButton.addEventListener('click', () => {
    const userInput = myInput.value;
    console.log(userInput);
    myMiddle.textContent = userInput;
});

yellowButton.addEventListener('click', () => { 
    document.getElementById('top').style.background = "yellow";
});

redButton.addEventListener('click', () => { 
    document.getElementById('top').style.background = "red";
});

blueButton.addEventListener('click', () => { 
    document.getElementById('top').style.background = "blue";
});