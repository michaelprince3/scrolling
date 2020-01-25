const audrey = document.getElementById("audrey")


/*
    Add an event listener to the `document` object to listen
    for the "scroll" event.
*/
window.addEventListener("scroll", function (event) {
    console.log(window.scrollY)
    
    /*
    Adjust the width of audrey to be 1/3 the value of
        `window.scrollY`. No lower than 50px, though.
    */
let size = window.scrollY

audrey.style.width = (size / 3) + "px";
audrey.style.minWidth = ("50px")
    /*
        Adjust the height of audrey to be 1/4 the value of
        `window.scrollY`. No lower than 100px, though.
    */
   audrey.style.height = `${(window.scrollY / 4)}px`;
   audrey.style.minHeight = ("100px")
})