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
    var Intermission_Two_Scene = /** @class */ (function (_super) {
        __extends(Intermission_Two_Scene, _super);
        // Constructor
        function Intermission_Two_Scene(assetManager) {
            var _this = _super.call(this, assetManager) || this;
            _this.Start();
            return _this;
        }
        // Methods
        Intermission_Two_Scene.prototype.Start = function () {
            /* unnecessary as its already looping
            this.backgroundMusic = createjs.Sound.play("lv2_Music");
            this.backgroundMusic.loop = -1; // Loop forever
            this.backgroundMusic.volume = 0.3; */
            this.intermissionLabel = new objects.Label("Astroids Avoided!", "40px", "Consolas", "#008B8B", 320, 240, true);
            this.background = new objects.Background(this.assetManager, "background");
            this.level3Button = new objects.Button(this.assetManager, "int_Two_Button", 100, 300);
            this.Main();
        };
        Intermission_Two_Scene.prototype.Update = function () {
            this.background.Update();
        };
        Intermission_Two_Scene.prototype.startButtonClick = function () {
            //swap out for level 3 stuff
            //managers.Game.stageCheckpoint = 2;
            // managers.Game.currentScene = config.Scene.LEVEL_2;
        };
        Intermission_Two_Scene.prototype.Main = function () {
            this.addChild(this.background);
            this.addChild(this.intermissionLabel);
            this.addChild(this.level3Button);
            this.level3Button.on("click", this.startButtonClick);
        };
        return Intermission_Two_Scene;
    }(objects.Scene));
    scenes.Intermission_Two_Scene = Intermission_Two_Scene;
})(scenes || (scenes = {}));
//# sourceMappingURL=intermissionTwo.js.map