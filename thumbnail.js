mybigimage = document.getElementById("largeview");
card1 = document.getElementById("card1");

card1.addEventListener("click", makeBigImage);
mybigimage.addEventListener("click", hideBigImage);

// Have the document hide the big image whenever the user presses any key
document.addEventListener("keyup", hideBigImage)

function makeBigImage() {
    //first be sure the largeview element has no leftover html
    mybigimage.innerHTML = "";
    //add an img element as a child of this largeview element
    bigimage = document.createElement("img");
    //now is when we load the big image from the server
    bigimage.src ="img/monkeySelfie.jpg";
    //make this new element a child of the div for the big image
    mybigimage.appendChild(bigimage);
    //remove the dontshow class so that the div element is displayed
    mybigimage.classList.remove("dontshow");
}

function hideBigImage() {
    //Just add the dontshow class back to that div, and the css rule for dontshow takes effect again
    mybigimage.classList.add("dontshow");
}

button = document.getElementById("button");

button.addEventListener("click", buttonClick);

function buttonClick() {
    button.classList.add("grow");
    button.innerHTML = "NOOOO!";
    button.style.cursor = "auto";
}