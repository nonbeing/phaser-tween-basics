var game = new Phaser.Game(800, 600, Phaser.AUTO, 'game', { preload: preload, create: create, update: update });
var mode;
var mytween;
var einstein_sprite;

var GameStates = {
    // game modes
    TWEEN: 0,
    TIME: 1
};



function preload() {
    game.load.image('einstein', 'assets/ra_einstein.png');
}



function create() {
    einstein_sprite = game.add.sprite(-300, 0, 'einstein');

    //  Here we create a tween on the sprite created above
    mytween = game.add.tween(einstein_sprite);

    //  The object defines the properties to tween.
    //  In this case it will move to x: 500
    //  The 3000 is the duration in ms
    mytween.to({ x: 500 }, 3000);
    mode = GameStates.TWEEN;
    console.log("[DEBUG] mode is:" + mode);
    console.log("[DEBUG] Starting mytween...");
    mytween.start();
}

    

function update() {
    switch(mode) 
    {
        case GameStates.TWEEN:

            var tweening = mytween.isRunning;
            // console.log("[DEBUG] in [TWEEN MODE] is tween running:" + tweening);

            if(!tweening) {  // change mode only when the tween has finished
                einstein_sprite.destroy();
                mode = GameStates.TIME;
            }
            break;

        case GameStates.TIME:
            // print the time and then pause
            var epoch_string = "Current Unix Epoch Time \n (in milliseconds) \n" 
                + game.time.time;
            var gametime_string = "\n\nTime elapsed since game start \n (in milliseconds) \n" 
                + game.time.now;
            var time_style = {font: "25px Arial", fill: "#bbccdd", align: "center"};
            var time_text = game.add.text(game.world.centerX, game.world.centerY, 
                epoch_string+gametime_string, time_style);
            time_text.anchor.set(0.5, 0.5);

            var refresh_string = "Press any key to refresh the time...";
            var refresh_style = {font: "14px Consolas", fill: "#bbccdd", align: "center"}
            var refresh_text = game.add.text(game.world.centerX, game.world.centerY+150, 
                refresh_string, refresh_style);
            refresh_text.anchor.set(0.5, 0.5);

            game.paused = true;

            game.input.keyboard.onDownCallback = function(e) {
                time_text.destroy();
                refresh_text.destroy();
                console.log("[DEBUG] You pressed:'" + e.keyCode);
                game.paused = false; 
            }
            break;
    }
}
