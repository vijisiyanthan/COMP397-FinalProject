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
    //The level 2 scene
    var AsteroidScene = /** @class */ (function (_super) {
        __extends(AsteroidScene, _super);
        // Constructor
        function AsteroidScene(assetManager) {
            var _this = _super.call(this, assetManager) || this;
            _this.Start();
            return _this;
        }
        // Methods
        AsteroidScene.prototype.Start = function () {
            // Initialize your variables
            this.background = new objects.Background(this.assetManager, "lv2background");
            this.player = new objects.Player();
            //Player Lasers
            this.laserManager = new managers.Projectile("singleshot");
            this.laserManager.setLoadqueue(this.assetManager);
            //Enemy Lasers
            this.enemyLaserManager = new managers.EnemyProjectile();
            this.enemyLaserManager.setLoadqueue(this.assetManager);
            //Setting projectile managers
            managers.Game.projectileManager = this.laserManager;
            managers.Game.EnemyProjectileManager = this.enemyLaserManager;
            //array of enemies
            this.enemies = new Array();
            this.enemyNum = 3; // Number of enemies I want
            for (var i = 0; i < this.enemyNum; i++) {
                this.enemies[i] = new objects.Enemy();
            }
            //array of asteroids #1
            this.asteroids = new Array();
            this.asteroidNum = 5; // Number of asteroids I want
            for (var i = 0; i < this.asteroidNum; i++) {
                this.asteroids[i] = new objects.Asteroid();
            }
            //& #2
            this.asteroids2 = new Array();
            this.asteroidNum2 = 5; // Number of asteroids I want
            for (var i = 0; i < this.asteroidNum2; i++) {
                this.asteroids2[i] = new objects.Asteroid();
            }
            //& #3
            this.asteroids3 = new Array();
            this.asteroidNum3 = 3; // Number of asteroids I want
            for (var i = 0; i < this.asteroidNum3; i++) {
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
        };
        AsteroidScene.prototype.Update = function () {
            var _this = this;
            //pauses game if p is pressed
            if (managers.Game.keyboardManager.pause != true) {
                this.background.Update();
                this.player.Update();
                this.laserManager.Update();
                this.enemyLaserManager.Update();
                //updating enemies
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
                            _this.enemies[i] = new objects.Enemy();
                        }
                        _this.enemies.forEach(function (enemy) {
                            _this.addChild(enemy);
                        });
                        _this.enemyCounter = 0;
                    }
                }); //end of updating enemies
                //updating asteroids #1
                this.asteroids.forEach(function (asteroid) {
                    if (!asteroid.isDead) {
                        asteroid.Update();
                        //Check collisions between player and enemy
                        managers.Collision.CheckAABB(_this.player, asteroid);
                    }
                    else if (asteroid.isDead && asteroid.alreadyCounted === false) {
                        _this.asteroidCounter++;
                        asteroid.setAsCounted();
                    }
                    // repopulating asteroids if they are all deceased
                    if (_this.asteroidCounter === 5) {
                        _this.asteroids = new Array();
                        _this.asteroidNum = 5; // Number of asteroids I want
                        for (var i = 0; i < _this.asteroidNum; i++) {
                            _this.asteroids[i] = new objects.Asteroid();
                        }
                        _this.asteroids.forEach(function (asteroid) {
                            _this.addChild(asteroid);
                        });
                        _this.asteroidCounter = 0;
                    }
                }); //end of updating asteroids #1
                //updating asteroids #2
                this.asteroids2.forEach(function (asteroid) {
                    if (!asteroid.isDead) {
                        asteroid.Update();
                        //Check collisions between player and enemy
                        managers.Collision.CheckAABB(_this.player, asteroid);
                    }
                    else if (asteroid.isDead && asteroid.alreadyCounted === false) {
                        _this.asteroidCounter2++;
                        asteroid.setAsCounted();
                    }
                    // repopulating asteroids if they are all deceased
                    if (_this.asteroidCounter2 === 5) {
                        _this.asteroids2 = new Array();
                        _this.asteroidNum2 = 5; // Number of asteroids I want
                        for (var i = 0; i < _this.asteroidNum2; i++) {
                            _this.asteroids2[i] = new objects.Asteroid();
                        }
                        _this.asteroids2.forEach(function (asteroid) {
                            _this.addChild(asteroid);
                        });
                        _this.asteroidCounter2 = 0;
                    }
                }); //end of updating asteroids #2
                //updating asteroids #2
                this.asteroids3.forEach(function (asteroid) {
                    if (!asteroid.isDead) {
                        asteroid.Update();
                        //Check collisions between player and enemy
                        managers.Collision.CheckAABB(_this.player, asteroid);
                    }
                    else if (asteroid.isDead && asteroid.alreadyCounted === false) {
                        _this.asteroidCounter3++;
                        asteroid.setAsCounted();
                    }
                    // repopulating asteroids if they are all deceased
                    if (_this.asteroidCounter3 === 3) {
                        _this.asteroids3 = new Array();
                        _this.asteroidNum3 = 3; // Number of asteroids I want
                        for (var i = 0; i < _this.asteroidNum3; i++) {
                            _this.asteroids3[i] = new objects.Asteroid();
                        }
                        _this.asteroids3.forEach(function (asteroid) {
                            _this.addChild(asteroid);
                        });
                        _this.asteroidCounter3 = 0;
                    }
                }); //end of updating asteroids #2
                //Checking player Projectile Collision with enemy
                this.laserManager.Lasers.forEach(function (laser) {
                    _this.enemies.forEach(function (enemy) {
                        managers.Collision.CheckAABB(laser, enemy);
                    });
                });
                //Checking player Projectile Collision with asteroids 1 2 & 3
                this.laserManager.Lasers.forEach(function (laser) {
                    _this.asteroids.forEach(function (asteroid) {
                        managers.Collision.CheckAABB(laser, asteroid);
                    });
                });
                this.laserManager.Lasers.forEach(function (laser) {
                    _this.asteroids2.forEach(function (asteroid) {
                        managers.Collision.CheckAABB(laser, asteroid);
                    });
                });
                this.laserManager.Lasers.forEach(function (laser) {
                    _this.asteroids3.forEach(function (asteroid) {
                        managers.Collision.CheckAABB(laser, asteroid);
                    });
                });
                //Checking enemy Projectile Collision with the player
                this.enemyLaserManager.Lasers.forEach(function (laser) {
                    managers.Collision.CheckAABB(laser, _this.player);
                });
                //If score limit met move to lv2 intermission screen
                if (managers.Game.scoreBoard.Score > 8000) {
                    managers.Game.currentScene = config.Scene.LEVEL_INTERMISSION_TWO;
                }
            }
        };
        // Button event handlers
        AsteroidScene.prototype.Main = function () {
            var _this = this;
            this.addChild(this.background);
            this.addChild(this.player);
            this.enemies.forEach(function (enemy) {
                _this.addChild(enemy);
            });
            this.asteroids.forEach(function (asteroid) {
                _this.addChild(asteroid);
            });
            this.asteroids2.forEach(function (asteroid) {
                _this.addChild(asteroid);
            });
            this.asteroids3.forEach(function (asteroid) {
                _this.addChild(asteroid);
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
        return AsteroidScene;
    }(objects.Scene));
    scenes.AsteroidScene = AsteroidScene;
})(scenes || (scenes = {}));
//# sourceMappingURL=asteroid.js.map