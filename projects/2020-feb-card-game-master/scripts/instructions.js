let instructionTab = document.querySelector('.questionMark');
let instructionContainer = document.querySelector('.instructionsContainer');

/**
 * add an event listener to the question mark tab that activates when clicked and calls slide
 * if the instruction container is open it does not slide and if open it slides
 */
instructionTab.addEventListener('click', (e) => {
e.stopImmediatePropagation();
    if (!instructionTab.classList.contains('open')) {
        slide(0);
    } else {
        slide(-257.5);
    }
});

/**
 * add an event listener to the windowthat activates when clicked and calls slide
 * if the instruction container is open
 */
window.addEventListener('click', (e) => {
    e.stopImmediatePropagation();
    if (instructionTab.classList.contains('open')) {
        slide(-257.5);
    }
})
/**
 * function to allow the instruction container to slide in from the left of the screen
 * @param leftPos represents the value that the instruction container left should transition to
 */
function slide(leftPos) {
    instructionTab.classList.toggle('open');
    Velocity(instructionContainer, { left: leftPos }, { duration: 1000 })
}