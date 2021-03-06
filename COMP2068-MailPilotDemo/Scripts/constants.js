var constants;
(function (constants) {
    // font Constants
    constants.FONT_SIZE = "24px";
    constants.FONT_FAMILY = "Consolas";
    constants.FONT_COLOUR = "#FFFF00";
    // stage Constants
    constants.SCREEN_WIDTH = 640;
    constants.SCREEN_HEIGHT = 480;
    constants.SCREEN_CENTER_WIDTH = constants.SCREEN_WIDTH * 0.5;
    constants.SCREEN_CENTER_HEIGHT = constants.SCREEN_HEIGHT * 0.5;
    constants.SKY_RESET_WIDTH = 640;
    // game Constants
    constants.PLAYER_LIVES = 5;
    constants.BULLET_NUM = 3;
    constants.WAVE = 0;
    // states Constants
    constants.MENU_STATE = 0;
    constants.PLAY_STATE = 1;
    constants.GAME_OVER_STATE = 2;
})(constants || (constants = {}));
//# sourceMappingURL=constants.js.map