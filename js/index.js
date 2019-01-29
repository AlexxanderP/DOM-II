///	* [X] `mouseover`
//  * [X] `keydown`
//	* [X] `wheel`
//	* [ ] `drag / drop`
//  * [X] `load`
//	* [ ] `focus`
//	* [ ] `resize`
//	* [X] `scroll`
//	* [ ] `select`
//	* [X] `dblclick`

const nav = document.querySelectorAll(".nav-link");

// Mouse Over
nav.forEach((currentvalue) => {
    currentvalue.addEventListener("mouseover", (e) => {
        currentvalue.style.color = "blue";
        setTimeout(function() {
            e.target.style.color = "";
        }, 300);
    });
});

//Sets the nav anchors from refreshing the page
nav.forEach((currentvalue) => {
    currentvalue.addEventListener("click", (e) => {
        e.preventDefault();
        TweenMax.to(e.target, 1, {x: 100, y: -25, rotation:1000, yoyo: true, repeat: 1});
    });
});

// keydown 
let pageTitle = document.querySelector('.logo-heading');
document.addEventListener('keydown', function (event) {
    let keyName = event.key
    pageTitle.textContent = `key pressed: ${keyName}`
})

// load 
window.addEventListener('load', function (event) {
    alert("Welcome to the Fun Bus! Woho!")
})

// wheel
const welcomeTo = document.querySelector('h2');
document.addEventListener('wheel', function (event) {
  let deltaY = event.deltaY * 10
    welcomeTo.textContent = `Scroll Away`
})

//Double click Lets Go!

const letsGo = document.querySelector(".content-section .text-content h2");

letsGo.addEventListener("dblclick", (e) => {
    e.target.style.cssText = "font-size : 10rem";
}); 


// Double click Fun in The Sun
const funSun = document.querySelector(".destination h4");

funSun.addEventListener("dblclick", (e) => {
    e.target.style.cssText = "font-size : 5rem";
}); 







// Copy for Intro Paragraph

const introHeading = document.querySelector(".intro p")
introHeading.addEventListener("copy", function(e) {
    introHeading.innerText = "Don't copy me!"
})


//Double Click Pick Your Destination
const destination = document.querySelector(".content-destination  h2");

destination.addEventListener("dblclick", (e) => {
    e.target.style.cssText = "font-size : 8rem";
}); 