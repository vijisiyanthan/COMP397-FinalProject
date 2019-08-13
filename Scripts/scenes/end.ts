module scenes {
    export class End_Scene extends objects.Scene {
        // Variables
        private intermissionLabel: objects.Label;
        private EndButton: objects.Button;
        private background: objects.Background;
        private backgroundMusic: createjs.AbstractSoundInstance;

        // Constructor
        constructor(assetManager: createjs.LoadQueue) {
            super(assetManager);
            this.Start();
        }
        // Methods
        public Start(): void {


            this.backgroundMusic = createjs.Sound.play("victoryMusic");
            this.backgroundMusic.loop = -1; // Loop forever
            this.backgroundMusic.volume = 0.3; 
          
           

            this.intermissionLabel = new objects.Label("Earth Reached!", "40px", "Consolas", "#008B8B", 320, 240, true);

            this.background = new objects.Background(this.assetManager, "background");
            this.EndButton = new objects.Button(this.assetManager, "playAgainButton", 200, 300);
            this.Main();
        }

        public Update(): void {
            this.background.Update();

        }

        private startButtonClick(): void {

            createjs.Sound.stop();
            managers.Game.stageCheckpoint = 1;
            managers.Game.currentScene = config.Scene.START;
        }

        public Main(): void {
            this.addChild(this.background);
            this.addChild(this.intermissionLabel);
            this.addChild(this.EndButton);
            this.EndButton.on("click", this.startButtonClick);
        }
    }
}