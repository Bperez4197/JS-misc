"use strict";

///////////////////////////////////////
// Modal window

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");
const btnScrollTo = document.querySelector(".btn--scroll-to");
const section1 = document.querySelector("#section--1");

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnsOpenModal.forEach((button) => button.addEventListener("click", openModal));

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});
////////////////////////////////////////////////////////////////
// Page Navigation /////////////////////////////////////////////

//// This solution adds the event function to each <a>link</a> which is not very efficient. If there were 10,000 a's it would mean 10,000 copies of the same function
// document.querySelectorAll(".nav__link").forEach(function (el) {
//   el.addEventListener("click", function (e) {
//     e.preventDefault();
//     const id = this.getAttribute("href");
//     console.log(id);
//     document.querySelector(id).scrollIntoView({ behavior: "smooth" });
//   });
// });

// 1. Add event listener to common parent element
// 2. Determine what element originated the event

document.querySelector(".nav__links").addEventListener("click", function (e) {
  e.preventDefault();

  // Matching strategy
  if (e.target.classList.contains("nav__link")) {
    const id = e.target.getAttribute("href");
    // console.log(id);
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});

// Tabbed components ////////////////////////////////////////////////////////
const tabs = document.querySelectorAll(".operations__tab");
const tabsContainer = document.querySelector(".operations__tab-container");
const tabsContent = document.querySelectorAll(".operations__content");

tabsContainer.addEventListener("click", function (e) {
  const clicked = e.target.closest(".operations__tab");
  // console.log(clicked);

  // guard clause
  if (!clicked) return;

  // Active Tab
  tabs.forEach((tab) => tab.classList.remove("operations__tab--active"));
  clicked.classList.add("operations__tab--active");

  // Active content area
  // console.log(clicked.dataset.tab);
  tabsContent.forEach((tab) =>
    tab.classList.remove("operations__content--active")
  );
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add("operations__content--active");
});

/////////////////Smooth Scroll///////////////////////////////////////////////

btnScrollTo.addEventListener("click", function (e) {
  // const s1coords = section1.getBoundingClientRect();
  // console.log(s1coords);
  // console.log(e.target.getBoundingClientRect());
  // console.log("current scroll (x/y)", window.pageXOffset, window.pageYOffset);
  // console.log(
  //   "height/width viewport",
  //   document.documentElement.clientHeight,
  //   document.documentElement.clientWidth
  // );

  // window.scrollTo(
  //   s1coords.left + window.pageXOffset,
  //   s1coords.top + window.pageYOffset
  // );

  // //old way works on all browsers
  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: "smooth",
  // });

  // modern way that works on modern browsers
  section1.scrollIntoView({ behavior: "smooth" });
});

/////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// console.log(document.documentElement);
// console.log(document.head);
// console.log(document.body);

const header = document.querySelector(".header");
const allSections = document.querySelectorAll(".section");

// console.log(allSections);

document.getElementById("section--1");
const allButtons = document.getElementsByTagName("button");
// console.log(allButtons);

// console.log(document.getElementsByClassName("btn"));

// Creating and inserting elements///////////////////////////////////////
// .insertAdjacentHTML
const message = document.createElement("div");
message.classList.add("cookie-message");
message.textContent =
  "We use cookies for improved functionality and analytics.";
message.innerHTML =
  'We use cookies for improved functionality and analytics. <button class="btn btn--close-cookie">Got It!</button>';

// header.prepend(message);
// header.append(message);
// header.append(message.cloneNode(true)); // If I want a dom node to be in two places at once I must clone it like this

header.before(message);
// header.after(message);

// Delete elements///////////////////////////////////////////////
document
  .querySelector(".btn--close-cookie")
  .addEventListener("click", function () {
    // message.remove();
    message.parentElement.removeChild(message);
  });

// Styles ///////////////////////////////////////
message.style.backgroundColor = "#37383d";
message.style.width = "120%";

// console.log(message.style.height); //only works for inline styles such as the ones we set ourselves
//console.log(message.style.backgroundColor);// this works because we set it here in the js which makes it inline styling

// console.log(getComputedStyle(message).color); // use this to get non-inline styling

// These two methods to change values of properties that aren't inline styles
message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 30 + "px";

// document.documentElement.style.setProperty("--color-primary", "orangered");

// Attributes ///////////////////////////////////////////
const logo = document.querySelector(".nav__logo");
// console.log(logo.alt);
// console.log(logo.className);

logo.alt = "Beautiful minimalist logo";

// Non-standard
// console.log(logo.designer); //doesnt work
//console.log(logo.getAttribute('designer')); // works
logo.setAttribute("company", "Bankist");

// console.log(logo.src);
// console.log(logo.getAttribute("src"));

const link = document.querySelector(".nav__link--btn");
// console.log(link.href);
// console.log(link.getAttribute("href"));

// // Data Attributes //////////////////////////////////////////////////
// // start with data
// console.log(logo.dataset.versionNumber);

// // Classes
// logo.classList.add("c", "j");
// logo.classList.remove("c");
// logo.classList.toggle("c");
// logo.classList.contains("c", "j");

// //Don't USE
// logo.className = 'bryce';

// ///Events and Event Handlers/////////////////////////////////////

// const h1 = document.querySelector("h1");
// const alertH1 = function (e) {
//   alert("addEventListener: Great!");

//   // //remove the event listener after it fires once
//   // h1.removeEventListener("mouseenter", alertH1);
// };

// h1.addEventListener("mouseenter", alertH1);

// setTimeout(() => h1.removeEventListener("mouseenter", alertH1), 3000);

// //old school, usually use addEventListener
// h1.onmouseenter = function (e) {
//   alert("addEventListener: Great!");
// };

// //////Event propogation/////////////////
// const randomInt = (min, max) =>
//   Math.floor(Math.random() * (max - min + 1) + min);
// const randomColor = () =>
//   `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

// document.querySelector(".nav__link").addEventListener("click", function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log("link", e.target, e.currentTarget);

//   // //stop propogartion //// usually not a good idea but has some use cases
//   // e.stopPropagation();
// });

// document.querySelector(".nav__links").addEventListener("click", function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log("links", e.target, e.currentTarget);
// });

// // A third parameter can tell the event to fire during the capture phase (if set to true) as it travels down the DOM rather than as it comes back up the DOM
// document.querySelector(".nav").addEventListener(
//   "click",
//   function (e) {
//     this.style.backgroundColor = randomColor();
//     console.log("nav", e.target, e.currentTarget);
//   },
//   false
// );

//////////////////////////////DOM Traversing////////////////////////////

// const h1 = document.querySelector("h1");

// // going downwards: child
// //querySelectorAll with find all children no matter how far down the dom tree
// console.log(h1.querySelectorAll(".highlight"));
// console.log(h1.childNodes);
// console.log(h1.children);
// h1.firstElementChild.style.color = "white";
// h1.lastElementChild.style.color = "orangered";

// // going upwards: parents
// console.log(h1.parentNode);
// console.log(h1.parentElement);
// //closet will find all parents no matter how far up the dom tree
// h1.closest(".header").style.background = "var(--gradient-secondary)";

// h1.closest("h1").style.background = "var(--gradient-primary)";

// // going sideways: siblings
// console.log(h1.previousElementSibling);
// console.log(h1.nextElementSibling);

// console.log(h1.previousSibling);
// console.log(h1.nextSibling);

// console.log(h1.parentElement.children);
// [...h1.parentElement.children].forEach(function (el) {
//   if (el !== h1) {
//     el.style.transform = "scale(0.5)";
//   }
// });
