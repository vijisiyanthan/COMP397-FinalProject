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
    var PlayScene = /** @class */ (function (_super) {
        __extends(PlayScene, _super);
        // Constructor
        function PlayScene(assetManager) {
            var _this = _super.call(this, assetManager) || this;
            _this.Start();
            return _this;
        }
        // Methods
        PlayScene.prototype.Start = function () {
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
            this.enemies = new Array();
            this.enemyNum = 6; // Number of enemies I want
            for (var i = 0; i < this.enemyNum; i++) {
                this.enemies[i] = new objects.Enemy();
            }
            this.scoreBoard = new managers.ScoreBoard;
            managers.Game.scoreBoard = this.scoreBoard;
            this.backgroundMusic = createjs.Sound.play("play_music");
            this.backgroundMusic.loop = -1; // Loop forever
            this.backgroundMusic.volume = 0.3;
            this.Main();
        };
        PlayScene.prototype.Update = function () {
            var _this = this;
            this.background.Update();
            this.player.Update();
            this.laserManager.Update();
            this.enemyLaserManager.Update();
            //this.bullet.Update();
            // this.enemy.Update();
            var counter;
            this.enemies.forEach(function (enemy) {
                if (!enemy.isDead) {
                    enemy.Update();
                    // Check collisions between player and enemy
                    managers.Collision.CheckAABB(_this.player, enemy);
                }
                else if (enemy.isDead) {
                    counter = counter + 1;
                }
            });
            //Checking player Projectile Collision
            this.laserManager.Lasers.forEach(function (laser) {
                _this.enemies.forEach(function (enemy) {
                    managers.Collision.CheckAABB(laser, enemy);
                });
            });
            //Checking enemy Projectile Collision with the player
            this.enemyLaserManager.Lasers.forEach(function (laser) {
                managers.Collision.CheckAABB(laser, _this.player);
            });
            // let ticker: number = createjs.Ticker.getTicks();
            // Constrain laser fire rate
            if (this.scoreBoard.Score % 300 == 0 && this.scoreBoard.Score != 0) {
                this.enemies = new Array();
                this.enemyNum = 6; // Number of enemies I want
                for (var i = 0; i < this.enemyNum; i++) {
                    this.enemies[i] = new objects.Enemy();
                }
                this.enemies.forEach(function (enemy) {
                    _this.addChild(enemy);
                });
            }
            //If score limit met move to lv1 intermission screen
            if (managers.Game.scoreBoard.Score === 2100) {
                var waitforExplosion = createjs.Ticker.getTicks() + 60;
                createjs.Sound.stop();
                managers.Game.currentScene = config.Scene.LEVEL_INTERMISSION_ONE;
            }
        };
        // Button event handlers
        PlayScene.prototype.Main = function () {
            var _this = this;
            this.addChild(this.background);
            this.addChild(this.player);
            // this.addChild(this.enemy);
            this.enemies.forEach(function (enemy) {
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
        };
        return PlayScene;
    }(objects.Scene));
    scenes.PlayScene = PlayScene;
})(scenes || (scenes = {}));
//# sourceMappingURL=play.js.map