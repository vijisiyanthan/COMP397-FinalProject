module scenes {
    export class GameOverScene extends objects.Scene {
        // Variables
        private gameOverLabel: objects.Button;
        private backButton: objects.Button;
        private background: objects.Background;
        private backgroundMusic: createjs.AbstractSoundInstance;


        // Constructors
        constructor(assetManager: createjs.LoadQueue) {
            super(assetManager);

            createjs.Sound.stop();
            this.Start();
        }
        // Methods
        public Start():void {
            this.background = new objects.Background(this.assetManager, "background");
            this.gameOverLabel = new objects.Button(this.assetManager, "failedLogo", 150, 200);
            this.backButton = new objects.Button(this.assetManager, "tryAgain", 200, 340);
            this.Main();
        }

        public Update():void {
            this.background.Update();
        }

        private backButtonClick():void {
            
            if(managers.Game.stageCheckpoint === 1){
            managers.Game.currentScene = config.Scene.GAME;
        } 

            else if (managers.Game.stageCheckpoint === 2) {

                this.backgroundMusic = createjs.Sound.play("lv2_Music");
                this.backgroundMusic.loop = -1; // Loop forever
                this.backgroundMusic.volume = 0.3;
                managers.Game.currentScene = config.Scene.LEVEL_2;
            }



            else if (managers.Game.stageCheckpoint === 3) {

                this.backgroundMusic = createjs.Sound.play("lv2_Music");
                this.backgroundMusic.loop = -1; // Loop forever
                this.backgroundMusic.volume = 0.3;
                managers.Game.currentScene = config.Scene.LEVEL_3;
            }
        }

        public Main():void {
            this.addChild(this.background);
            this.addChild(this.gameOverLabel);
            this.addChild(this.backButton);

            this.backButton.on("click", this.backButtonClick);
        }
    }
}