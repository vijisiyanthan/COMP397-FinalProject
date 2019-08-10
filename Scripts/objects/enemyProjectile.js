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
    var EnemyProjectile = /** @class */ (function (_super) {
        __extends(EnemyProjectile, _super);
        // Constructor
        function EnemyProjectile() {
            var _this = _super.call(this, "plasma") || this;
            // Variables
            _this.speed = -10;
            _this.Start();
            return _this;
        }
        // Methods
        EnemyProjectile.prototype.Start = function () {
            // Might have to change the scale of the laser
            // Set the speed of my laser
            this.speedY = this.speed;
            this.Reset();
        };
        EnemyProjectile.prototype.Update = function () {
            this.Move();
        };
        EnemyProjectile.prototype.Reset = function () {
            this.x = -5000;
            this.y = -5000;
        };
        EnemyProjectile.prototype.Main = function () { };
        EnemyProjectile.prototype.Move = function () {
            this.y -= this.speedY;
        };
        EnemyProjectile.prototype.CheckBounds = function () { };
        return EnemyProjectile;
    }(objects.GameObject));
    objects.EnemyProjectile = EnemyProjectile;
})(objects || (objects = {}));
//# sourceMappingURL=enemyProjectile.js.map