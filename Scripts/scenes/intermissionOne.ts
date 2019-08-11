module scenes {
    export class Intermission_One_Scene extends objects.Scene {
        // Variables
        private intermissionLabel: objects.Label;
        private level2Button: objects.Button;
        private background: objects.Background;
        private backgroundMusic: createjs.AbstractSoundInstance;

        // Constructor
        constructor(assetManager: createjs.LoadQueue) {
            super(assetManager);
            this.Start();
        }
        // Methods
        public Start(): void {
        

            this.backgroundMusic = createjs.Sound.play("lv2_Music");
            this.backgroundMusic.loop = -1; // Loop forever
            this.backgroundMusic.volume = 0.3;
          

            this.intermissionLabel = new objects.Label("Mission Complete!", "40px", "Consolas", "#008B8B", 320, 240, true);

            this.background = new objects.Background(this.assetManager, "background");
            this.level2Button = new objects.Button(this.assetManager, "int_One_Button", 100, 300);
            this.Main();
        }

        public Update(): void {
            this.background.Update();

        }

        private startButtonClick(): void {
            managers.Game.stageCheckpoint = 2;
            managers.Game.currentScene = config.Scene.LEVEL_2;
        }

        public Main(): void {
            this.addChild(this.background);
            this.addChild(this.intermissionLabel);
            this.addChild(this.level2Button);
            this.level2Button.on("click", this.startButtonClick);
        }
    }
}