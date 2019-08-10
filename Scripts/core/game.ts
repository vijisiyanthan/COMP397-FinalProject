/// <reference path="_references.ts"/>
(function() {

    // Global Game Variables
    let canvas = document.getElementById("canvas");
    let stage:createjs.Stage;
    let helloLabel:objects.Label;
    let clickableButton:objects.Button;

    let assetManager:createjs.LoadQueue;
    let assetManifest: any[];

    // Create variables that store current scene information
    let currentScene:objects.Scene;
    let currentState:number;

    let keyboardManager: managers.Keyboard;

    // Define Spritesheet information
    let textureAtlasData: any;
    let textureAtlas: createjs.SpriteSheet;

    textureAtlasData =  {

        "images": [
            ""
        ],

            "framerate": 20,
                "frames": [
                    [0, 0, 50, 52, 0, 0, 0],
                    [0, 52, 34, 50, 0, 0, 0],
                    [0, 102, 50, 46, 0, 0, 0],
                    [0, 148, 64, 64, 0, 0, 0],
                    [0, 212, 64, 64, 0, 0, 0],
                    [0, 276, 64, 64, 0, 0, 0],
                    [0, 340, 64, 64, 0, 0, 0],
                    [0, 404, 64, 64, 0, 0, 0],
                    [0, 468, 64, 64, 0, 0, 0],
                    [0, 532, 32, 32, 0, 0, 0],
                    [32, 532, 17, 32, 0, 0, 0],
                    [0, 564, 30, 30, 0, 0, 0],
                    [30, 564, 30, 30, 0, 0, 0],
                    [0, 594, 30, 30, 0, 0, 0],
                    [30, 594, 30, 30, 0, 0, 0],
                    [0, 624, 50, 30, 0, 0, 0],
                    [0, 654, 34, 50, 0, 0, 0],
                    [34, 654, 30, 30, 0, 0, 0]
                ],

            "animations": {
            "Asteroid": { "frames": [0] },
            "ChrisWestbrook": { "frames": [1] },
            "eliteQualion": { "frames": [2] },
            "explosion1": { "frames": [3] },
            "explosion2": { "frames": [4] },
            "explosion3": { "frames": [5] },
            "explosion4": { "frames": [6] },
            "explosion5": { "frames": [7] },
            "explosion6": { "frames": [8] },
            "Explosion": {"frames": [3,4,5,6,7,8], "speed": 0.1},
            "eyebot": { "frames": [9] },
            "laser": { "frames": [10] },
            "plasma1": { "frames": [11] },
            "plasma2": { "frames": [12] },
            "plasma3": { "frames": [13] },
            "plasma4": { "frames": [14] },
            "plasma": {"frames": [11, 12, 13, 14], "speed": 0.1},
            "QuadBlast": { "frames": [15] },
            "QualionFighter": { "frames": [16] },
            "singleshot": { "frames": [17] }
        },

        

    }

    assetManifest = [
        { id: "textureAtlas", src: "./Assets/Sprites/textureAtlas.png"},
        {id: "startButton", src:"./Assets/StartButton.png"},
        {id: "startLogo", src:"./Assets/TitleLogo.png"},
        {id: "nextButton", src:"./Assets/NextButton.png"},
        {id: "tryAgain", src:"./Assets/TryAgain.png"},
        { id: "int_One_Button", src: "./Assets/Intermission_One_Button.png" },
        {id: "failedLogo", src:"./Assets/FailedLogo.png"},
        {id: "background", src:"./Assets/QualionOrbitBG.png"},
        {id: "explode", src:"./Assets/Audio/PlayerExplodes.mp3"},
        { id: "playerShot", src: "./Assets/Audio/PlayerShot.mp3" },
        { id: "enemyShot", src: "./Assets/Audio/PlasmaSound.wav" },
        {id: "play_music", src:"./Assets/Audio/StarMusic.wav"} 
       
    ];

    function Init():void {
        console.log("Initialization start");

        textureAtlas = new createjs.SpriteSheet(textureAtlasData);

        assetManager = new createjs.LoadQueue();    // Creates the container used for the queue
        assetManager.installPlugin(createjs.Sound); // Necessary to use sound in our game
        assetManager.loadManifest(assetManifest);   // Loads the manifest defined above
        assetManager.on("complete", Start, this);
        
        // Start();
    }

    function Start() {
        console.log("Starting Application...");

        // Define our spritesheet from the preloader
        textureAtlasData.images = [assetManager.getResult("textureAtlas")];
        textureAtlas = new createjs.SpriteSheet(textureAtlasData);

        // Initialize CreateJS
        stage = new createjs.Stage(canvas)
        stage.enableMouseOver(20);  // Frequency of checks. Computationally expensive. Turn on in menus. Turn off in game.
        createjs.Ticker.framerate = 60; //  60 FPS (Frames per second)
        createjs.Ticker.on("tick", Update);
        
        managers.Game.stage = stage;
        managers.Game.currentScene = config.Scene.START;
        currentState = config.Scene.START;  // Default State

        managers.Game.currentSceneObject = currentScene;

        keyboardManager = new managers.Keyboard;
        // GLOBAL REFERENCE TO MY KEYBOARD
        managers.Game.keyboardManager = keyboardManager;
        managers.Game.assetManager = assetManager;
        managers.Game.textureAtlas = textureAtlas;

        Main();
    }

    function Update() {
        if(currentState != managers.Game.currentScene) {
            console.log(managers.Game.currentScene);
            Main();
        }

        currentScene.Update();

        stage.update();
    }

    function Main() {
        // console.log("Game Start...");
        // Define a Finite State Machine
        switch(managers.Game.currentScene) {
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

            case config.Scene.LEVEL_INTERMISSION_ONE:
            stage.removeAllChildren();
            currentScene = new scenes.Intermission_One_Scene(assetManager);
            stage.addChild(currentScene);
            break;
        }
        currentState = managers.Game.currentScene;
        managers.Game.currentSceneObject = currentScene;
    }

    window.onload = Init;
})();