let muteButton = document.querySelector('.muteButton')
let mute = document.querySelectorAll('.mute')

/** listens for the mute on/off button being pressed. 
* Toggles the game.mute property true/false
* Toggles between the 2 images (sound on / mute) by adding or removing hidden class
*/

muteButton.addEventListener('click', () => {
    game.mute = !game.mute;
    mute.forEach(muteImage => {
        muteImage.classList.toggle('hidden');
   });
})
