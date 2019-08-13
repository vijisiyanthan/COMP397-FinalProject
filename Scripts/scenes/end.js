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
    var End_Scene = /** @class */ (function (_super) {
        __extends(End_Scene, _super);
        // Constructor
        function End_Scene(assetManager) {
            var _this = _super.call(this, assetManager) || this;
            _this.Start();
            return _this;
        }
        // Methods
        End_Scene.prototype.Start = function () {
            this.backgroundMusic = createjs.Sound.play("victoryMusic");
            this.backgroundMusic.loop = -1; // Loop forever
            this.backgroundMusic.volume = 0.3;
            this.intermissionLabel = new objects.Label("Earth Reached!", "40px", "Consolas", "#008B8B", 320, 240, true);
            this.background = new objects.Background(this.assetManager, "background");
            this.EndButton = new objects.Button(this.assetManager, "playAgainButton", 200, 300);
            this.Main();
        };
        End_Scene.prototype.Update = function () {
            this.background.Update();
        };
        End_Scene.prototype.startButtonClick = function () {
            createjs.Sound.stop();
            managers.Game.stageCheckpoint = 1;
            managers.Game.currentScene = config.Scene.START;
        };
        End_Scene.prototype.Main = function () {
            this.addChild(this.background);
            this.addChild(this.intermissionLabel);
            this.addChild(this.EndButton);
            this.EndButton.on("click", this.startButtonClick);
        };
        return End_Scene;
    }(objects.Scene));
    scenes.End_Scene = End_Scene;
})(scenes || (scenes = {}));
//# sourceMappingURL=end.js.map