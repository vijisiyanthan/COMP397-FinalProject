/// <reference path="_references.ts"/>
(function () {
    // Global Game Variables
    var canvas = document.getElementById("canvas");
    var stage;
    var helloLabel;
    var clickableButton;
    var assetManager;
    var assetManifest;
    // Create variables that store current scene information
    var currentScene;
    var currentState;
    var keyboardManager;
    assetManifest = [
        { id: "startButton", src: "./Assets/StartButton.png" },
        { id: "startLogo", src: "./Assets/TitleLogo.png" },
        { id: "nextButton", src: "./Assets/NextButton.png" },
        { id: "tryAgain", src: "./Assets/TryAgain.png" },
        { id: "failedLogo", src: "./Assets/FailedLogo.png" },
        //{id: "background", src:"./Assets/SeamlessBG.png"},
        { id: "background", src: "./Assets/QualionOrbitBG.png" },
        //{id: "player", src:"./Assets/Spaceship.png"},
        { id: "player", src: "./Assets/ChrisWestbrook.png" },
        //{id: "enemy", src:"./Assets/Enemy.png"},
        { id: "enemy", src: "./Assets/QualionFighter.png" },
        { id: "explode", src: "./Assets/Audio/PlayerExplodes.mp3" },
        { id: "play_music", src: "./Assets/Audio/StarMusic.wav" },
        { id: "bullet", src: "./Assets/QuadBlast.png" }
    ];
    function Init() {
        console.log("Initialization start");
        assetManager = new createjs.LoadQueue(); // Creates the container used for the queue
        assetManager.installPlugin(createjs.Sound); // Necessary to use sound in our game
        assetManager.loadManifest(assetManifest); // Loads the manifest defined above
        assetManager.on("complete", Start, this);
        // Start();
    }
    function Start() {
        console.log("Starting Application...");
        // Initialize CreateJS
        stage = new createjs.Stage(canvas);
        stage.enableMouseOver(20); // Frequency of checks. Computationally expensive. Turn on in menus. Turn off in game.
        createjs.Ticker.framerate = 60; //  60 FPS (Frames per second)
        createjs.Ticker.on("tick", Update);
        objects.Game.stage = stage;
        objects.Game.currentScene = config.Scene.START;
        currentState = config.Scene.START; // Default State
        keyboardManager = new managers.Keyboard;
        // GLOBAL REFERENCE TO MY KEYBOARD
        objects.Game.keyboardManager = keyboardManager;
        Main();
    }
    function Update() {
        if (currentState != objects.Game.currentScene) {
            console.log(objects.Game.currentScene);
            Main();
        }
        currentScene.Update();
        stage.update();
    }
    function Main() {
        // console.log("Game Start...");
        // Define a Finite State Machine
        switch (objects.Game.currentScene) {
            case config.Scene.START:
                stage.removeAllChildren();
                currentScene = new scenes.StartScene(assetManager);
                stage.addChild(currentScene);
                break;
            case config.Scene.GAME:
                stage.removeAllChildren();
                currentScene = new scenes.PlayScene(assetManager);
                stage.addChild(currentScene);
                break;
            case config.Scene.OVER:
                stage.removeAllChildren();
                currentScene = new scenes.GameOverScene(assetManager);
                stage.addChild(currentScene);
                break;
        }
        currentState = objects.Game.currentScene;
    }
    window.onload = Init;
})();
//# sourceMappingURL=game.js.map