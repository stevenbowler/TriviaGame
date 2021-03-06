// @ts-check

/** 
 * @top
 * @function top
 * @todo how to {@link pauseAudio} onclick of youtube iframe embed, i.e. play one or the other.
 * 
 * */

$(document).ready(function () {


    /** 
     * @event #radio1 calls {@link goodGuess} or if bad guess calls {@link badGuess} to start the game 
     * */
    radio1.on("click", function () {
        console.log("composerGuess1.html ", composerGuess1.text());
        if (composerGuess1.text().toLowerCase() === gameComposer) goodGuess();
        else badGuess();
    });


    /** 
     * @event #radio2 calls {@link goodGuess} or if bad guess calls {@link badGuess} to start the game 
     * */
    radio2.on("click", function () {
        console.log("composerGuess1.html ", composerGuess2.text());
        if (composerGuess2.text().toLowerCase() === gameComposer) goodGuess();
        else badGuess();

    });


    /** 
     * @event #radio3 calls {@link goodGuess} or if bad guess calls {@link badGuess} to start the game 
     * */
    radio3.on("click", function () {
        console.log("composerGuess1.html ", composerGuess3.text());
        if (composerGuess3.text().toLowerCase() === gameComposer) goodGuess();
        else badGuess();

    });


    /** 
     * @event #radio4 calls {@link goodGuess} or if bad guess calls {@link badGuess} to start the game 
     * */
    radio4.on("click", function () {
        console.log("composerGuess1.html ", composerGuess4.text());
        if (composerGuess4.text().toLowerCase() === gameComposer) goodGuess();
        else badGuess();

    });


    /**
     * called from {@link radio1}, radio2, radio3, radio4 onclick events if was wrong guess
     * @function goodGuess
     */
    const goodGuess = () => {
        console.log("goodGuess");
        handleSuccess();

    }


    /**
     * called from {@link radio1}, radio2, radio3, radio4 onclick events if was wrong guess
     * @function badGuess
     */
    const badGuess = () => {
        console.log("badGuess");
        ++guessCount;
        gameScore = gameScore - 125;
        composerHelp.html("Bad guess, try again, clock is ticking");
    }


    /** 
     * @event #start button click calls {@link restart} to start the game 
     * */
    $("#start").on("click", function () {
        restart();
    });


    /**
     * @event #play button click calls {@link playAudio} 
     * */
    $("#play").on("click", function () {
        playAudio();
    });


    /** 
     * @event #pause button click calls {@link pauseAudio} 
     * */
    $("#pause").on("click", function () {
        pauseAudio();
    });


    /** 
     * @event #playVideo button click calls {@link playVideo} 
     * */
    $("#playVideo").on("click", function () {
        playVideo();
    });


    /** 
     * Called from {@link updateScore} when {@link gameScore} < 0 
     * shut everything down, zero everything out, display failure, calls {@link stopGameTimer}, {@link animateCSS}.
     * @function handleFailure
     * */
    const handleFailure = () => {
        ++numberRounds;
        composerHelp.html("Yikes ... you blew it!");
        spinnerGrow.css({ display: "none" });
        successGif.css({ display: "none" });
        stopGameTimer();
        failureGif.css({ display: "block" });
        animateCSS("#failureGif", "zoomInRight");
        delay();
        if (numberRounds >= maxRounds) { endAll(); return; }
        setTimeout(
            () => restart(),
            5000);
    }


    /**
     * Called from {@link radio1} when match to composerName is found, calls {@link stopGameTimer}, turn on Success.gif display
     * @function handleSuccess
     */
    const handleSuccess = () => {
        ++numberRounds;
        ++correctGuess;
        gameScoreTotal = gameScoreTotal + gameScore;
        composerHelp.html("SUCCESS ... GREAT WORK!");
        spinnerGrow.css({ display: "none" });
        failureGif.css({ display: "none" });
        stopGameTimer();
        successGif.css({ display: "block" });
        animateCSS("#successGif", "zoomInRight");
        if (numberRounds >= maxRounds) { endAll(); return; }
        setTimeout(
            () => restart(),
            5000);
    }

    const delay = () => {

    }

    const endAll = () => {
        composerHelp.html("Total Score: " + gameScoreTotal + " with " + correctGuess + " correct out of " + maxRounds);
        correctGuess = 0;
        numberRounds = 0;
        gameScoreTotal = 0;
    }

    /**
     * Called from {@link restart} to set game timer then calls {@link updateScore} to react to current hint/guess conditions
     * @function startGameTimer
     */
    const startGameTimer = () => {
        console.log("startGameTimer");
        timerID = setInterval(
            () => updateScore(),
            1000);
    }


    /**
     * called from {@link handleFailure} if {@link gameScore} < 0 or from {@link handleSuccess} if guess composerName correct
     *      turn off game timer when each round of the game
     * @function stopGameTimer
     */
    const stopGameTimer = () => {
        clearInterval(timerID);
    }


    /** 
     * Called from the one second interval {@link startGameTimer} within {@link restart}
     * @function updateScore
     */
    const updateScore = () => {
        //updateTimerField();
        updateHints();
        if (guessCount == 0) gameScore = gameScore - hints;
        gameScore = gameScore - ((hints + guessCount) * gamePointsPerSecond); // score drops faster if user uses more hints and guesses
        console.log("updateScore gameScore: ", gameScore);
        gameScoreId.html(gameScore.toString());
        gameScoreId.attr("ariaValuenow", Math.round(gameScore / 5).toString());
        gameScoreId.css("width", Math.round(gameScore / 5).toString() + "%");
        if (gameScore <= 0) handleFailure();
    }


    /** 
     * Called from 3 places: navbar start, start game button event, or from composerName field oninput after success
     * @function restart
     */
    const restart = () => {
        radio1.prop('checked', false);
        radio2.prop('checked', false);
        radio3.prop('checked', false);
        radio4.prop('checked', false);
        gameOn = true;
        hints = 0;
        hintTimerCount = 0;
        guessCount = 0;
        chooseComposer();           // choose the target Composer

        updateTimerField();
        setComposerNames();         // sets all four composerGuess names to align with 4 radio option, composerGuess1 = gameComposer
        //@ts-ignore
        composerHelp.html("Who's the guy in the picture?");
        composerClues.html(gameInstructions);
        animateCSS('#composerClues', 'zoomInRight');
        gameScore = gameStartScore;
        //@ts-ignore
        startGameTimer()
        console.log("restart");
    }


    /** 
     * Called from {@link restart} and {@link handleInterim} to update the image of the timerField
     * @function updateTimerField
     */
    const updateTimerField = () => {
        console.log("updateTimerField: ");
        successGif.css({ display: "none" });
        failureGif.css({ display: "none" });
        spinnerGrow.css({ display: "block" });
        // composerClues.html(gameInstructions);
        animateCSS('#timerField', 'zoomInRight');
    }


    /**
     * Called from {@link updateScore} on submit event from radio buttons, but composerName not matched yet, 
     *  @function updateHints
     */
    const updateHints = () => {
        console.log("updateHint: ", hints, "guessCount : ", guessCount);
        if (hintTimerCount < hintTimerMaxCount) { ++hintTimerCount; return; }
        hintTimerCount = 0; // gets reset to zero each time the hint timer reaches max = seconds before next hint displayed/score reduced.

        switch (hints) {
            case 0: { composerHelp.html("Hint ... First name: " + composerArray[composerIndex].firstName); ++hints; break; }
            case 1: { composerHelp.html("Hint ... Born in: " + composerArray[composerIndex].birthDay); ++hints; break; }
            case 2: { composerHelp.html("Hint ... Best known music: " + composerArray[composerIndex].mostPopular); ++hints; break; }
            case 3: { composerHelp.html("Hint ... Last name rhymes with: " + composerArray[composerIndex].rhymesWith); ++hints; break; }
            default: break;
        }

    }


    /** 
     * Called from {@link restart} to choose a new composer from the array of 15 composers
     * @function chooseComposer
    */
    const chooseComposer = () => {
        //@ts-ignore
        composerIndex = parseInt(Math.random() * 17); //parseInt(Math.random() * 17); // worked when it was like this but wrong type
        console.log("composerIndex: ", composerIndex);
        console.log("random choice of Composer:  ", composerArray[composerIndex].lastName);
        gameComposer = composerArray[composerIndex].lastName;
        gameComposerVideo = composerArray[composerIndex].video;
        //console.log("random choice of Composer video:  ", composerArray[composerIndex].video);
        animateCSS('#composerPhoto', 'zoomOutRight', function () {
            //@ts-ignore
            composerPhoto.attr('src', "./assets/img/" + gameComposer + ".jpeg");
            animateCSS('#composerPhoto', 'zoomInRight')
        });
        //composerAudio.src = "./assets/audio/" + "debussy" + ".mp3";
        //@ts-ignore
        composerAudio.src = "./assets/audio/" + gameComposer + ".mp3";
        playAudio();

    }


    /**
     * Random select composer names, then random select position in 4 position radio selector on screen.
     * called from {@link restart} to set list of names for radio choices {@link radioChoice1} is the target {@link composerIndex} in {@link composerArray}
     * @function setComposerNames
     */
    const setComposerNames = () => {
        // Random selection of composer names
        // target composerName index
        var radioChoice1 = composerIndex;
        //random pick 1st decoy composerName index
        var radioChoice2 = Math.floor(Math.random() * 17);
        while (radioChoice2 == composerIndex)
            radioChoice2 = Math.floor(Math.random() * 17);
        //random pick 2nd decoy composerName index
        var radioChoice3 = Math.floor(Math.random() * 17);
        while (radioChoice3 == composerIndex ||
            radioChoice3 == radioChoice2)
            radioChoice3 = Math.floor(Math.random() * 17);
        //random pick 3rd decoy composerName index
        var radioChoice4 = Math.round(Math.random() * 17);
        while (radioChoice4 == composerIndex ||
            radioChoice4 == radioChoice2 ||
            radioChoice4 == radioChoice3)
            radioChoice4 = Math.round(Math.random() * 17);

        // the 4 composer names need to be set in random positions in the radio selection
        var targetRadioChoice = Math.floor(Math.random() * 4);
        switch (targetRadioChoice) {
            case 0: {
                radio1Text = composerArray[radioChoice1].lastName;
                radio2Text = composerArray[radioChoice2].lastName;
                radio3Text = composerArray[radioChoice3].lastName;
                radio4Text = composerArray[radioChoice4].lastName;
                break;
            }
            case 1: {
                radio1Text = composerArray[radioChoice2].lastName;
                radio2Text = composerArray[radioChoice1].lastName;
                radio3Text = composerArray[radioChoice3].lastName;
                radio4Text = composerArray[radioChoice4].lastName;
                break;
            }
            case 2: {
                radio1Text = composerArray[radioChoice3].lastName;
                radio2Text = composerArray[radioChoice2].lastName;
                radio3Text = composerArray[radioChoice1].lastName;
                radio4Text = composerArray[radioChoice4].lastName;
                break;
            }
            case 3: {
                radio1Text = composerArray[radioChoice4].lastName;
                radio2Text = composerArray[radioChoice2].lastName;
                radio3Text = composerArray[radioChoice3].lastName;
                radio4Text = composerArray[radioChoice1].lastName;
                break;
            }

        }
        composerGuess1.html(radio1Text);
        composerGuess2.html(radio2Text);
        composerGuess3.html(radio3Text);
        composerGuess4.html(radio4Text);
    }

    /** 
     * Called from {@link restart} or from play music button on home screen
     * @function playAudio
     */
    const playAudio = () => {
        //@ts-ignore
        composerAudio.play();
    }


    /** 
     * Called from pause music button on home screen
     * @function pauseAudio
     */
    const pauseAudio = () => {
        //@ts-ignore
        composerAudio.pause();
    }


    /**
     * Called from handleSuccess when composerName found offers youtube video in composerClues div on home screen
     */
    const playVideo = () => {
        composerClues.html(gameComposerVideo);
        animateCSS('#composerClues', 'zoomInRight');
    }


    /**
     * Called from various points to animate unload load of content in divs,
     *      from GitHub animate.css library
     * @async
     * @function animateCSS
     * @param {*} element div id/class/tag to be modified
     * @param {*} animationName from list of animateCSS classes
     * @param {*} [callback] required if unloading before loading div with content, async
     */
    const animateCSS = (element, animationName, callback) => {
        const node = document.querySelector(element)
        node.classList.add('animated', animationName)

        function handleAnimationEnd() {
            node.classList.remove('animated', animationName)
            node.removeEventListener('animationend', handleAnimationEnd)

            if (typeof callback === 'function') callback()
        }

        node.addEventListener('animationend', handleAnimationEnd)
    }


});