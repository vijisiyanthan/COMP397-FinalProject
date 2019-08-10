module scenes {
    export class PlayScene extends objects.Scene {
        // Variables
        private background:objects.Background;
        private player:objects.Player;
        private enemies:objects.Enemy[];
        private enemyNum:number;
        private scoreBoard:managers.ScoreBoard;
        private bullet:objects.Projectile;
        private laserManager: managers.Projectile;
        private enemyLaserManager: managers.EnemyProjectile;
        private backgroundMusic: createjs.AbstractSoundInstance;

        // Constructor
        constructor(assetManager:createjs.LoadQueue) {
            super(assetManager);

            this.Start();
        }
        // Methods
        public Start(): void {
            // Initialize your variables
            this.background = new objects.Background(this.assetManager);
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

            this.enemies = new Array<objects.Enemy>();
            this.enemyNum = 6; // Number of enemies I want
            for (let i = 0; i < this.enemyNum; i++) {
                this.enemies[i] = new objects.Enemy();
            }

            this.scoreBoard = new managers.ScoreBoard;
            managers.Game.scoreBoard = this.scoreBoard;

           
            
            this.backgroundMusic = createjs.Sound.play("play_music");
            this.backgroundMusic.loop = -1; // Loop forever
            this.backgroundMusic.volume = 0.3;
        
        

            this.Main();
        }

        public Update(): void {
            this.background.Update();
            this.player.Update();
            this.laserManager.Update();
            this.enemyLaserManager.Update();
            //this.bullet.Update();
            // this.enemy.Update();

            let counter: number;


            this.enemies.forEach(enemy => {
                if (!enemy.isDead) {
                    enemy.Update();
                    

                    // Check collisions between player and enemy
                    managers.Collision.CheckAABB(this.player, enemy);

                }

                else if (enemy.isDead) {
                    counter = counter + 1;
                }
            });


            //Checking player Projectile Collision
            this.laserManager.Lasers.forEach(laser => {
                this.enemies.forEach(enemy => {
                    managers.Collision.CheckAABB(laser, enemy);
                });
            });


            //Checking enemy Projectile Collision with the player

            this.enemyLaserManager.Lasers.forEach(laser => {
               
                    managers.Collision.CheckAABB(laser, this.player);
                
            });


          
           // let ticker: number = createjs.Ticker.getTicks();

        
            
            // Constrain laser fire rate
            if (this.scoreBoard.Score % 300 == 0 && this.scoreBoard.Score != 0) {
                this.enemies = new Array<objects.Enemy>();
                this.enemyNum = 6; // Number of enemies I want
                for (let i = 0; i < this.enemyNum; i++) {
                    this.enemies[i] = new objects.Enemy();
                }


                this.enemies.forEach(enemy => {
                    this.addChild(enemy);
                }); 
            } 

            
          
                //If score met go to level 1 success screen
                //Or intermission screen
                if(this.scoreBoard.Score === 2100){

                   
                    managers.Game.currentScene = config.Scene.LEVEL_INTERMISSION_ONE;
                }
        }

        // Button event handlers
        public Main(): void {
            this.addChild(this.background);
            this.addChild(this.player);
           
            // this.addChild(this.enemy);

            this.enemies.forEach(enemy => {
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
        }
    }
}