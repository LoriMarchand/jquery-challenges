/**
 * Hockey is the game. Make it happen.
 *
 * USEFUL RESOURCES
 * https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics
 * https://api.jquery.com/id-selector/
 * https://api.jquery.com/html/
 * https://api.jquery.com/css/
 * https://api.jquery.com/click/
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt
 *
 * If you want to turn it into some other sport, have at it.
 *
 * Anyway, I have given you a basic HTML structure for a
 * BATTLE OF THE SPORTS GAME THING between these two rivals, and you
 * should make the page do what it needs to do, using your knowledge
 * of JS, HTML, CSS, and... sports.
 *
 * Here's what this 'game' should do:
 *
 * 1. Clicking a "SHOOT" button attempt to score against the opposing team.
 *   - shots have a random chance of succeeding or failing
 *   - number of shots taken should increase every click on the "SHOOT" button
 *   - number of hits obviously only increases when the shot is successful
 *
 * 2. Clicking the "RESET" button resets all the shot and score counters and
 * adds 1 to the number of resets
 *
 * 3. Any time a team shoots and scores change the background color of
 *    page to that teams color
 *
 * OPTIONAL STUFF:
 * - add logos of the two rivals below their name
 * - make the page just look better
 * - play a sound when someone clicks the "Shoot" button. You'll need to read about the <audio> element
 *   and how to use it in JS. You will also need to download a sound bite
 */
//Game has been changed to baseball and has hits not shots
//Team One is the Calaveras Redskins - logo is an Indian
//Team Two is the Bret Harte BullFrogs - logo is a Bullfrog

(function () {

  //jQuery equivelent to window.onload = function{}
  //code in here wont run until page loads

  $(function () {
    //team one stuff
    const incrementHitButtonTeamOne = $("#teamone-hit");
    const counterOne = $("#teamone-numhits");
    const teamOneScore = $('#teamone-numruns');

    //team two stuff
    const incrementHitButtonTeamTwo = $("#teamtwo-hit");
    const counterTwo = $("#teamtwo-numhits");
    const teamTwoScore = $('#teamtwo-numruns');
    //
    function getRandomIntInclusive(min = 0, max = 1) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
    }
    function incrementCounter() {
      counterOne.html(parseInt(counterOne.html()) + 1);
    }
    const numResets = $("#num-resets");

    $("#reset").click(function () {


      teamOneScore.html(0);
      counterOne.html(0);
      teamTwoScore.html(0);
      counterTwo.html(0);
      numResets.html(parseInt(numResets.html()) + 1);
    })

    incrementHitButtonTeamOne.click(function () {
      let runScored = getRandomIntInclusive();
      teamOneScore.html(parseInt(teamOneScore.html()) + runScored)
      console.log("run scored" + runScored)
      //randomNumber();
      incrementCounter();


      if (runScored > 0) {//will score 1
        $("body").css("background-color", "red");
      } else { // if there is not a hit scored the background will remain white
      }

    })

    function incrementCounterTwo() {
      counterTwo.html(parseInt(counterTwo.html()) + 1);
    }
    incrementHitButtonTeamTwo.click(function () {
      let runScored = getRandomIntInclusive();
      teamTwoScore.html(parseInt(teamTwoScore.html()) + runScored)
      console.log("run scored" + runScored)
      //randomNumber();
      incrementCounterTwo();

      if (runScored > 0) {//will score 1
        $("body").css("background-color", "purple");
      } else { // if there is not a hit scored the background will remain white
      }

    })

  })


})()




