module objects {    // Module = Namespace
    export class Label extends createjs.Text {  // export = public

        // Variables

        // Constructor
        constructor(labelString:string, fontSize:string, fontFamily:string, fontColour:string, x:number = 0, y:number = 0, isCentered:boolean = false) {
            super(labelString, fontSize + " " + fontFamily, fontColour);

            // Set registration point if true
            if(isCentered) {
                this.regX = this.getMeasuredWidth() * 0.5;
                this.regY = this.getMeasuredHeight() * 0.5;
            }

            // Set initial text position
            this.x = x;
            this.y = y;
        }

        // Methods

    }
}