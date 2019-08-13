module objects {
    export class Powerup extends objects.GameObject {


        // Variables
        public isDead: boolean = false;
        public alreadyCounted: boolean; //used by in game enemy counter variables for spawning purposes. 
        //Ensures that they are not double counted;

        public speed; //The asteroids speed

        // Constructor
        constructor() {
            super("eyebot");
            this.Start();
            this.alreadyCounted = false;

            this.HP = 3; //setting the HP Value

            this.speed = this.y = Math.floor(Math.random() * - 9) - 3;
        }
        // Methods
        public Start(): void {

            this.x = Math.floor(Math.random() * 500) + 50;
            this.y = Math.floor(Math.random() * -500) + -200;

        }
        public Update(): void {


            this.Move();
            this.CheckBounds();
        }
        public Reset(): void {
            this.isDead = true;
            this.x = -1000;
            this.y = -1000;
        }
        public Move(): void {
            this.y -= this.speed; // default was -10 

        }
        public CheckBounds(): void {
            // Check the bottom boundary
            if (this.y >= 600 + this.height) {



                this.isDead = true;

            }

        }


        //sets the enemy as counted for in game counters
        public setAsCounted(): void {

            this.alreadyCounted = true;
        }

       
    }
}