function countdown() {
    var seconds = document.getElementById("seconds").value;

    function tick() {
        seconds = seconds - 1;
        timer.innerHTML = seconds;
        var time = setTimeout(tick, 1000);
        if (seconds == -1) {
            alert("Time's up!");
            clearTimeout(time);
            timer.innerHTML = "";
        }
    }
    tick();
}

// Initialize the slideIndex variable to keep track of the current slide
let slideIndex = 0;

// Call the showSlides function to start the slideshow
showSlides();

// Define the showSlides function to manage the slideshow
function showSlides() {
  // Declare local variables
  let i;

  // Get all elements with the class "mySlides" and store them in the slides variable
  let slides = document.getElementsByClassName("mySlides");

  // Get all elements with the class "dot" and store them in the dots variable
  let dots = document.getElementsByClassName("dot");

  // Hide all slides by setting their display property to "none"
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }

  // Increment the slideIndex to move to the next slide
  slideIndex++;

  // If slideIndex exceeds the number of slides, reset it to 1 to start from the beginning
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }    

  // Display the current slide by setting its display property to "block"
  slides[slideIndex - 1].style.display = "block";


  // Call the showSlides function again after 2.5 seconds (2500 milliseconds) to transition to the next slide
  setTimeout(showSlides, 2500); // Change image every 2.5 seconds
}