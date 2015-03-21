module objects {
    // SCOREBOARD CLASS +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    export class ScoreBoard {
        // PUBLIC INSTANCE VARIALBES ++++++++++++++++++++++++++++++++++++++++++++++++
        public lives: number = constants.PLAYER_LIVES;
        public score: number = 0;
        public wave: number = constants.WAVE;
        private _game: createjs.Container;

        // PRIVCATE ISNTANCE VARIABLES +++++++++++++++++++++++++++++++++++++++++++++++
        _livesLabel: createjs.Text;
        _scoreLabel: createjs.Text;
        _waveLabel: createjs.Text;

        // CONSTRUCTOR +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        constructor(game: createjs.Container) {

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

        update() {

            this._livesLabel.text = "LIVES: " + this.lives.toString();
            this._scoreLabel.text = "COINS: " + this.score.toString() + "/10";
            this._waveLabel.text = "WAVE: " + this.wave.toString();
        }
    }
} 