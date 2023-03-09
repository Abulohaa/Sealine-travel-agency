// Start Header 

// End Header 

// Start Our Team

function showFilterd () {
  let input = document.getElementById("order-name").value.toUpperCase();

  let array = Array.from(imageContainer.children);

  for (let i = 0; i < array.length; i++) {
    const title = array[i].querySelector(".team-classic-title").innerHTML;

    if(title.toUpperCase().indexOf(input) > -1) {
      array[i].style.display = "";
    } else {
      array[i].style.display = "none";
    }
  }
  
}
let imageContainer = document.getElementById("images");

// End Our Team
// Start Timeline

window.addEventListener("scroll", reveal);
window.addEventListener("scroll", revealTop);
window.addEventListener("scroll", revealFade);

function reveal() {
  let reveals =document.querySelectorAll(".reveal");

  for (let i = 0; i < reveals.length; i++) {
    // const element = reveals[i];
    let windowHeight = window.innerHeight;
    let revealTop = reveals[i].getBoundingClientRect().top;
    let revealPoint = 150;

    if (revealTop < windowHeight - revealPoint) {
      reveals[i].classList.add('active');
    } else {
      reveals[i].classList.remove('active');
    }
  }
}


function revealTop() {
  let reveals =document.querySelectorAll(".reveal-top");

  for (let i = 0; i < reveals.length; i++) {
    let windowHeight = window.innerHeight;
    let revealTop = reveals[i].getBoundingClientRect().top;
    if (revealTop < windowHeight) {
      reveals[i].classList.add('active-top');
    } else {
      reveals[i].classList.remove('active-top');
    }
  }
}


function revealFade() {
  let reveals =document.querySelectorAll(".reveal-fade");

  for (let i = 0; i < reveals.length; i++) {
    let windowHeight = window.innerHeight;
    let revealTop = reveals[i].getBoundingClientRect().top;
    if (revealTop < windowHeight) {
      reveals[i].classList.add('active-fade');
    } else {
      reveals[i].classList.remove('active-fade');
    }
  }
}

// End Timeline
