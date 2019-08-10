module objects {
    export class Explosion extends objects.GameObject {
        // Variables
        private explosionSFX: createjs.AbstractSoundInstance;
        // Constructor
        constructor( x: number, y: number) {
            super("Explosion");

            this.explosionSFX = createjs.Sound.play("explode");
            this.explosionSFX.volume = 0.5;

            this.x = x;
            this.y = y;

            this.scaleX = 2;
            this.scaleY = 2;
            this.Start();
        }
        // Methods
        public Start(): void {
            this.on("animationend", this.animationEnded.bind(this), false);
        }
        public Update(): void { }
        public Reset(): void { }
        public Move(): void { }
        public CheckBounds(): void { }

        private animationEnded(): void {
            this.alpha = 0;
            this.off("animationend", this.animationEnded.bind(this), false);
            managers.Game.currentSceneObject.removeChild(this);
        }
    }
}