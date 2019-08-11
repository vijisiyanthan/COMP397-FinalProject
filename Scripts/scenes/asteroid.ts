module scenes {

    //The level 2 scene
    export class AsteroidScene extends objects.Scene {
        // Variables
        private background: objects.Background;
        private player: objects.Player;
        private enemies: objects.Enemy[];
        private asteroids: objects.Asteroid[];
        private asteroids2: objects.Asteroid[];
        private asteroids3: objects.Asteroid[];
        private enemyNum: number;
        private asteroidNum: number;
        private asteroidNum2: number;
        private asteroidNum3: number;
        private scoreBoard: managers.ScoreBoard;
        private bullet: objects.Projectile;
        private laserManager: managers.Projectile;
        private enemyLaserManager: managers.EnemyProjectile;
        private backgroundMusic: createjs.AbstractSoundInstance;
        private enemyCounter: number;
        private asteroidCounter: number;
        private asteroidCounter2: number;
        private asteroidCounter3: number;

        // Constructor
        constructor(assetManager: createjs.LoadQueue) {
            super(assetManager);

            this.Start();
        }
        // Methods
        public Start(): void {
            // Initialize your variables
            this.background = new objects.Background(this.assetManager, "lv2background");
            this.bullet = new objects.Projectile();
            this.player = new objects.Player();

            //Player Lasers
            this.laserManager = new managers.Projectile();
            this.laserManager.setLoadqueue(this.assetManager);

            //Enemy Lasers
            this.enemyLaserManager = new managers.EnemyProjectile();
            this.enemyLaserManager.setLoadqueue(this.assetManager);

            //Setting projectile managers
            managers.Game.projectileManager = this.laserManager;
            managers.Game.EnemyProjectileManager = this.enemyLaserManager;

            //array of enemies
            this.enemies = new Array<objects.Enemy>();
            this.enemyNum = 3; // Number of enemies I want
            for (let i = 0; i < this.enemyNum; i++) {
                this.enemies[i] = new objects.Enemy();
            }

            //array of asteroids #1
            this.asteroids = new Array<objects.Asteroid>();
            this.asteroidNum = 5; // Number of asteroids I want
            for (let i = 0; i < this.asteroidNum; i++) {
                this.asteroids[i] = new objects.Asteroid();
            }

            //& #2
            this.asteroids2 = new Array<objects.Asteroid>();
            this.asteroidNum2 = 5; // Number of asteroids I want
            for (let i = 0; i < this.asteroidNum2; i++) {
                this.asteroids2[i] = new objects.Asteroid();
            }


            //& #3
            this.asteroids3 = new Array<objects.Asteroid>();
            this.asteroidNum3 = 3; // Number of asteroids I want
            for (let i = 0; i < this.asteroidNum3; i++) {
                this.asteroids3[i] = new objects.Asteroid();
            }

            this.scoreBoard = new managers.ScoreBoard;
            managers.Game.scoreBoard = this.scoreBoard;
            this.scoreBoard.Objective = "Score 8000 Points";
            this.scoreBoard.Pause = "";


            //Creating initial enemy counter count
            this.asteroidCounter = 0;
            this.asteroidCounter2 = 0;
            this.asteroidCounter3 = 0;
            this.enemyCounter = 0;



            this.Main();
        }

        public Update(): void {
           
            //pauses game if p is pressed
            if (managers.Game.keyboardManager.pause != true) {
           
            this.background.Update();
            this.player.Update();
            this.laserManager.Update();
            this.enemyLaserManager.Update();
           

          


            //updating enemies
            this.enemies.forEach(enemy => {
                if (!enemy.isDead) {
                    enemy.Update();


                    // Check collisions between player and enemy
                    managers.Collision.CheckAABB(this.player, enemy);

                }

                else if (enemy.isDead && enemy.alreadyCounted === false) {
                    this.enemyCounter++;
                    enemy.setAsCounted();
                }




                // repopulating enemies if they are all deceased
                if (this.enemyCounter === 3) {
                    this.enemies = new Array<objects.Enemy>();
                    this.enemyNum = 3; // Number of enemies I want
                    for (let i = 0; i < this.enemyNum; i++) {
                        this.enemies[i] = new objects.Enemy();
                    }


                    this.enemies.forEach(enemy => {
                        this.addChild(enemy);
                    });

                 this.enemyCounter = 0;
                }


            }); //end of updating enemies


            //updating asteroids #1
            this.asteroids.forEach(asteroid => {
                if (!asteroid.isDead) {
                    asteroid.Update();


                //Check collisions between player and enemy
                   managers.Collision.CheckAABB(this.player, asteroid);

                }

                else if (asteroid.isDead && asteroid.alreadyCounted === false) {
                    this.asteroidCounter++;
                    asteroid.setAsCounted();
                }



                // repopulating asteroids if they are all deceased
                if (this.asteroidCounter === 5) {
                    this.asteroids = new Array<objects.Asteroid>();
                    this.asteroidNum = 5; // Number of asteroids I want
                    for (let i = 0; i < this.asteroidNum; i++) {
                        this.asteroids[i] = new objects.Asteroid();
                    }


                    this.asteroids.forEach(asteroid => {
                        this.addChild(asteroid);
                    });

                    this.asteroidCounter = 0;
                   
                }


            }); //end of updating asteroids #1





            //updating asteroids #2
            this.asteroids2.forEach(asteroid => {
                if (!asteroid.isDead) {
                    asteroid.Update();


                    //Check collisions between player and enemy
                    managers.Collision.CheckAABB(this.player, asteroid);

                }

                else if (asteroid.isDead && asteroid.alreadyCounted === false) {
                    this.asteroidCounter2++;
                    asteroid.setAsCounted();
                }



                // repopulating asteroids if they are all deceased
                if (this.asteroidCounter2 === 5) {
                    this.asteroids2 = new Array<objects.Asteroid>();
                    this.asteroidNum2 = 5; // Number of asteroids I want
                    for (let i = 0; i < this.asteroidNum2; i++) {
                        this.asteroids2[i] = new objects.Asteroid();
                    }


                    this.asteroids2.forEach(asteroid => {
                        this.addChild(asteroid);
                    });

                    this.asteroidCounter2 = 0;

                }


            }); //end of updating asteroids #2




            //updating asteroids #2
            this.asteroids3.forEach(asteroid => {
                if (!asteroid.isDead) {
                    asteroid.Update();


                    //Check collisions between player and enemy
                    managers.Collision.CheckAABB(this.player, asteroid);

                }

                else if (asteroid.isDead && asteroid.alreadyCounted === false) {
                    this.asteroidCounter3++;
                    asteroid.setAsCounted();
                }



                // repopulating asteroids if they are all deceased
                if (this.asteroidCounter3 === 3) {
                    this.asteroids3 = new Array<objects.Asteroid>();
                    this.asteroidNum3 = 3; // Number of asteroids I want
                    for (let i = 0; i < this.asteroidNum3; i++) {
                        this.asteroids3[i] = new objects.Asteroid();
                    }


                    this.asteroids3.forEach(asteroid => {
                        this.addChild(asteroid);
                    });

                    this.asteroidCounter3 = 0;

                }


            }); //end of updating asteroids #2


            //Checking player Projectile Collision with enemy
            this.laserManager.Lasers.forEach(laser => {
                this.enemies.forEach(enemy => {
                    managers.Collision.CheckAABB(laser, enemy);
                });
            });


            //Checking player Projectile Collision with asteroids 1 2 & 3
            this.laserManager.Lasers.forEach(laser => {
                this.asteroids.forEach(asteroid => {
                    managers.Collision.CheckAABB(laser, asteroid);
                });
            });

            this.laserManager.Lasers.forEach(laser => {
                this.asteroids2.forEach(asteroid => {
                    managers.Collision.CheckAABB(laser, asteroid);
                });
            });


            this.laserManager.Lasers.forEach(laser => {
                this.asteroids3.forEach(asteroid => {
                    managers.Collision.CheckAABB(laser, asteroid);
                });
            });


            //Checking enemy Projectile Collision with the player

            this.enemyLaserManager.Lasers.forEach(laser => {

                managers.Collision.CheckAABB(laser, this.player);

            });


           

            //If score limit met move to lv2 intermission screen
            if (managers.Game.scoreBoard.Score > 8000) {

               



                
                managers.Game.currentScene = config.Scene.LEVEL_INTERMISSION_TWO;

            }

        }




        }




        // Button event handlers
        public Main(): void {
            this.addChild(this.background);
            this.addChild(this.player);

           

            this.enemies.forEach(enemy => {
                this.addChild(enemy);
            });

            this.asteroids.forEach(asteroid => {
                this.addChild(asteroid);
            });

            this.asteroids2.forEach(asteroid => {
                this.addChild(asteroid);
            });


            this.asteroids3.forEach(asteroid => {
                this.addChild(asteroid);
            });

            this.laserManager.Lasers.forEach(laser => {
                this.addChild(laser);
            });


            this.enemyLaserManager.Lasers.forEach(laser => {
                this.addChild(laser);
            });


            this.addChild(this.scoreBoard.scoreLabel);
            this.addChild(this.scoreBoard.highScoreLabel);
            this.addChild(this.scoreBoard.objectiveLabel);
            this.addChild(this.scoreBoard.pauseLabel);
        }
    }
}