module objects {
    export class Enemy extends objects.GameObject {
        // Variables
        erraticMovement: Number;
        boundryTouched: boolean;

        // Constructor
        constructor(assetManager:createjs.LoadQueue) {
            super(assetManager, "enemy");
            this.Start(); 
            this.boundryTouched = true;
        }
        // Methods
        public Start():void {
            this.x = Math.floor(Math.random() * 500) + 50;
            this.y = Math.floor(Math.random() * -800) + -50;
        }
        public Update():void {
            this.Move();
            this.CheckBounds();
        }
        public Reset():void {}
       
       
        public Move():void {
             
            this.y += 5;

            if(this.boundryTouched === false){
            this.x -= 3;
        }

        else if(this.boundryTouched === true){
                this.x += 3;
        }

          
               
            

        }



        public InjuredMovement(): void {


            //this.erraticMovement = Math.floor(Math.random() * 3) + 1


            //this.y -= -5;

            if (this.erraticMovement === 1) {
                this.x += 10;
                this.y += 10;
            }

            else if (this.erraticMovement === 2) {
                this.x -= 10; 
                this.y -= 10;
            }

            else if (this.erraticMovement === 3) {
                this.x += 10;
                this.y -= 10;
            }

        }


        public CheckBounds():void {
            // Check the bottom boundary
            if(this.y >= 800 + this.height) {
                this.y = -50;
            }


            //Check walls
            if (this.x >= 500 + this.width) {

                this.x = this.x - 50;
                this.boundryTouched = false;
            }

            if (this.x <= 0 + this.width) {

                this.x = this.x + 50;
                this.boundryTouched = true;
            } 
        }

      
    }
}