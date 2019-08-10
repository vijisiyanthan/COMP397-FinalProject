module scenes {
    export class GameOverScene extends objects.Scene {
        // Variables
        private gameOverLabel: objects.Button;
        private backButton: objects.Button;
        private background: objects.Background;


        // Constructors
        constructor(assetManager: createjs.LoadQueue) {
            super(assetManager);

            createjs.Sound.stop();
            this.Start();
        }
        // Methods
        public Start():void {
            this.background = new objects.Background(this.assetManager);
            this.gameOverLabel = new objects.Button(this.assetManager, "failedLogo", 150, 200);
            this.backButton = new objects.Button(this.assetManager, "tryAgain", 200, 340);
            this.Main();
        }

        public Update():void {
            this.background.Update();
        }

        private backButtonClick():void {
            managers.Game.currentScene = config.Scene.GAME;
        }

        public Main():void {
            this.addChild(this.background);
            this.addChild(this.gameOverLabel);
            this.addChild(this.backButton);

            this.backButton.on("click", this.backButtonClick);
        }
    }
}