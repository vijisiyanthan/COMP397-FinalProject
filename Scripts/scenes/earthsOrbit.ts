module scenes {
    export class EarthsOrbitScene extends objects.Scene {
        // Variables
        private background: objects.Background;
        private player: objects.Player;
        private enemies: objects.EliteEnemy[];
        private enemyNum: number;
        private enemies2: objects.EliteEnemy[];
        private enemyNum2: number;
        private scoreBoard: managers.ScoreBoard;
        private laserManager: managers.Projectile;
        private enemyLaserManager: managers.EnemyProjectile;
        private backgroundMusic: createjs.AbstractSoundInstance;
        private enemyCounter: number;
        private enemyCounter2: number;
        private powerUpShot: objects.Powerup;

        // Constructor
        constructor(assetManager: createjs.LoadQueue) {
            super(assetManager);

            this.Start();
        }
        // Methods
        public Start(): void {
            // Initialize your variables
            this.background = new objects.Background(this.assetManager, "lv3background");
            this.player = new objects.Player();

            this.powerUpShot = new objects.Powerup();
            managers.Game.playerPoweredUp = false;


            //Player Lasers
            this.laserManager = new managers.Projectile("singleshot");
            this.laserManager.setLoadqueue(this.assetManager);

            //Enemy Lasers
            this.enemyLaserManager = new managers.EnemyProjectile();
            this.enemyLaserManager.setLoadqueue(this.assetManager);

            //Setting projectile managers
            managers.Game.projectileManager = this.laserManager;
            managers.Game.EnemyProjectileManager = this.enemyLaserManager;

            this.enemies = new Array<objects.EliteEnemy>();
            this.enemyNum = 3; // Number of enemies I want
            for (let i = 0; i < this.enemyNum; i++) {
                this.enemies[i] = new objects.EliteEnemy();
            }


            this.enemies2 = new Array<objects.EliteEnemy>();
            this.enemyNum2 = 3; // Number of enemies I want
            for (let i = 0; i < this.enemyNum2; i++) {
                this.enemies2[i] = new objects.EliteEnemy();
            }

            this.scoreBoard = new managers.ScoreBoard;
            managers.Game.scoreBoard = this.scoreBoard;
            this.scoreBoard.Objective = "Score 5000 Points";
            this.scoreBoard.Pause = "";



            /*
            this.backgroundMusic = createjs.Sound.play("play_music");
            this.backgroundMusic.loop = -1; // Loop forever
            this.backgroundMusic.volume = 0.3; */

            //initializing enemy counter
            this.enemyCounter = 0;
            this.enemyCounter2 = 0;


            this.Main();
        }

        public Update(): void {




            //pauses game if p is pressed
            if (managers.Game.keyboardManager.pause != true) {

                this.background.Update();
                this.player.Update();
                this.laserManager.Update();
                this.enemyLaserManager.Update();
                this.powerUpShot.Update();


                //move power up if at half necessary points
                // if (managers.Game.scoreBoard.Score >= 1500){


                // }



                //Updating enemies array 1
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
                        this.enemies = new Array<objects.EliteEnemy>();
                        this.enemyNum = 3; // Number of enemies I want
                        for (let i = 0; i < this.enemyNum; i++) {
                            this.enemies[i] = new objects.EliteEnemy();
                        }


                        this.enemies.forEach(enemy => {
                            this.addChild(enemy);
                        });

                        this.enemyCounter = 0;

                    }
                });




                //updating enemies array 2
                this.enemies2.forEach(enemy => {
                    if (!enemy.isDead) {
                        enemy.Update();


                        // Check collisions between player and enemy
                        managers.Collision.CheckAABB(this.player, enemy);

                    }




                    else if (enemy.isDead && enemy.alreadyCounted === false) {
                        this.enemyCounter2++;
                        enemy.setAsCounted();
                    }




                    // repopulating enemies if they are all deceased
                    if (this.enemyCounter2 === 3) {
                        this.enemies2 = new Array<objects.EliteEnemy>();
                        this.enemyNum2 = 3; // Number of enemies I want
                        for (let i = 0; i < this.enemyNum2; i++) {
                            this.enemies2[i] = new objects.EliteEnemy();
                        }


                        this.enemies2.forEach(enemy => {
                            this.addChild(enemy);
                        });

                        this.enemyCounter2 = 0;

                    }
                });


                //Checking player Projectile Collision for enemy array 1
                this.laserManager.Lasers.forEach(laser => {
                    this.enemies.forEach(enemy => {
                        managers.Collision.CheckAABB(laser, enemy);
                    });
                });

                //Checking player Projectile Collision for enemy array 2
                this.laserManager.Lasers.forEach(laser => {
                    this.enemies2.forEach(enemy => {
                        managers.Collision.CheckAABB(laser, enemy);
                    });
                });


                //Checking enemy Projectile Collision with the player

                this.enemyLaserManager.Lasers.forEach(laser => {

                    managers.Collision.CheckAABB(laser, this.player);

                });


                //Checking enemy Powerup Collision with the player

                managers.Collision.CheckAABB(this.powerUpShot, this.player);

                if (managers.Game.playerPoweredUp === true) {
                    this.player.PoweringUp();
                }


                //Changing Laser and powering up player

                if (this.player.poweringUp) {



                    this.player.PoweredUp();


                    this.laserManager = new managers.Projectile("QuadBlast");
                    this.laserManager.setLoadqueue(this.assetManager);

                    this.laserManager.Lasers.forEach(laser => {
                        this.addChild(laser);
                    });


                }









                // Old spawn method
                /* if (this.scoreBoard.Score % 300 == 0 && this.scoreBoard.Score != 0) {
                     this.enemies = new Array<objects.Enemy>();
                     this.enemyNum = 6; // Number of enemies I want
                     for (let i = 0; i < this.enemyNum; i++) {
                         this.enemies[i] = new objects.Enemy();
                     }
     
     
                     this.enemies.forEach(enemy => {
                         this.addChild(enemy);
                     }); 
                 } */



                //If score limit met move to end screen
                if (managers.Game.scoreBoard.Score >= 5000 && this.player.isDead != true) {

                    createjs.Sound.stop();
                    managers.Game.currentScene = config.Scene.END;

                }

            } //end of pause if






        }




        // Button event handlers
        public Main(): void {


            this.addChild(this.powerUpShot);
            this.addChild(this.background);
            this.addChild(this.player);

            // this.addChild(this.enemy);

            this.enemies.forEach(enemy => {
                this.addChild(enemy);
            });


            this.enemies2.forEach(enemy => {
                this.addChild(enemy);
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