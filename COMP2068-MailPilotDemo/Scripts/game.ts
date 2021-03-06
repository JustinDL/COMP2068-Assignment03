﻿/// <reference path="typings/createjs-lib/createjs-lib.d.ts" />
/// <reference path="typings/easeljs/easeljs.d.ts" />
/// <reference path="typings/tweenjs/tweenjs.d.ts" />
/// <reference path="typings/soundjs/soundjs.d.ts" />
/// <reference path="typings/preloadjs/preloadjs.d.ts" />
/// <reference path="typings/stats/stats.d.ts" />

/// <reference path="constants.ts" />
/// <reference path="objects/gameobject.ts" />
/// <reference path="objects/lakitu.ts" />
/// <reference path="objects/coin.ts" />
/// <reference path="objects/bullet.ts" />
/// <reference path="objects/sky.ts" />

/// <reference path="objects/label.ts" />
/// <reference path="objects/button.ts" />
/// <reference path="objects/scoreboard.ts" />

/// <reference path="states/gameover.ts" />
/// <reference path="states/play.ts" />
/// <reference path="states/menu.ts" />




// Game Variables
var stats: Stats = new Stats();
var canvas;
var stage: createjs.Stage;
var assetLoader: createjs.LoadQueue;

// Score Variables
var finalScore: number = 0;
var highScore: number = 0;

// State Variables
var currentState: number;
var currentStateFunction: any;
var stateChanged: boolean = false;


// Game Objects
var gameOver: states.GameOver;
var play: states.Play;
var menu: states.Menu;


// asset manifest - array of asset objects
var manifest = [
    { id: "bullet", src: "assets/images/bullet.png" },
    { id: "coin", src: "assets/images/coin.png" },
    { id: "sky", src: "assets/images/sky.png" },
    { id: "lakitu", src: "assets/images/lakitu.gif" },
    { id: "tryAgainButton", src: "assets/images/tryAgainButton.png" },
    { id: "playButton", src: "assets/images/playButton.png" },
    { id: "music", src: "assets/audio/music.wav" },
    { id: "yay", src: "assets/audio/coin.wav" },
    { id: "boom", src: "assets/audio/boom.wav" }

];

// Game Objects 

function preload() {
    assetLoader = new createjs.LoadQueue(); // instantiated assetLoader
    assetLoader.installPlugin(createjs.Sound);
    assetLoader.on("complete", init, this); // event handler-triggers when loading done
    assetLoader.loadManifest(manifest); // loading my asset manifest
}


function init() {
    canvas = document.getElementById("canvas");
    stage = new createjs.Stage(canvas);
    stage.enableMouseOver(20); // Enable mouse events
    createjs.Ticker.setFPS(60); // 60 frames per second
    createjs.Ticker.addEventListener("tick", gameLoop);
    setupStats();

    currentState = constants.MENU_STATE;
    changeState(currentState);
}

// UTILITY METHODS +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
function setupStats() {
    stats.setMode(0);
    stats.domElement.style.position = 'absolute';
    stats.domElement.style.left = '650px';
    stats.domElement.style.top = '440px';
    document.body.appendChild(stats.domElement);
}




function gameLoop() {
    stats.begin(); // Begin metering

    currentStateFunction.update();


    if (stateChanged) {
        changeState(currentState);
    }

    stage.update(); // Refreshes our stage

    stats.end(); // End metering
}





// Our Game Kicks off in here
function changeState(state: number) {

    stateChanged = false;
    switch (state) {
        case constants.MENU_STATE:
            // Instantiate Menu State
            menu = new states.Menu();
            currentStateFunction = menu;
            break;
        case constants.PLAY_STATE:
            // Instantiate Play State
            play = new states.Play();
            currentStateFunction = play;
            break;
        case constants.GAME_OVER_STATE:
            // Instantiate Game Over State
            gameOver = new states.GameOver();
            currentStateFunction = gameOver;
            break;
    }



   


    
}