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
    var Bullet = /** @class */ (function (_super) {
        __extends(Bullet, _super);
        // Variables
        //public isDead: boolean; remove later
        //public pos: number;
        // Constructor
        function Bullet(assetManager) {
            var _this = _super.call(this, assetManager, "bullet") || this;
            // this.isDead = false;
            _this.Start();
            return _this;
        }
        // Methods
        Bullet.prototype.Start = function () {
            //  this.y = 800;
            // this.x = 300;
        };
        Bullet.prototype.Update = function () {
            // this.Move();
            // this.CheckBounds();
        };
        Bullet.prototype.Reset = function () { };
        Bullet.prototype.Move = function () {
            //   while(this.y != 1000){
            //  this.y += 3;
            // }
        };
        Bullet.prototype.CheckBounds = function () {
            // Right boundary
            if (this.x >= 600 - this.halfW) {
                this.x = 600 - this.halfW;
            }
            // Left boundary
            if (this.x <= this.halfW) {
                this.x = this.halfW;
            }
            // up boundary
            if (this.y >= 1000 - this.halfW) {
                this.y = 1000 - this.halfW;
            }
            // down boundary
            if (this.y <= this.halfW) {
                this.y = this.halfW;
            }
        };
        return Bullet;
    }(objects.GameObject));
    objects.Bullet = Bullet;
})(objects || (objects = {}));
//# sourceMappingURL=Bullet.js.map