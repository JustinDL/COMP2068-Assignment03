/// <reference path="../constants.ts" />
/// <reference path="../objects/gameobject.ts" />
/// <reference path="../objects/bullet.ts" />
/// <reference path="../objects/coin.ts" />
/// <reference path="../objects/sky.ts" />
/// <reference path="../objects/lakitu.ts" />
/// <reference path="../objects/button.ts" />
/// <reference path="../objects/label.ts" />
/// <reference path="../objects/scoreboard.ts" />


module states {
    // PLAY STATE
    export class Play {
        // INSTANCE VARIABLES ++++++++++++++++++++++++++++++++++++++++++++++
        public game: createjs.Container;
        public lakitu: objects.Lakitu;
        public coin: objects.Coin;
        public bullets: objects.Bullet[] = [];
        public sky: objects.Sky;
        public scoreboard: objects.ScoreBoard;

        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++++++++++++++++
        constructor() {
            // Instantiate Game Container
            this.game = new createjs.Container();

            // Add sky to game
            this.sky = new objects.Sky();
            this.game.addChild(this.sky);


            // Add coin to game
            this.coin = new objects.Coin();
            this.game.addChild(this.coin);


            // Add lakitu (player character) to game
            this.lakitu = new objects.Lakitu();
            this.game.addChild(this.lakitu);

            // Add clouds to game
            for (var bullet = constants.BULLET_NUM; bullet > 0; bullet--) {
                this.bullets[bullet] = new objects.Bullet();
                this.game.addChild(this.bullets[bullet]);
            }

            this.scoreboard = new objects.ScoreBoard(this.game);



            stage.addChild(this.game);
        } // constructor end


        // PUBLIC METHODS ++++++++++++++++++++++++++++++++++++++++++++++++++++

        // Calculate the distance between two points
        distance(p1: createjs.Point, p2: createjs.Point): number {

            return Math.floor(Math.sqrt(Math.pow((p2.x - p1.x), 2) + Math.pow((p2.y - p1.y), 2)));
        } // distance end

        // CHeck Collision Method
        checkCollision(collider: objects.GameObject) {
            var p1: createjs.Point = new createjs.Point();
            var p2: createjs.Point = new createjs.Point();
            p1.x = this.lakitu.x;
            p1.y = this.lakitu.y;
            p2.x = collider.x;
            p2.y = collider.y;
            // Check for Collision
            if (this.distance(p2, p1) < ((this.lakitu.height * 0.5) + (collider.height * 0.5))) {
                if (!collider.isColliding) { // Collision has occurred
                    createjs.Sound.play(collider.soundString);
                    collider.isColliding = true;
                    switch (collider.name) {
                        case "coin":
                            this.scoreboard.score += 100;
                            break;
                        case "bullet":
                            this.scoreboard.lives--;
                            break;
                    }
                }
            } else {
                collider.isColliding = false;
            }
    } // checkCollision end

        // UPDATE METHOD
        public update() {

            this.sky.update();
            this.lakitu.update();
            this.coin.update();

            if (this.scoreboard.lives > 0) {
                for (var bullet = constants.BULLET_NUM; bullet > 0; bullet--) {
                    this.bullets[bullet].update();
                    this.checkCollision(this.bullets[bullet]);
                }

                this.checkCollision(this.coin);
            }

            this.scoreboard.update();

            if (this.scoreboard.lives < 1) {
                createjs.Sound.stop();
                this.game.removeAllChildren();
                stage.removeAllChildren();
                finalScore = this.scoreboard.score;
                if (finalScore > highScore) {
                    highScore = finalScore;
                }
                currentState = constants.GAME_OVER_STATE;
                stateChanged = true;
            }

            if (this.scoreboard.score >= 1000) {
                stage.removeChild(stage);
                createjs.Sound.stop();
                stage.removeAllChildren();
                stage.removeAllEventListeners();
                constants.BULLET_NUM = constants.BULLET_NUM + 1;
                currentState = constants.PLAY_STATE;
                changeState(currentState);
            }

        } // update method end


    }
} 