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
    var Intermission_One_Scene = /** @class */ (function (_super) {
        __extends(Intermission_One_Scene, _super);
        // Constructor
        function Intermission_One_Scene(assetManager) {
            var _this = _super.call(this, assetManager) || this;
            _this.Start();
            return _this;
        }
        // Methods
        Intermission_One_Scene.prototype.Start = function () {
            this.backgroundMusic = createjs.Sound.play("lv2_Music");
            this.backgroundMusic.loop = -1; // Loop forever
            this.backgroundMusic.volume = 0.3;
            this.intermissionLabel = new objects.Label("Mission Complete!", "40px", "Consolas", "#008B8B", 320, 240, true);
            this.background = new objects.Background(this.assetManager);
            this.level2Button = new objects.Button(this.assetManager, "int_One_Button", 100, 300);
            this.Main();
        };
        Intermission_One_Scene.prototype.Update = function () {
            this.background.Update();
        };
        Intermission_One_Scene.prototype.startButtonClick = function () {
            managers.Game.currentScene = config.Scene.GAME;
        };
        Intermission_One_Scene.prototype.Main = function () {
            this.addChild(this.background);
            this.addChild(this.intermissionLabel);
            this.addChild(this.level2Button);
            this.level2Button.on("click", this.startButtonClick);
        };
        return Intermission_One_Scene;
    }(objects.Scene));
    scenes.Intermission_One_Scene = Intermission_One_Scene;
})(scenes || (scenes = {}));
//# sourceMappingURL=intermissionOne.js.map