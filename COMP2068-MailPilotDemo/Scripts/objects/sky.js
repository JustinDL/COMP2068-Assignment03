var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    var Sky = (function (_super) {
        __extends(Sky, _super);
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++++++
        function Sky() {
            _super.call(this, assetLoader.getResult("sky"));
            // PRIVATE VARIABLE
            this._dx = 5;
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this._reset();
        }
        // PRIVATE METHODS ++++++++++++++++++++++++++++++++++++++++
        Sky.prototype._reset = function () {
            // set the island to start at a random x value
            this.y = 0;
            this.x = 0;
        };
        Sky.prototype._checkBounds = function () {
            if (this.x <= -640) {
                this._reset();
            }
        };
        // PUBLIC METHODS ++++++++++++++++++++++++++++++++++++++++++
        Sky.prototype.update = function () {
            this.x -= this._dx;
            this._checkBounds();
        };
        return Sky;
    })(createjs.Bitmap);
    objects.Sky = Sky;
})(objects || (objects = {}));
//# sourceMappingURL=sky.js.map