// HAMBURGER MENU
/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
//AND ADDED EVENT LISTENER TO MAKE MENU CLOSE ON LINK CLICK
function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
  x.addEventListener("click", function () {
    x.style.display = "none";
  });
}

// Get the modal
var modalparent = document.getElementsByClassName("modal_multi");
// Get the button that opens the modal
var modal_btn_multi = document.getElementsByClassName("myBtn_multi");
// Get the <span> element that closes the modal
var span_close_multi = document.getElementsByClassName("close_multi");
// When the user clicks the button, open the modal
function setDataIndex() {
  for (i = 0; i < modal_btn_multi.length; i++) {
    modal_btn_multi[i].setAttribute("data-index", i);
    modalparent[i].setAttribute("data-index", i);
    span_close_multi[i].setAttribute("data-index", i);
  }
}
for (i = 0; i < modal_btn_multi.length; i++) {
  modal_btn_multi[i].onclick = function () {
    var ElementIndex = this.getAttribute("data-index");
    modalparent[ElementIndex].style.display = "block";
  };
  // When the user clicks on <span> (x), close the modal
  span_close_multi[i].onclick = function () {
    var ElementIndex = this.getAttribute("data-index");
    modalparent[ElementIndex].style.display = "none";
  };
}
window.onload = function () {
  setDataIndex();
};
window.onclick = function (event) {
  if (event.target === modalparent[event.target.getAttribute("data-index")]) {
    modalparent[event.target.getAttribute("data-index")].style.display = "none";
  }
};

// GLUT CAROUSEL
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("myCarousel");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
// END GLUT CAROUSEL

// START MONTH CAROUSEL

let slideIndexMonth = 1;
showSlidesMonth(slideIndexMonth);

// Next/previous controls
function plusSlidesMonth(m) {
  showSlidesMonth((slideIndexMonth += m));
}

// Thumbnail image controls
function currentSlideMonth(m) {
  showSlidesMonth((slideIndexMonth = m));
}

function showSlidesMonth(m) {
  let j;
  let slidesMonth = document.getElementsByClassName("myCarousel-month");
  let dotsMonth = document.getElementsByClassName("dot-month");
  if (m > slidesMonth.length) {
    slideIndexMonth = 1;
  }
  if (m < 1) {
    slideIndexMonth = slidesMonth.length;
  }
  for (j = 0; j < slidesMonth.length; j++) {
    slidesMonth[j].style.display = "none";
  }
  for (j = 0; j < dotsMonth.length; j++) {
    dotsMonth[j].className = dotsMonth[j].className.replace(" active", "");
  }
  slidesMonth[slideIndexMonth - 1].style.display = "block";
  dotsMonth[slideIndexMonth - 1].className += " active";
}
// END MONTH CAROUSEL


