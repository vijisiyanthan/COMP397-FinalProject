module objects {
    export class Bullet extends objects.GameObject {
        // Variables
        //public isDead: boolean; remove later
        //public pos: number;

        // Constructor
        constructor(assetManager: createjs.LoadQueue) {
            
            super(assetManager, "bullet");
           // this.isDead = false;
            this.Start();
            
        }
        // Methods
        public Start(): void {
          //  this.y = 800;
           // this.x = 300;
        }

        public Update(): void {
           // this.Move();
           // this.CheckBounds();
        }

        public Reset(): void { }

        public Move(): void {
            
         //   while(this.y != 1000){
         //  this.y += 3;
   // }

        }

        public CheckBounds(): void {
            // Right boundary
            if (this.x >= 600 - this.halfW) {
                this.x = 600 - this.halfW;
            }

            // Left boundary
            if (this.x <= this.halfW) {
                this.x = this.halfW;
            }


            // up boundary
            if (this.y >= 1000 - this.halfW) {
                this.y = 1000 - this.halfW;
            }

            // down boundary
            if (this.y <= this.halfW) {
                this.y = this.halfW;
            }
        }
    }
}