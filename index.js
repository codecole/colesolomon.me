// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

//adds the text blur the left
function addEffect() {
    let effectMe = document.getElementById('leftPane');
    effectMe.classList.add("text-blur-out");

}

//removes text blur
function removeEffect() {
    let effectMe = document.getElementById('leftPane');
    effectMe.classList.remove("text-blur-out");

}

//adds text blut to the right
function addnewEffect() {
    let effectMe = document.getElementById('rightPane');
    effectMe.classList.add("text-blur-out");
}

//removes text blur to the right
function removenewEffect() {
    let effectMe = document.getElementById('rightPane');
    effectMe.classList.remove("text-blur-out");

}

//adds the exit function when clicked
function exitRight() {
    let exitRight = document.getElementsById('pane');
    exitRight.classList.add("slide-out-right");

}