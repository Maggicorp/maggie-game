Tic-Tac-Toebot
A game by Maggie Casey
April 13th, 2017

Game URL:
https://maggicorp.github.io/maggie-game/

Technologies Used:
HTML, CSS, SCSS, Javascript, AJAX, gameAPI, JQuery, Bootstrap,

Planning:

To build this game I started with a wireframe, which can be found here: http://maggicorp.x10host.com/TicTacToeWireFrame.pdf

I built a prototype of the game, most of which I ultimately didn't use, which can be found here: http://maggicorp.x10host.com/ticTacToe%202/

I also wrote some psuedocode of game logic which was helpful.  Here is my psuedocode:

    On click

    Using a number div id , don;’t use 1 use One

    Let turn = 1
    Let user = ‘’
    Const gameArray (ten empty strings)= [“”,

    $(object).on(‘click’. turn)

    const turn = function(object) {
    prevent.default()
    does square id have something in it already
    object.id!==””
    return false, do nothing

    else
    whose turn it is
    if turn%2 === 1
    console.log(‘it is user x)
    user = “x”
    turn++
    else  if (turn%2 === 0){
    console.log(it is user o);
    user = “o”
    turn++ }

    then pass function play-turn(user, object) {
    if(user === “x”) {
    object.attr(background-image, “urlOfX”)
    object.array[idNum] = x
    } else if(user === “0”) {
    object.attr(background-image, “urlOfO”)
    object.array[idNum] = “o”
    }
    then functionCheck if game is over
    let result = checkToSeeIfYouWon(gameArray) {
    if (result = “x”) {
    ** store that has x won in the api;
    ** store that x has won in the score board
    ** change the string so that no one can click anything else
    } else if (result = “o”) {
    ** store that o won in the api
    ** change the score to say that x has won
    **function noClick change the array of strings so that on one can click anything else}

    function checkToSeeIfYouWon = looks for a bunch of
    if (array[1] === array[2] === array[3]) {
    return array[1] }

    function noClick = gameArray = gameArray.map(change empty to “e”)

    Qjuery.attr(gets ids and can return ids)

    Button starts new game on click has a function that does gameArray.map(change strings to empty)

I also wrote these user stories:

    1. As a user, I want to play tic tac toe

    2. As a user, I want to keep track of my score, and the person I am playing against's score

    3. As a user, I want the sign in process to be quick and easy.

    4. As a user, I want to be able to sign out quickly.

    5. As a user, I want to be able to restart a game if I want to.

    6. As a user, I want to be able to switch windows without losing my game progress.

    7. As a user, I want the tic tac toe game to look fun.

    8. As a user, I want the game to load quickly.

Difficulties:

Difficulties I faced were mostly around using the gameAPI.  I spent a lot of time trying to make the patch/ update game function work and trying to fully understand the different moving parts.

I keep most of my functions in the board/events.js file because I was afraid that variables would be out of scope. For the next project I would definitely use more export and import statements so that I could have cleaner code.


I also had some difficulty making my game mobile responsive and I wish I had designed it mobile first or using more bootstrap so I didn't have to go through and add a bunch of media queries at the end. To get the hover psuedo class to work I had to make a JQuery mouseover and mouseout function because a different event overrode the css.

More Time:

If I had more time I would try to make it possible for user O to sign in. I would also make it possible to reload an incomplete games on the game board, not just display their relevent statistics.  
