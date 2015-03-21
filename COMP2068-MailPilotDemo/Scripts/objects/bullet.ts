module objects {

    export class Bullet extends objects.GameObject {

        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++++++
        constructor() {
            super("bullet");
            this.name = "bullet";
            this.soundString = "boom";

            this._reset();

        }

        // PRIVATE METHODS ++++++++++++++++++++++++++++++++++++++++
        private _reset() {
            // set the coin to start at a random x value
            this.x = -this.width;
            this.y = Math.floor(Math.random() * constants.SCREEN_HEIGHT);
            // add drift to the cloud 
            this._dy = Math.floor(Math.random() * 5) + 5;
            this._dx = Math.floor(Math.random() * 4) - 2;
        }

        private _checkBounds() {
            if (this.y > (constants.SCREEN_HEIGHT + this.height)) {
                this._reset();
            }
        }


        // PUBLIC METHODS ++++++++++++++++++++++++++++++++++++++++++

        public update() {
            this.y += this._dy;
            this.x += this._dx;


            this._checkBounds();
        }


    }

}    