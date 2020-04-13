/**
 * Function to play the sound when a button is pressed, if the sound hasn't been muted.
 * It doesn't need to wait for the end of the sound in order to run again.
 * 
 * @param {sound} Sound the sound to be played
 */

function playSound(sound) {
    if(!game.mute) {
        if(!sound.ended){
            sound.pause();
            sound.currentTime = 0;
        }
        sound.play();
    }
}