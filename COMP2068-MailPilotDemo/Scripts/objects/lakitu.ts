module objects {

    export class Lakitu extends createjs.Bitmap {
        public width: number;
        public height: number;
        public name: string;

        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++++
        constructor() {
            super(assetLoader.getResult("lakitu"));

            this.name = "lakitu";

            this.width = this.getBounds().width;
            this.height = this.getBounds().height;

            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;

            this.x = 70

            createjs.Sound.play("music", { loop: -1 });

        }

        // PUBLIC METHODS ++++++++++++++++++++++++++++++++++++++++++

        public update() {
            this.y = stage.mouseY;
        }
    }

}  