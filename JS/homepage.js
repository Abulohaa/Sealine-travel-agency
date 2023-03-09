// Start Header
let activeHeaderLi = document.querySelector("nav ul").children;
let headerUl = document.querySelector("nav ul");

headerUl.addEventListener("click", (ele) => {
  Array.from(activeHeaderLi).forEach((element) => {
    element.children[0].classList.remove("active");
  });

  ele.target.classList.add("active");
})

let flipping = document.querySelectorAll("ul")[1].children;
let ulFlip = document.querySelectorAll("ul")[1];
let clicked = 0;
ulFlip.addEventListener("click", () => {
  let count = 1;
  if(clicked % 2 === 0){
    Array.from(flipping).forEach((ele) => {
      if (count === 1) {
        ele.style.transform = "translateY(300%)";
      }
      if (count === 3) {
        ele.style.transform = "translateY(-300%)";
      }
      count++;
    })
  } else {
    Array.from(flipping).forEach((ele, index) => {
      if (index === 0) {
        ele.style.transform = "translateY(-0)";
      }
      if (index === 2) {
        ele.style.transform = "translateY(0)";
      }
    })
  }
  clicked++;
})
// End Header
// Start Prices
let selectBox = document.querySelectorAll(".col-12 .form-select")[0];
// let options = Array.from(selectBox.options);
let spans = document.querySelectorAll(".card span");

selectBox.addEventListener("change", (ele) => {
  let arr = [];

  for(let i of spans) {
    arr.push(parseInt(i.innerHTML));
  }
  let count = 1;
  if (ele.target.value == 1) {
    arr = arr.sort();
    for(let i = 0; i < spans.length; i++) {
      for (let j = 0; j < arr.length; j++) {
        if(parseInt(spans[i].innerHTML) == arr[j]) {
          spans[j].parentElement.parentElement.parentElement.style.order = `${count++}`;
          break;
        }
      }
    }
  } else if (ele.target.value == 2) {
    arr = arr.sort().reverse();
    for(let i = 0; i < arr.length; i++) {
      for (let j = 0; j < spans.length; j++) {
        if(parseInt(spans[j].innerHTML) == arr[i]) {
          spans[j].parentElement.parentElement.parentElement.style.order = `${count++}`;
        }
      }
    }
  }
})
// End Prices

// Start News
let bullets = Array.from(document.querySelectorAll(".news .bullets")[0].children);
let cards = Array.from(document.querySelectorAll(".news .card")), l = 0;

bullets[0].addEventListener("click", (ele)=> {
  bullets[1].classList.remove("active");
  ele.target.classList.add("active");
  bullets[2].classList.remove("active");
  if (l === 1) 
    l--;
  else
    l-=2;
  // console.log(l);
  for(let i of cards) {

    if (l==0) {i.style.left = "0px";}
    // if (l==1) {i.style.left = "-780px"; i.parentElement.parentElement.style.overflow = "hidden";}
    if (l==1) {i.style.left = "-100%"; i.parentElement.parentElement.style.overflow = "hidden"; i.classList.add("translate-0");}
    if (l==2) {i.style.left = "-200%"; i.parentElement.parentElement.style.overflow = "hidden"; i.classList.add("translate-0");}
    if (l<0) {l=0;}
  }
})

bullets[1].addEventListener("click", (ele)=> {
  bullets[0].classList.remove("active");
  bullets[1].classList.add("active");
  bullets[2].classList.remove("active");
  l++;

  for(let i of cards) {
    if (l==0) {i.style.left = "0px";}
    if (l==1) {i.style.left = "-100%"; i.parentElement.parentElement.style.overflow = "hidden"; i.classList.add("translate-0");}
    if (l>1) {l=1;}
  }
})

// class list active Card add translate to inline style 

bullets[2].addEventListener("click", (ele)=> {
  bullets[0].classList.remove("active");
  bullets[1].classList.remove("active");
  bullets[2].classList.add("active");
  l+=2;
  for(let i of cards) {
    if (l==1) {i.style.left = "0px";}
    if (l==2) {i.style.left = "-200%"; i.parentElement.parentElement.style.overflow = "hidden"; i.classList.add("translate-10");}
    if (l>2) {l=2;}
  }
})
// End News
// Start scroll button 
let scrollSpan = document.querySelector(".up");
// console.log(scrollSpan);

window.onscroll = function () {
  this.scrollY >= 900? scrollSpan.classList.add("show") : scrollSpan.classList.remove("show");
}

scrollSpan.onclick = function() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
// End scroll button 