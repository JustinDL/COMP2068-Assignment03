var objects;
(function (objects) {
    // SCOREBOARD CLASS +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    var ScoreBoard = (function () {
        // CONSTRUCTOR +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        function ScoreBoard(game) {
            // PUBLIC INSTANCE VARIALBES ++++++++++++++++++++++++++++++++++++++++++++++++
            this.lives = constants.PLAYER_LIVES;
            this.score = 0;
            this.wave = constants.WAVE;
            this._livesLabel = new createjs.Text("LIVES: ", constants.FONT_SIZE + " " + constants.FONT_FAMILY, constants.FONT_COLOUR);
            game.addChild(this._livesLabel);
            this._scoreLabel = new createjs.Text("COINS: ", constants.FONT_SIZE + " " + constants.FONT_FAMILY, constants.FONT_COLOUR);
            this._scoreLabel.x = 350;
            game.addChild(this._scoreLabel);
            this._waveLabel = new createjs.Text("WAVE: ", constants.FONT_SIZE + " " + constants.FONT_FAMILY, constants.FONT_COLOUR);
            this._waveLabel.y = 40;
            this._waveLabel.x = 350;
            game.addChild(this._waveLabel);
        }
        ScoreBoard.prototype.update = function () {
            this._livesLabel.text = "LIVES: " + this.lives.toString();
            this._scoreLabel.text = "COINS: " + this.score.toString() + "/10";
            this._waveLabel.text = "WAVE: " + this.wave.toString();
        };
        return ScoreBoard;
    })();
    objects.ScoreBoard = ScoreBoard;
})(objects || (objects = {}));
//# sourceMappingURL=scoreboard.js.map