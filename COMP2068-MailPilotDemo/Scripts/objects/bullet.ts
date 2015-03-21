module objects {

    export class Bullet extends objects.GameObject {

        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++++++
        constructor() {
            super("bullet");
            this.name = "bullet";
            this.soundString = "boom";




            // 10 makes it move 2x as fast as coins so they dont get stuck ontop of eachother as much
            this._dx = 10;

            this._reset();

        }

        // PRIVATE METHODS ++++++++++++++++++++++++++++++++++++++++
        private _reset() {
            // sets the starting position of the bullet
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

            // makes the bullet move to the left 
            this.x -= this._dx;


            this._checkBounds();
        }


    }

}    