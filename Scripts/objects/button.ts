module objects {
    export class Button extends createjs.Bitmap {
        // Variables
        // Constructor
        constructor(assetManager: createjs.LoadQueue, imageString:string, x:number = 0, y:number = 0) {
            super(assetManager.getResult(imageString)); // Actual loaded object is of type BLOB

            this.x = x;
            this.y = y;

            // Setup Event Handlers
            this.on("mouseover", this.mouseOver);
            this.on("mouseout", this.mouseOut);
        }
        // Methods
        private mouseOver():void {
            this.alpha = 0.7;
        }

        private mouseOut():void {
            this.alpha = 1.0;
        }
    }
}