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
        function Player() {
            var _this = _super.call(this, "ChrisWestbrook") || this;
            _this.isDead = false;
            _this.poweringUp = false;
            _this.poweredUp = false;
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
            this.Fire();
        };
        Player.prototype.Fire = function () {
            if (!this.isDead) {
                // I am alive. I can shoot lasers...maybe?
                // Gets number of ticks ticker has issued
                var ticker = createjs.Ticker.getTicks();
                // Constrain laser fire rate
                if ((managers.Game.keyboardManager.shoot) && (ticker % 5 == 0)) {
                    // Position our laser spawner
                    this.laserSpawn = new math.Vec2(this.x, this.y - this.halfH);
                    // IDEAL
                    var laser = managers.Game.projectileManager.GetLaser();
                    //let currentLaser = managers.Game.laserManager.CurrentLaser;
                    //let laser = managers.Game.laserManager.Lasers[currentLaser];
                    laser.x = this.laserSpawn.x;
                    laser.y = this.laserSpawn.y;
                    //managers.Game.laserManager.CurrentLaser++;
                    // DON'T DO THIS IN HERE. DO IT IN THE MANAGER
                    //if(managers.Game.laserManager.CurrentLaser > 49) {
                    //managers.Game.laserManager.CurrentLaser = 0;
                    //}
                    this.shootSFX = createjs.Sound.play("playerShot");
                    this.shootSFX.volume = 0.2;
                }
            }
        };
        Player.prototype.Reset = function () {
            managers.Game.currentScene = config.Scene.OVER;
        };
        Player.prototype.Move = function () {
            // We need a reference to the stage in order to get mouse position
            // this.x = objects.Game.stage.mouseX;
            // Keyboard controls
            if (managers.Game.keyboardManager.moveLeft) {
                this.x -= 5;
            }
            if (managers.Game.keyboardManager.moveRight) {
                this.x += 5;
            }
            if (managers.Game.keyboardManager.moveUp) {
                this.y -= 5;
            }
            if (managers.Game.keyboardManager.moveDown) {
                this.y += 5;
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
            //Top boundry
            if (this.y >= 600 - this.halfH) {
                this.y = 600 - this.halfH;
            }
            //and bottom boundry
            if (this.y < this.halfH) {
                this.y = this.halfH;
            }
        };
        Player.prototype.PoweringUp = function () {
            this.poweringUp = true;
        };
        Player.prototype.PoweredUp = function () {
            this.poweredUp = true;
            this.poweringUp = false;
        };
        return Player;
    }(objects.GameObject));
    objects.Player = Player;
})(objects || (objects = {}));
//# sourceMappingURL=player.js.map