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
var objects;
(function (objects) {
    var Player = /** @class */ (function (_super) {
        __extends(Player, _super);
        // Constructor
        function Player(assetManager) {
            var _this = _super.call(this, assetManager, "player") || this;
            _this.isDead = false;
            _this.Start();
            return _this;
        }
        // Methods
        Player.prototype.Start = function () {
            this.y = 800;
            this.x = 300;
        };
        Player.prototype.Update = function () {
            this.Move();
            this.CheckBounds();
        };
        Player.prototype.Reset = function () { };
        Player.prototype.Move = function () {
            // We need a reference to the stage in order to get mouse position
            // this.x = objects.Game.stage.mouseX;
            // Keyboard controls
            if (objects.Game.keyboardManager.moveLeft) {
                this.x -= 5;
            }
            if (objects.Game.keyboardManager.moveRight) {
                this.x += 5;
            }
            if (objects.Game.keyboardManager.moveUp) {
                this.y -= 5;
            }
            if (objects.Game.keyboardManager.moveDown) {
                this.y += 5;
            }
            if (objects.Game.keyboardManager.shoot) {
            }
        };
        Player.prototype.CheckBounds = function () {
            // Right boundary
            if (this.x >= 600 - this.halfW) {
                this.x = 600 - this.halfW;
            }
            // Left boundary
            if (this.x <= this.halfW) {
                this.x = this.halfW;
            }
        };
        return Player;
    }(objects.GameObject));
    objects.Player = Player;
})(objects || (objects = {}));
//# sourceMappingURL=player.js.map