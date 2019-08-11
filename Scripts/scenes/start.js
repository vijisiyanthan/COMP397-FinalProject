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
    var StartScene = /** @class */ (function (_super) {
        __extends(StartScene, _super);
        // Constructor
        function StartScene(assetManager) {
            var _this = _super.call(this, assetManager) || this;
            _this.Start();
            return _this;
        }
        // Methods
        StartScene.prototype.Start = function () {
            // this.welcomeLabel = new objects.Label("Welcome!", "60px", "Consolas", "#000000", 320, 240, true);
            this.background = new objects.Background(this.assetManager, "background");
            this.startLogo = new objects.Button(this.assetManager, "startLogo", 100, 100);
            this.startButton = new objects.Button(this.assetManager, "startButton", 200, 300);
            this.Main();
        };
        StartScene.prototype.Update = function () {
            this.background.Update();
        };
        StartScene.prototype.startButtonClick = function () {
            managers.Game.stageCheckpoint = 1;
            managers.Game.currentScene = config.Scene.GAME;
        };
        StartScene.prototype.Main = function () {
            this.addChild(this.background);
            this.addChild(this.welcomeLabel);
            this.addChild(this.startLogo);
            this.addChild(this.startButton);
            this.startButton.on("click", this.startButtonClick);
        };
        return StartScene;
    }(objects.Scene));
    scenes.StartScene = StartScene;
})(scenes || (scenes = {}));
//# sourceMappingURL=start.js.map