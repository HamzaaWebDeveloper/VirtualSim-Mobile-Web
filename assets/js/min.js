AOS.init();


function changeColors() {
var span = document.getElementById("mySpan");

if (span.style.backgroundColor === "white" && span.style.color === "black") {
 // Revert back to original state
 span.style.backgroundColor = "";
 span.style.color = "";
} else {
 // Change to new state
 span.style.backgroundColor = "black";
 span.style.color = "white";
}
}

// Add a click event listener to the document
document.addEventListener("click", function(event) {
var targetElement = event.target;
var mySpan = document.getElementById("mySpan");

// Check if the clicked element is not the span itself
if (targetElement !== mySpan) {
 // Revert back to original state
 mySpan.style.backgroundColor = "white";
 mySpan.style.color = "black";
}
});


function changeColors2() {
var span = document.getElementById("mySpan1");

if (span.style.backgroundColor === "white" && span.style.color === "black") {
 // Revert back to original state
 span.style.backgroundColor = "";
 span.style.color = "";
} else {
 // Change to new state
 span.style.backgroundColor = "black";
 span.style.color = "white";
}
}

// Add a click event listener to the document
document.addEventListener("click", function(event) {
var targetElement = event.target;
var mySpan = document.getElementById("mySpan1");

// Check if the clicked element is not the span itself
if (targetElement !== mySpan) {
 // Revert back to original state
 mySpan.style.backgroundColor = "white";
 mySpan.style.color = "black";
}
});