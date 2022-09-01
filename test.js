// Step 0: What do we want to make happen? 
// I want to change the color, size, and content of the text when the user moves over it, and change it back when the user moves off of it

// Step 1: get the element that we want to affect and store it away so that we're ready to respond to the event

ourText = document.getElementById("newtext");

// This code asks the document for the element with the id "newtext" and stores the response in something named "ourText"

// Step 2: we want to tell ourText to change when the mouse moves over it, so we attach an event listner named onMouseOver to ourText

// Here's our event listener:

ourText.addEventListener("click", onClick);

function onClick() {
    ourText.style.color = "blue";
    ourText.style.fontSize = "3em";
    ourText.innerHTML = "Now we've changed the text.";
    ourText.style.cursor = "text";
}

ourText.addEventListener("mouseout", offMouseOver);

function offMouseOver() {
    ourText.style.color = "black";
    ourText.style.fontSize = "1rem";
    ourText.innerHTML = "Look! We changed it back!";
    ourText.style.cursor = "pointer";
}

theButton = document.getElementById("myButton");

theButton = addEventListener("click", buttonClick);

function buttonClick() {
    myButton.innerHTML = "OH YEAH!!!";
    myButton.style.color = "red";
}



// Get the textfield with the id myInput
ourInput = document.getElementById("myInput"); // this contains th enew text
ourHeading = document.getElementById("header"); //this is what we're going to modify

// Tell the textfield what event listener is connected to its events
ourInput.addEventListener("change", changeText); // the text in the field changes 
ourInput.addEventListener("blur", changeText); // the text field loses focus
// the text field has focus when we're typing into it
// when we click out of the text field, it loses focus, generating a blur event

function changeText() {
    newtext = ourInput.value; // we ask ourInput for its value, which is the entered text
    ourHeading.innerHTMl = newtext;
    ourHeading.style.color = "blue";
}

// Monkey Button 
myCard = document.getElementById("card");
monkeyButton = document.getElementById("monkeyButton");

monkeyButton = addEventListener("click", monkeyClick);

function monkeyClick() {
    myCard.style.display = "block";
}

myCardImage = document.getElementById("cardImage");
myCard.addEventListener("click", changeImage);

function changeImage() {
    if (myCard.style.position == "") { // this asks whether the myCard div is in its original position
        myCard.style.position = "absolute"; // make the poisiton of the div absolute and 100px from top left corner
        myCard.style.top = "100px";
        myCard.style.left = "100px";
        myCardImage.style.width = "80px"; // make the width of the image 80px
        myCardImage.src = "img/smallMonkey.jfif";
    }
    else { // otherwise, the card is moved and small, 
        myCard.style.position = ""; // using double quotes means for something to go back to its original value
        myCard.style.top = "";
        myCard.style.left = "";
        myCardImage.style.width = "100%"; 
        myCardImage.src = "img/monkeySelfie.jpg";
    }
}