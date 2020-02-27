/**
 * master list of composerNames included in this game
 * @constant
 * @type {Array<string>}
 * @default
 */
const composerNames = ["beethoven", "mozart", "bach", "wagner", "haydn", "brahms", "schubert", "schumann", "debussy", "handel", "vivaldi", "chopin", "dvorak", "mendelssohn", "stravinsky", "verdi", "strauss"];

/**
 * Maximum number of bad letter guesses
 * @constant
 * @type {number}
 * @default
 */
const maxCharacters = 11;

/**
 * Starting score for game, goes down with more time and bad guesses
 * @constant
 * @type {number}
 * @default
 */
const gameStartScore = 500;

/**
 * User instructions before game start
 * @constant
 * @type {string}
 * @default
 */
const gameInstructions =
    "Click <strong>Start Game</strong>  " +
    "Guess three separate composer names. " +
    "Each from among list of 4 names provided" +
    "Lose points for either: " +
    "  Taking too much time or, " +
    "  Making bad guesses. " +
    "But more clues and time used, means a lower final score.";


// aliases for html form fields accessed

/**
 * @type {string} 
 */
var userInput = "";


/**called from {@link startGameTimer} and {@link stopGameTimer}
 * @type {*} */
var timerID;

var radioArray = [];

/**
 * used in {@link setComposerNames}
 * @type {string} 
 */
var radio1Text = "";

/**
 * used in {@link setComposerNames}
 * @type {string} 
 */
var radio2Text = "";

/**
 * used in {@link setComposerNames}
* @type {string} 
*/
var radio3Text = "";

/**
 * used in {@link setComposerNames}
* @type {string} 
*/
var radio4Text = "";

/**
 * called from onclick event
 * @type {JQuery}
 */
const radio1 = $('#radio1');

/**
 * called from onclick event
 * @type {JQuery}
 */
const radio2 = $('#radio2');

/**
 * called from onclick event
 * @type {JQuery}
 */
const radio3 = $('#radio3');

/**
 * called from onclick event
 * @type {JQuery}
 */
const radio4 = $('#radio4');

/**
 * called from onclick event
 * @type {JQuery}
 */
const composerGuess1 = $('#composerGuess1');

/**
 * called from onclick event
 * @type {JQuery}
 */
const composerGuess2 = $('#composerGuess2');

/**
 * called from onclick event
 * @type {JQuery}
 */
const composerGuess3 = $('#composerGuess3');

/**
 * called from onclick event
 * @type {JQuery}
 */
const composerGuess4 = $('#composerGuess4');

/**
 * Alias for id=composerName getElement
 * @constant
 * @type {JQuery}
 * @default
 */
const composerName = $("#composerName");   // switch to jquery for homework 5

/**
 * Alias for id=composerPhoto getElement
 * @constant
 * @type {JQuery}
 * @default
 */
const composerPhoto = $('#composerPhoto');

/**
 * Alias for id=composerHelp getElement
 * @constant
 * @type {JQuery}
 * @default
 */
const composerHelp = $('#composerHelp');


/**
 * Alias for id=composerClues getElement
 * @constant
 * @type {JQuery}
 * @default
 */
const composerClues = $('#composerClues');

/**
 * Alias for id=gameScoreId getElement
 * @constant
 * @type {JQuery}
 * @default
 */
const gameScoreId = $("#gameScore");

/**
 * Alias for id=gameScoreId getElement
 * @constant
 * @type {JQuery}
 * @default
 */
const spinnerGrow = $("#spinner-grow");

/**
 * Alias for id=gameScoreId getElement
 * @constant
 * @type {JQuery}
 * @default
 */
const successGif = $("#successGif");

/**
 * Alias for id=gameScoreId getElement
 * @constant
 * @type {JQuery}
 * @default
 */
const failureGif = $("#failureGif");

/** Called from {@link updateScore} number of points deducted per second waiting to make a guess
 * @constant
 * @type {number}
 * @default
 */
const gamePointsPerSecond = 5;

/**
 * Alias for id=composerAudio getElement
 * @constant
 * @type {HTMLElement}
 * @default
 */
const composerAudio = document.getElementById("composerAudio");

/**
 * Count of bad guesses 
 * @type {number}
 */
var guessCount = 0;

/**
 * Each time player correctly guesses name of composer
 * @type {number}
 */
var correctGuess = 0;

/**
 * Score for current game starts = gameStartScore 
 * @type {number}
 */
var gameScore = gameStartScore;

/**
 * Sum of {@link gameScore} total from each of the the {@link numberRounds} played
 * @type {number} totalScore
 */
var gameScoreTotal = 0;

/**
 * numberRounds played up to {@link maxRounds}
 * @type {number} numberRounds
 */
var numberRounds = 0;

/**
 * Maximum number of Rounds to play
 * @type {number} numberRounds
 */
const maxRounds = 3;



/**
 * Count of hints used
 * @type {number}
 */
var hints = 0;

/**
 * Count of hints used
 * @type {number}
 */
var hintTimerCount = 0;

/**
 * Count of seconds allowed for each hint
 * @type {number}
 */
var hintTimerMaxCount = 3;

/**
 * gameOn or off to disable clock and score updates
 * @type {boolean}
 */
var gameOn = true;

/**
 * Count of hints allowed, not currently used 
 * @type {boolean}
 */
var restartYes = false;

/**
 * Current full name guess from user
 * @type {string}
 */
var composerNameGuess = "";

/**
 * Each erroneous character guess is concatenated to this string then displayed to user
 * @type {string}
 */

var notInComposerName = "";

/**
 * Initialize randomly selected gameComposer Name to unknown
 * @type {string}
 */
var gameComposer = "unknown";

/**
 * Used in seachName to determine if current userInput different from previous userInput
 * @type {number}
 */
var previousUserInputLength = 0;

/**
 * Randomly selected composer index used to reference name and video embed string,
 *      could be used to add other elements to link in to game for the same composer
 * @type {number}
 */
var composerIndex = 0;

/**
 * Once composerIndex randomly selected this is set to correct composer video string 
 * @type {string}
 */
var gameComposerVideo = "";

/**
 * Composer names and associated embed youtube videos 
 * @type {Array<{lastName:string, 
 *              firstName: string, 
 *              rhymesWith: string, 
 *              birthDay: string, 
 *              mostPopular: string, 
 *              video: string}>}
 */
var composerArray = [
    {
        lastName: "bach",
        firstName: "Johann Sebastian",
        rhymesWith: "talk",
        birthDay: "1685",
        mostPopular: "Brandenburg Concertos",
        video: '<iframe src="https://www.youtube.com/embed/6JQm5aSjX6g" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    },
    {
        lastName: "mozart",
        firstName: "Wolfgang Amadeus",
        rhymesWith: "go start",
        birthDay: "1756",
        mostPopular: "Serenade No. 13",
        video: '<iframe src="https://www.youtube.com/embed/Rb0UmrCXxVA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    },
    {
        lastName: "debussy",
        firstName: "Claude",
        rhymesWith: "you do see",
        birthDay: "1862",
        mostPopular: "Pelléas et Mélisande",
        video: '<iframe src="https://www.youtube.com/embed/OUx6ZY60uiI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    },
    {
        lastName: "beethoven",
        firstName: "Johann Sebastian",
        rhymesWith: "verkoven",
        birthDay: "1777",
        mostPopular: "9th Symphony",
        video: '<iframe src="https://www.youtube.com/embed/QkQapdgAa7o" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    },
    {
        lastName: "strauss",
        firstName: "Johann",
        rhymesWith: "house",
        birthDay: "1825",
        mostPopular: "Beautiful Blue Danube",
        video: '<iframe src="https://www.youtube.com/embed/d4AmYBhGBfM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    },
    {
        lastName: "dvorak",
        firstName: "Antonin",
        rhymesWith: "go back",
        birthDay: "1841",
        mostPopular: "From The New World Symphony",
        video: '<iframe src="https://www.youtube.com/embed/3nSEMJW7UqE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    },
    {
        lastName: "mendelssohn",
        firstName: "Felix",
        rhymesWith: "frendelson",
        birthDay: "1809",
        mostPopular: "Violin Concerto in E Minor",
        video: '<iframe src="https://www.youtube.com/embed/sWiCHa9DFOY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    },
    {
        lastName: "brahms",
        firstName: "Johannes",
        rhymesWith: "alms",
        birthDay: "1833",
        mostPopular: "Concerto Violin in D Major",
        video: '<iframe src="https://www.youtube.com/embed/zKrxesI3ziE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    },
    {
        lastName: "haydn",
        firstName: "Joseph",
        rhymesWith: "biden",
        birthDay: "1732",
        mostPopular: "The London Symphonies",
        video: '<iframe src="https://www.youtube.com/embed/EmZF3kBZQ6E" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    },
    {
        lastName: "schubert",
        firstName: "Franz",
        rhymesWith: "hubert",
        birthDay: "1797",
        mostPopular: "Winterreise",
        video: '<iframe src="https://www.youtube.com/embed/iiChxN0T2kA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    },
    {
        lastName: "vivaldi",
        firstName: "Antonio",
        rhymesWith: "garibaldi",
        birthDay: "1777",
        mostPopular: "Four Seasons",
        video: '<iframe src="https://www.youtube.com/embed/O6NRLYUThrY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    },
    {
        lastName: "chopin",
        firstName: "Frederic",
        rhymesWith: "hopin",
        birthDay: "1810",
        mostPopular: "Nocturne In B-Flat Minor",
        video: '<iframe src="https://www.youtube.com/embed/wygy721nzRc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    },
    {
        lastName: "stravinsky",
        firstName: "Igor",
        rhymesWith: "kazinsky",
        birthDay: "1882",
        mostPopular: "The Rite of Spring",
        video: '<iframe src="https://www.youtube.com/embed/ne4PoC7V0Mk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    },
    {
        lastName: "handel",
        firstName: "Georg Friedricn",
        rhymesWith: "randall",
        birthDay: "1685",
        mostPopular: "Messiah",
        video: '<iframe src="https://www.youtube.com/embed/joVkx20oVIg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    },
    {
        lastName: "wagner",
        firstName: "Wilhelm Richard",
        rhymesWith: "hagner",
        birthDay: "1813",
        mostPopular: "Tristan",
        video: '<iframe src="https://www.youtube.com/embed/4i0TnNI6U-w" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    },
    {
        lastName: "verdi",
        firstName: "Giuseppe",
        rhymesWith: "dirty",
        birthDay: "1813",
        mostPopular: "Rigoletto",
        video: '<iframe src="https://www.youtube.com/embed/P6sz5b2w9Zc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    },
    {
        lastName: "schumann",
        firstName: "Robert",
        rhymesWith: "neumann",
        birthDay: "1810",
        mostPopular: "Kinderszenen",
        video: '<iframe src="https://www.youtube.com/embed/QqEWbOzL_GQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    }
];

