module objects {
    export class EliteEnemy extends objects.GameObject {
        // Variables
        erraticMovement: Number;
        boundryTouched: boolean;
        public isDead: boolean = false;
        private laserSpawn: math.Vec2;
        private shootOrNot: number;
        private shootingSFX: createjs.AbstractSoundInstance;
        public alreadyCounted: boolean; //used by in game enemy counter variables for spawning purposes. 
        //Ensures that they are not double counted;

        // Constructor
        constructor() {
            super("eliteQualion");
            this.Start();
            this.boundryTouched = true;
            this.alreadyCounted = false;
        }
        // Methods
        public Start(): void {
            this.x = Math.floor(Math.random() * 500) + 50;
            this.y = Math.floor(Math.random() * -500) + -50;
        }

        public Update(): void {

            this.Move();
            this.CheckBounds();
            this.Fire()
        }


        public Fire(): void {
            if (!this.isDead) {
                // I am alive. I can shoot lasers...maybe?

                // Gets number of ticks ticker has issued
                // let ticker: number = createjs.Ticker.getTicks();
                this.shootOrNot = Math.floor(Math.random() * 500) + 50;

                // Constrain laser fire rate
                if ((this.shootOrNot % 75 == 0)) {
                    // Position our laser spawner
                    this.laserSpawn = new math.Vec2(this.x, this.y - this.halfH);

                    // IDEAL
                    let laser = managers.Game.EnemyProjectileManager.GetLaser();

                    //let currentLaser = managers.Game.laserManager.CurrentLaser;
                    //let laser = managers.Game.laserManager.Lasers[currentLaser];

                    laser.x = this.laserSpawn.x;
                    laser.y = this.laserSpawn.y;

                    //managers.Game.laserManager.CurrentLaser++;
                    // DON'T DO THIS IN HERE. DO IT IN THE MANAGER
                    //if(managers.Game.laserManager.CurrentLaser > 49) {
                    //managers.Game.laserManager.CurrentLaser = 0;
                    //}

                    this.shootingSFX = createjs.Sound.play("enemyShot");
                    this.shootingSFX.volume = 0.5;
                }
            }
        }


        public Reset(): void {

            this.isDead = true;
            this.x = -1000;
            this.y = -1000;


        }


        public Move(): void {

            if (this.isDead === false) {
                this.y += 6;


                if (this.boundryTouched === false) {
                    this.x -= 4;
                }

                else if (this.boundryTouched === true) {
                    this.x += 4;
                }

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


        public CheckBounds(): void {
            // Check the bottom boundary
            if (this.y >= 600 + this.height) {
                //this.y = -50; default 

                this.isDead = true;
            }


            //Check walls and set movement pattern
            if (this.x >= 500 + this.width) {

                this.x = this.x - 50;
                this.boundryTouched = false;
            }

            if (this.x <= 0 + this.width) {

                this.x = this.x + 50;
                this.boundryTouched = true;
            }
        }

        //sets the enemy as counted for in game counters
        public setAsCounted(): void {

            this.alreadyCounted = true;
        }


    }
}