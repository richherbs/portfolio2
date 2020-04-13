/**
 * function to lock the game during penalties
 * set game to locked,
 * run a timeout of 3 seconds if normal card is wrong or 5 seconds if trick card is not clicked
 * reset game to unlocked
 * 
 * @param {game} Object object stores all info about the active game
 * @param {time} int indicates the amount of time the penalty is for
 */
function lockGame(game, time) {
    game.streak = 0;
    game.gameLocked = true;
    redCross();

    window.setTimeout((time) => {
        game.gameLocked = false;
        redCross();
        newCard(game);
        }, time);
}