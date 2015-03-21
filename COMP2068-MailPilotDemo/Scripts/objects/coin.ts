module objects {

    export class Coin extends objects.GameObject {

        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++++++
        constructor() {
            super("coin");

            this.name = "coin";

            this._dx = 5;
            this.soundString = "yay";

            this._reset();

        }

        // PRIVATE METHODS ++++++++++++++++++++++++++++++++++++++++
        private _reset() {
            // set the island to start at a random x value
            this.x = 640;
            this.y = Math.floor(Math.random() * constants.SCREEN_HEIGHT);
        }

        private _checkBounds() {
            if (this.x < -50) {
                this._reset();
            }
        }


        // PUBLIC METHODS ++++++++++++++++++++++++++++++++++++++++++

        public update() {
            this.x -= this._dx;

            this._checkBounds();
        }


    }

}   