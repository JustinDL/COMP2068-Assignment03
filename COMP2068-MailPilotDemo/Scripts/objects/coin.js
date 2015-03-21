var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    var Coin = (function (_super) {
        __extends(Coin, _super);
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++++++
        function Coin() {
            _super.call(this, "coin");
            this.name = "coin";
            this._dx = 5;
            this.soundString = "yay";
            this._reset();
        }
        // PRIVATE METHODS ++++++++++++++++++++++++++++++++++++++++
        Coin.prototype._reset = function () {
            // set the island to start at a random x value
            this.x = 640;
            this.y = Math.floor(Math.random() * constants.SCREEN_HEIGHT);
        };
        Coin.prototype._checkBounds = function () {
            if (this.x < -50) {
                this._reset();
            }
        };
        // PUBLIC METHODS ++++++++++++++++++++++++++++++++++++++++++
        Coin.prototype.update = function () {
            this.x -= this._dx;
            this._checkBounds();
        };
        return Coin;
    })(objects.GameObject);
    objects.Coin = Coin;
})(objects || (objects = {}));
//# sourceMappingURL=coin.js.map