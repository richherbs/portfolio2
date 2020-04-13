/**
 * Sounds to be played on correct or incorrect selection
 */
const CORRECTSOUND = new Audio('sounds/right.mp3');
const INCORRECTSOUND = new Audio('sounds/wrong.mp3');

/**
 * Info for the events to be constructed
 * 
 * @property {name} String the name of the custom event
 * @property {keyCode} int a JavaScript KeyCode. Pressing the designated key will trigger the event
 * @property {class} String the event listeners will be attached to the DOM element with the specified class
 * @property {cardId} int the ID of the card which is the "correct" option for this event listener
 * @property {punishClick} bool does triggering the event when the card displayed is not cardId cause a time penalty?
 */
let buttonZeroInfo = {
    name : 'buttonZeroPressed',
    keyCode : 37,
    class : '.buttonForZero',
    cardId : 0,
    punishClick : true
};

let buttonOneInfo = {
    name : 'buttonOnePressed',
    keyCode : 39,
    class : '.buttonForOne',
    cardId : 1,
    punishClick : true
};

let trickCardInfo = {
    name : 'cardPressed',
    keyCode : 38,
    class : '.card',
    cardId : 2,
    punishClick : false
};

/**
 * Declaration of custom events which will fire when buttons zero
 * and one are pressed, respectively
 * 
 * @param {eventInfo} Object An object containing information about the event to be created
 * 
 * @return CustomEvent a CustomEvent with the name specified within EventInfo
 */
function constructEvent(eventInfo) {
	let constructedEvent = new CustomEvent(eventInfo.name, {
		bubbles : true,
		cancelable: false,
    });
    return constructedEvent;
}

// Set up CustomEvents for the two buttons and for the trick card
let buttonZeroPressed = constructEvent(buttonZeroInfo);

let buttonOnePressed = constructEvent(buttonOneInfo);

let trickCardPressed = constructEvent(trickCardInfo);

/**
 * Function to create the event listeners.
 * 
 * @param {eventInfo} Object an object containing information about the event listeners to be created
 * @param {event} CustomEvent the customEvent which we want to dispatch when an element is clicked or a key is pressed
 */
function createEventListeners(eventInfo, event) {
    var button = document.querySelector(eventInfo.class);

    button.addEventListener('click', () =>  {
        button.dispatchEvent(event);
    });

    window.addEventListener('keydown', function(e)  {
        if (e.keyCode == eventInfo.keyCode) {
            button.dispatchEvent(event);
        }
    });

    button.addEventListener(eventInfo.name, () => {
        if (!game.gameLocked) {
            if(game.cardOnScreen == eventInfo.cardId) {
                playSound(CORRECTSOUND);
                incrementScore(game);
            } else {
                if (eventInfo.punishClick) {
                    playSound(INCORRECTSOUND);
                    if (game.cardOnScreen == 2) {
                        var time = 5000;
                    } else {
                        var time = 3000;
                    }
                    lockGame(game, time);
                }
            }
        }
    })
}

// Create the event listeners
createEventListeners(buttonZeroInfo, buttonZeroPressed);

createEventListeners(buttonOneInfo, buttonOnePressed);

createEventListeners(trickCardInfo, trickCardPressed);