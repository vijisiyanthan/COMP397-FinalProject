var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var scenes;
(function (scenes) {
    var EarthsOrbitScene = /** @class */ (function (_super) {
        __extends(EarthsOrbitScene, _super);
        // Constructor
        function EarthsOrbitScene(assetManager) {
            var _this = _super.call(this, assetManager) || this;
            _this.Start();
            return _this;
        }
        // Methods
        EarthsOrbitScene.prototype.Start = function () {
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
            this.enemies = new Array();
            this.enemyNum = 3; // Number of enemies I want
            for (var i = 0; i < this.enemyNum; i++) {
                this.enemies[i] = new objects.EliteEnemy();
            }
            this.enemies2 = new Array();
            this.enemyNum2 = 3; // Number of enemies I want
            for (var i = 0; i < this.enemyNum2; i++) {
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
        };
        EarthsOrbitScene.prototype.Update = function () {
            var _this = this;
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
                this.enemies.forEach(function (enemy) {
                    if (!enemy.isDead) {
                        enemy.Update();
                        // Check collisions between player and enemy
                        managers.Collision.CheckAABB(_this.player, enemy);
                    }
                    else if (enemy.isDead && enemy.alreadyCounted === false) {
                        _this.enemyCounter++;
                        enemy.setAsCounted();
                    }
                    // repopulating enemies if they are all deceased
                    if (_this.enemyCounter === 3) {
                        _this.enemies = new Array();
                        _this.enemyNum = 3; // Number of enemies I want
                        for (var i = 0; i < _this.enemyNum; i++) {
                            _this.enemies[i] = new objects.EliteEnemy();
                        }
                        _this.enemies.forEach(function (enemy) {
                            _this.addChild(enemy);
                        });
                        _this.enemyCounter = 0;
                    }
                });
                //updating enemies array 2
                this.enemies2.forEach(function (enemy) {
                    if (!enemy.isDead) {
                        enemy.Update();
                        // Check collisions between player and enemy
                        managers.Collision.CheckAABB(_this.player, enemy);
                    }
                    else if (enemy.isDead && enemy.alreadyCounted === false) {
                        _this.enemyCounter2++;
                        enemy.setAsCounted();
                    }
                    // repopulating enemies if they are all deceased
                    if (_this.enemyCounter2 === 3) {
                        _this.enemies2 = new Array();
                        _this.enemyNum2 = 3; // Number of enemies I want
                        for (var i = 0; i < _this.enemyNum2; i++) {
                            _this.enemies2[i] = new objects.EliteEnemy();
                        }
                        _this.enemies2.forEach(function (enemy) {
                            _this.addChild(enemy);
                        });
                        _this.enemyCounter2 = 0;
                    }
                });
                //Checking player Projectile Collision for enemy array 1
                this.laserManager.Lasers.forEach(function (laser) {
                    _this.enemies.forEach(function (enemy) {
                        managers.Collision.CheckAABB(laser, enemy);
                    });
                });
                //Checking player Projectile Collision for enemy array 2
                this.laserManager.Lasers.forEach(function (laser) {
                    _this.enemies2.forEach(function (enemy) {
                        managers.Collision.CheckAABB(laser, enemy);
                    });
                });
                //Checking enemy Projectile Collision with the player
                this.enemyLaserManager.Lasers.forEach(function (laser) {
                    managers.Collision.CheckAABB(laser, _this.player);
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
                    this.laserManager.Lasers.forEach(function (laser) {
                        _this.addChild(laser);
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
        };
        // Button event handlers
        EarthsOrbitScene.prototype.Main = function () {
            var _this = this;
            this.addChild(this.powerUpShot);
            this.addChild(this.background);
            this.addChild(this.player);
            // this.addChild(this.enemy);
            this.enemies.forEach(function (enemy) {
                _this.addChild(enemy);
            });
            this.enemies2.forEach(function (enemy) {
                _this.addChild(enemy);
            });
            this.laserManager.Lasers.forEach(function (laser) {
                _this.addChild(laser);
            });
            this.enemyLaserManager.Lasers.forEach(function (laser) {
                _this.addChild(laser);
            });
            this.addChild(this.scoreBoard.scoreLabel);
            this.addChild(this.scoreBoard.highScoreLabel);
            this.addChild(this.scoreBoard.objectiveLabel);
            this.addChild(this.scoreBoard.pauseLabel);
        };
        return EarthsOrbitScene;
    }(objects.Scene));
    scenes.EarthsOrbitScene = EarthsOrbitScene;
})(scenes || (scenes = {}));
//# sourceMappingURL=earthsOrbit.js.map