module objects {
    export class Background extends createjs.Bitmap {
        // Variables
        private speedY:number
        // Constructor
        constructor(assetManager:createjs.LoadQueue, stringVal:string) {
            super(assetManager.getResult(stringVal));

            this.Start();
        }
        // Methods

        public Start():void {
            this.speedY = 0.25;
            this.Reset();
        }

        public Update():void {
            this.Move();
            this.CheckBounds();
        }
        
        private Reset():void {
            //this.y = -1100;
            this.y = -200;
        }
        private Move():void {
            this.y += this.speedY;
        }
        private CheckBounds():void {
            if(this.y >= 0 ) {
                this.Reset();
            }
        }
    }
}