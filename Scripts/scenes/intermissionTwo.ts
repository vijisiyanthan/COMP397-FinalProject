module scenes {
    export class Intermission_Two_Scene extends objects.Scene {
        // Variables
        private intermissionLabel: objects.Label;
        private level3Button: objects.Button;
        private background: objects.Background;
        private backgroundMusic: createjs.AbstractSoundInstance;

        // Constructor
        constructor(assetManager: createjs.LoadQueue) {
            super(assetManager);
            this.Start();
        }
        // Methods
        public Start(): void {

            /* unnecessary as its already looping
            this.backgroundMusic = createjs.Sound.play("lv2_Music");
            this.backgroundMusic.loop = -1; // Loop forever
            this.backgroundMusic.volume = 0.3; */


            this.intermissionLabel = new objects.Label("Astroids Avoided!", "40px", "Consolas", "#008B8B", 320, 240, true);

            this.background = new objects.Background(this.assetManager, "background");
            this.level3Button = new objects.Button(this.assetManager, "int_Two_Button", 100, 300);
            this.Main();
        }

        public Update(): void {
            this.background.Update();

        }

        private startButtonClick(): void {
            
            //swap out for level 3 stuff
            //managers.Game.stageCheckpoint = 2;
           // managers.Game.currentScene = config.Scene.LEVEL_2;
        }

        public Main(): void {
            this.addChild(this.background);
            this.addChild(this.intermissionLabel);
            this.addChild(this.level3Button);
            this.level3Button.on("click", this.startButtonClick);
        }
    }
}