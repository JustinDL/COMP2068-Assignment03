module constants {
    // font Constants
    export var FONT_SIZE: string = "24px";
    export var FONT_FAMILY: string = "Consolas";
    export var FONT_COLOUR: string = "#FFFF00";

    // stage Constants
    export var SCREEN_WIDTH: number = 640;
    export var SCREEN_HEIGHT: number = 480;
    export var SCREEN_CENTER_WIDTH: number = SCREEN_WIDTH * 0.5;
    export var SCREEN_CENTER_HEIGHT: number = SCREEN_HEIGHT * 0.5;
    export var SKY_RESET_WIDTH: number = 640;

    // game Constants
    export var PLAYER_LIVES: number = 5;
    export var BULLET_NUM: number = 3;
    export var WAVE: number = 0;

    // states Constants
    export var MENU_STATE: number = 0;
    export var PLAY_STATE: number = 1;
    export var GAME_OVER_STATE: number = 2;
} 