module objects {
    export class Player extends objects.GameObject {
        // Variables
        public isDead:boolean;
        // Constructor
        constructor(assetManager:createjs.LoadQueue) {
            super(assetManager, "player");
            this.isDead = false;
            this.Start();
        }
        // Methods
        public Start():void {
            this.y = 800;
            this.x = 300;
        }
        
        public Update(): void {
            this.Move();
            this.CheckBounds();
        }

        public Reset():void {}

        public Move():void {
            // We need a reference to the stage in order to get mouse position
            // this.x = objects.Game.stage.mouseX;

            // Keyboard controls
            if(objects.Game.keyboardManager.moveLeft) {
                this.x -= 5;
            }
            if(objects.Game.keyboardManager.moveRight) {
                this.x += 5;
            }

            if (objects.Game.keyboardManager.moveUp) {
                this.y -= 5;
            }
            if (objects.Game.keyboardManager.moveDown) {
                this.y += 5;
            }

            if (objects.Game.keyboardManager.shoot) {
            
                
            }

        }

        public CheckBounds(): void {
            // Right boundary
            if(this.x >= 600 - this.halfW) {
                this.x = 600 - this.halfW;
            }

            // Left boundary
            if(this.x <= this.halfW) {
                this.x = this.halfW;
            }
        }
    }
}