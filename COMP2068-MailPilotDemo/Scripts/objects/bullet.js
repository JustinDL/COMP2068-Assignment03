var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    var Bullet = (function (_super) {
        __extends(Bullet, _super);
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++++++
        function Bullet() {
            _super.call(this, "bullet");
            this.name = "bullet";
            this.soundString = "boom";
            this._reset();
        }
        // PRIVATE METHODS ++++++++++++++++++++++++++++++++++++++++
        Bullet.prototype._reset = function () {
            // set the coin to start at a random x value
            this.x = -this.width;
            this.y = Math.floor(Math.random() * constants.SCREEN_HEIGHT);
            // add drift to the cloud 
            this._dy = Math.floor(Math.random() * 5) + 5;
            this._dx = Math.floor(Math.random() * 4) - 2;
        };
        Bullet.prototype._checkBounds = function () {
            if (this.y > (constants.SCREEN_HEIGHT + this.height)) {
                this._reset();
            }
        };
        // PUBLIC METHODS ++++++++++++++++++++++++++++++++++++++++++
        Bullet.prototype.update = function () {
            this.y += this._dy;
            this.x += this._dx;
            this._checkBounds();
        };
        return Bullet;
    })(objects.GameObject);
    objects.Bullet = Bullet;
})(objects || (objects = {}));
//# sourceMappingURL=bullet.js.map