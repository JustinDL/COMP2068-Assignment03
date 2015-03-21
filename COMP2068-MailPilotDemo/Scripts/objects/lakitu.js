var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    var Lakitu = (function (_super) {
        __extends(Lakitu, _super);
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++++
        function Lakitu() {
            _super.call(this, assetLoader.getResult("lakitu"));
            this.name = "lakitu";
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;
            this.x = 70;
            createjs.Sound.play("music", { loop: -1 });
        }
        // PUBLIC METHODS ++++++++++++++++++++++++++++++++++++++++++
        Lakitu.prototype.update = function () {
            this.x = stage.mouseX;
        };
        return Lakitu;
    })(createjs.Bitmap);
    objects.Lakitu = Lakitu;
})(objects || (objects = {}));
//# sourceMappingURL=lakitu.js.map