///	* [ ] `mouseover`
//  * [ ] `keydown`
//	* [ ] `wheel`
//	* [ ] `drag / drop`
//  * [ ] `load`
//	* [ ] `focus`
//	* [ ] `resize`
//	* [ ] `scroll`
//	* [ ] `select`
//	* [ ] `dblclick`

const nav = document.querySelectorAll(".nav-link");

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