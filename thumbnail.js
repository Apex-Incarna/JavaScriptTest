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


// This is the code for the giphy element
// Get elements
staticView = document.getElementById("staticView");
giphyView = document.getElementById("giphyView");
// Event listeners
staticView.addEventListener("mouseover", giphy);
giphyView.addEventListener("mouseout", giphyBye);
// Display gif when hovering over img
function giphy() {
    staticView.classList.add("dontshow");
    giphyView.classList.remove("dontshow");
}
// Display img when not hovering over giphy
function giphyBye() {
    staticView.classList.remove("dontshow");
    giphyView.classList.add("dontshow");
}


// Get the elements that can generate events
ucdiv = document.getElementById("ucdiv");
reeddiv = document.getElementById("reeddiv");

// Get the elements that will be affected when the user generates an event
ucdiv.affect = document.getElementById("chicago");
reeddiv.affect = document.getElementById("reed");

// Add our event listeners to each element
ucdiv.addEventListener("mouseover", collegeOver);
reeddiv.addEventListener("mouseover", collegeOver);

ucdiv.addEventListener("mouseout", collegeOut);
reeddiv.addEventListener("mouseout", collegeOut);


function collegeOver(event) {
    // We can know information about the element that caused the event
    // For example, event.currentTarget is the identifier of the element that cause the event
    divframe = event.currentTarget.affect;
    // If ucdiv genereated the event, then event.currentTarget.affect as the value "ucdiv.affect"
    divframe.style.visibility = "visible";
}

function collegeOut(event) {
    divframe = event.currentTarget.affect;
    divframe.style.visibility = "hidden";
}