module scenes {
    export class StartScene extends objects.Scene {
        // Variables
        private startLogo: objects.Button;
        private welcomeLabel: objects.Label;
        private startButton: objects.Button;
        private background: objects.Background;

        // Constructor
        constructor(assetManager:createjs.LoadQueue) {
            super(assetManager);
            this.Start();
        }
        // Methods
        public Start():void {
           // this.welcomeLabel = new objects.Label("Welcome!", "60px", "Consolas", "#000000", 320, 240, true);
            this.background = new objects.Background(this.assetManager);
            this.startLogo = new objects.Button(this.assetManager, "startLogo", 100, 100);
            this.startButton = new objects.Button(this.assetManager, "startButton", 200, 300);
            this.Main();
        }

        public Update():void {
            this.background.Update();
   
        }

        private startButtonClick():void {
            managers.Game.currentScene = config.Scene.GAME;
        }

        public Main():void {
            this.addChild(this.background);
            this.addChild(this.welcomeLabel);
            this.addChild(this.startLogo);
            this.addChild(this.startButton);
            this.startButton.on("click", this.startButtonClick);
        }
    }
}