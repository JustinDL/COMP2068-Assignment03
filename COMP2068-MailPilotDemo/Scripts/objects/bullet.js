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
            // 10 makes it move 2x as fast as coins so they dont get stuck ontop of eachother as much
            this._dx = 10;
            this._reset();
        }
        // PRIVATE METHODS ++++++++++++++++++++++++++++++++++++++++
        Bullet.prototype._reset = function () {
            // sets the starting position of the bullet
            this.x = 640;
            this.y = Math.floor(Math.random() * constants.SCREEN_HEIGHT);
        };
        Bullet.prototype._checkBounds = function () {
            if (this.x < -50) {
                this._reset();
            }
        };
        // PUBLIC METHODS ++++++++++++++++++++++++++++++++++++++++++
        Bullet.prototype.update = function () {
            // makes the bullet move to the left 
            this.x -= this._dx;
            this._checkBounds();
        };
        return Bullet;
    })(objects.GameObject);
    objects.Bullet = Bullet;
})(objects || (objects = {}));
//# sourceMappingURL=bullet.js.map