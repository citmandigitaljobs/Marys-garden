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

// Get the HAMBURGER?? modal
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



// START SEASON MODAL SPRING

// Get the modal
var modalOne = document.getElementById("modalOne");

// Get the button that opens the modal
var btnOne = document.getElementById("buttonOne");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close-one")[0];

// When the user clicks on the button, open the modal
btnOne.onclick = function() {
  modalOne.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modalOne.style.display = "none";
};
// END SEASON MODAL SPRING
// START SEASON CAROUSEL SPRING

let slideIndexSpringTopic = 1;
showSlideSpringTopic(slideIndexSpringTopic);

// Next/previous controls
function plusSlideSpringTopic(m) {
  showSlideSpringTopic((slideIndexSpringTopic += m));
}

// Thumbnail image controls
function currentSlideSpringTopic(m) {
  showSlideSpringTopic((slideIndexSpringTopic = m));
}

function showSlideSpringTopic(m) {
  let j;
     let slideSpringTopic = document.getElementsByClassName("spring-topic");
    let dotSpringTopic = document.getElementsByClassName("dot-spring");
  if (m > slideSpringTopic.length) {
    slideIndexSpringTopic = 1;
  }
  if (m < 1) {
    slideIndexSpringTopic = slideSpringTopic.length;
  }
  for (j = 0; j < slideSpringTopic.length; j++) {
    slideSpringTopic[j].style.display = "none";
  }
  for (j = 0; j < dotSpringTopic.length; j++) {
    dotSpringTopic[j].className = dotSpringTopic[j].className.replace(" active", "");
  }
  slideSpringTopic[slideIndexSpringTopic - 1].style.display = "block";
  dotSpringTopic[slideIndexSpringTopic - 1].className += " active";
}
// END SEASON CAROUSEL
// END SEASON CAROUSEL SPRING
// ----------------

// ------------------------------------------------
// START SEASON MODAL SUMMER

// Get the modal
var modalTwo = document.getElementById("modalTwo");

// Get the button that opens the modal
var btnTwo = document.getElementById("buttonTwo");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close-two")[0];

// When the user clicks on the button, open the modal
btnTwo.onclick = function() {
  modalTwo.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modalTwo.style.display = "none";
};

// END SEASON MODAL SUMMER
// ---------------
// START SEASON CAROUSEL SUMMER

let slideIndexSummerTopic = 1;
showSlideSummerTopic(slideIndexSummerTopic);

// Next/previous controls
function plusSlideSummerTopic(a) {
  showSlideSummerTopic((slideIndexSummerTopic += a));
}

// Thumbnail image controls
function currentSlideSummerTopic(a) {
  showSlideSummerTopic((slideIndexSummerTopic = a));
}

function showSlideSummerTopic(a) {
  let b;
    let slideSummerTopic = document.getElementsByClassName("summer-topic");
    let dotSummerTopic = document.getElementsByClassName("dot-summer");
  if (a > slideSummerTopic.length) {
    slideIndexSummerTopic = 1;
  }
  if (a < 1) {
    slideIndexSummerTopic = slideSummerTopic.length;
  }
  for (b = 0; b < slideSummerTopic.length; b++) {
    slideSummerTopic[b].style.display = "none";
  }
  for (b = 0; b < dotSummerTopic.length; b++) {
    dotSummerTopic[b].className = dotSummerTopic[b].className.replace(" active", "");
  }
  slideSummerTopic[slideIndexSummerTopic - 1].style.display = "block";
  dotSummerTopic[slideIndexSummerTopic - 1].className += " active";
}

// END SEASON CAROUSEL SUMMER
// ----------------
// ------------------------------------------------
// START SEASON MODAL AUTUMN

// Get the modal
var modalThree = document.getElementById("modalThree");

// Get the button that opens the modal
var btnThree = document.getElementById("buttonThree");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close-three")[0];

// When the user clicks on the button, open the modal
btnThree.onclick = function() {
  modalThree.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modalThree.style.display = "none";
};

// END SEASON MODAL AUTUMN
// ---------------
// START SEASON CAROUSEL AUTUMN

let slideIndexAutumnTopic = 1;
showSlideAutumnTopic(slideIndexAutumnTopic);

// Next/previous controls
function plusSlideAutumnTopic(c) {
  showSlideAutumnTopic((slideIndexAutumnTopic += c));
}

// Thumbnail image controls
function currentSlideAutumnTopic(c) {
  showSlideAutumnTopic((slideIndexAutumnTopic = c));
}

function showSlideAutumnTopic(c) {
  let d;
    let slideAutumnTopic = document.getElementsByClassName("autumn-topic");
    let dotAutumnTopic = document.getElementsByClassName("dot-autumn");
  if (c > slideAutumnTopic.length) {
    slideIndexAutumnTopic = 1;
  }
  if (c < 1) {
    slideIndexAutumnTopic = slideAutumnTopic.length;
  }
  for (d = 0; d < slideAutumnTopic.length; d++) {
    slideAutumnTopic[d].style.display = "none";
  }
  for (d = 0; d < dotAutumnTopic.length; d++) {
    dotAutumnTopic[d].className = dotAutumnTopic[d].className.replace(" active", "");
  }
  slideAutumnTopic[slideIndexAutumnTopic - 1].style.display = "block";
  dotAutumnTopic[slideIndexAutumnTopic - 1].className += " active";
}

// END SEASON CAROUSEL AUTUMN
// ----------------
// START SEASON MODAL WINTER

// Get the modal
var modalFour = document.getElementById("modalFour");

// Get the button that opens the modal
var btnFour = document.getElementById("buttonFour");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close-four")[0];

// When the user clicks on the button, open the modal
btnFour.onclick = function() {
  modalFour.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modalFour.style.display = "none";
};

// END SEASON MODAL WINTER
// ---------------
// START SEASON CAROUSEL WINTER

let slideIndexWinterTopic = 1;
showSlideWinterTopic(slideIndexWinterTopic);

// Next/previous controls
function plusSlideWinterTopic(e) {
  showSlideWinterTopic((slideIndexWinterTopic += e));
}

// Thumbnail image controls
function currentSlideWinterTopic(e) {
  showSlideWinterTopic((slideIndexWinterTopic = e));
}

function showSlideWinterTopic(e) {
  let f;
    let slideWinterTopic = document.getElementsByClassName("winter-topic");
    let dotWinterTopic = document.getElementsByClassName("dot-winter");
  if (e > slideWinterTopic.length) {
    slideIndexWinterTopic = 1;
  }
  if (e < 1) {
    slideIndexWinterTopic = slideWinterTopic.length;
  }
  for (f = 0; f < slideWinterTopic.length; f++) {
    slideWinterTopic[f].style.display = "none";
  }
  for (f = 0; f < dotWinterTopic.length; f++) {
    dotWinterTopic[f].className = dotWinterTopic[f].className.replace(" active", "");
  }
  slideWinterTopic[slideIndexWinterTopic - 1].style.display = "block";
  dotWinterTopic[slideIndexWinterTopic - 1].className += " active";
}

// END SEASON CAROUSEL WINTER

// ------------------------------------------------
