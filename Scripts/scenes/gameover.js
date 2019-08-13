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
    var GameOverScene = /** @class */ (function (_super) {
        __extends(GameOverScene, _super);
        // Constructors
        function GameOverScene(assetManager) {
            var _this = _super.call(this, assetManager) || this;
            createjs.Sound.stop();
            _this.Start();
            return _this;
        }
        // Methods
        GameOverScene.prototype.Start = function () {
            this.background = new objects.Background(this.assetManager, "background");
            this.gameOverLabel = new objects.Button(this.assetManager, "failedLogo", 150, 200);
            this.backButton = new objects.Button(this.assetManager, "tryAgain", 200, 340);
            this.Main();
        };
        GameOverScene.prototype.Update = function () {
            this.background.Update();
        };
        GameOverScene.prototype.backButtonClick = function () {
            if (managers.Game.stageCheckpoint === 1) {
                managers.Game.currentScene = config.Scene.GAME;
            }
            else if (managers.Game.stageCheckpoint === 2) {
                this.backgroundMusic = createjs.Sound.play("lv2_Music");
                this.backgroundMusic.loop = -1; // Loop forever
                this.backgroundMusic.volume = 0.3;
                managers.Game.currentScene = config.Scene.LEVEL_2;
            }
            else if (managers.Game.stageCheckpoint === 3) {
                this.backgroundMusic = createjs.Sound.play("lv2_Music");
                this.backgroundMusic.loop = -1; // Loop forever
                this.backgroundMusic.volume = 0.3;
                managers.Game.currentScene = config.Scene.LEVEL_3;
            }
        };
        GameOverScene.prototype.Main = function () {
            this.addChild(this.background);
            this.addChild(this.gameOverLabel);
            this.addChild(this.backButton);
            this.backButton.on("click", this.backButtonClick);
        };
        return GameOverScene;
    }(objects.Scene));
    scenes.GameOverScene = GameOverScene;
})(scenes || (scenes = {}));
//# sourceMappingURL=gameover.js.map