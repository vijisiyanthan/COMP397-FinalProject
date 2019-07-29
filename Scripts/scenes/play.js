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
            this.player = new objects.Player(this.assetManager);
            this.enemies = new Array();
            this.enemyNum = 2; // Number of enemies I want
            for (var i = 0; i < this.enemyNum; i++) {
                this.enemies[i] = new objects.Enemy(this.assetManager);
            }
            this.scoreBoard = new managers.ScoreBoard;
            objects.Game.scoreBoard = this.scoreBoard;
            this.backgroundMusic = createjs.Sound.play("play_music");
            this.backgroundMusic.loop = -1; // Loop forever
            this.backgroundMusic.volume = 0.3;
            //this.bullet = new objects.Bullet(this.assetManager);
            this.Main();
        };
        PlayScene.prototype.Update = function () {
            var _this = this;
            this.background.Update();
            this.player.Update();
            // this.enemy.Update();
            this.enemies.forEach(function (enemy) {
                enemy.Update();
                _this.player.isDead = managers.Collision.Check(_this.player, enemy);
                if (_this.player.isDead) {
                    // Disable Music
                    _this.backgroundMusic.stop();
                    objects.Game.currentScene = config.Scene.OVER;
                }
            });
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
            // this.addChild(this.bullet);
            this.addChild(this.scoreBoard.scoreLabel);
            this.addChild(this.scoreBoard.highScoreLabel);
        };
        return PlayScene;
    }(objects.Scene));
    scenes.PlayScene = PlayScene;
})(scenes || (scenes = {}));
//# sourceMappingURL=play.js.map