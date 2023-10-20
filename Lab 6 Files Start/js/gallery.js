// STEP 1: Initialize and declare variables
var displayedImage = document.querySelector('.displayed-img');
var thumbBar = document.querySelector('.thumb-bar');

/* STEP 2: Loop 5 times to create the <img> elements */
for (var i = 1; i < 6; i++) {
  var newImage = document.createElement('img');
  newImage.setAttribute('src', 'images/pic' + i + '.jpg');
  thumbBar.appendChild(newImage);
}

/* STEP 4: Function to change the src of the main <img> */
function displayImage(value) {
  displayedImage.setAttribute('src', value);
}

/* STEP 5: Event Delegation */
thumbBar.onclick = function(event) {
  // event.target is the element that was clicked
  if (event.target && event.target.nodeName === 'IMG') {
    var imgSrc = event.target.getAttribute('src');
    displayImage(imgSrc);

    // Lab 6 STEP G: Call the clearWayfinding() function
    clearWayfinding();

    // Lab 6 STEP A: Change the event.target CSS outline property to "5px solid red"
    event.target.style.outline = "5px solid red";

    // Lab 6 STEP B: Change the event.target CSS position property to "relative"
    event.target.style.position = "relative";

    // Lab 6 STEP C: Set the CSS z-index property to "10"
    event.target.style.zIndex = "10";
  }
};

// Lab 6 STEP D: Initialize and declare a var called 'thumbImgs'
var thumbImgs = document.querySelectorAll('.thumb-bar img');

// Lab 6 STEP E: Build a function called 'clearWayfinding()' that loops through the thumbImgs array with a FOR loop
function clearWayfinding() {
  for (var i = 0; i < thumbImgs.length; i++) {
    // Lab 6 STEP F: Reset the CSS outline-width and z-index properties
    thumbImgs[i].style.outlineWidth = "0";
    thumbImgs[i].style.zIndex = "0";
  }
}
