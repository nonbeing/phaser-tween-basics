var mode = {
    TWEEN: 0,
    TEXT: 1
};


var game = new Phaser.Game(800, 600, Phaser.AUTO, 'phaser-example', { preload: preload, create: create });

function preload() {

    //  You can fill the preloader with as many assets as your game requires

    //  Here we are loading an image. The first parameter is the unique
    //  string by which we'll identify the image later in our code.

    //  The second parameter is the URL of the image (relative)
    game.load.image('einstein', 'assets/ra_einstein.png');
}

function create() {

    var sprite = game.add.sprite(-300, 0, 'einstein');

    //  Here we create a tween on the sprite created above
    var mytween = game.add.tween(sprite);

    //  The object defines the properties to tween.
    //  In this case it will move to x 600
    //  The 6000 is the duration in ms - 6000ms = 6 seconds
    mytween.to({ x: 500 }, 3000);

    //  And this starts it going
    mytween.start();

    var mytext = "phaser -\n with a sprinkle of \n pixi dust";
    var style = {font: "25px Arial", fill: "#bbccdd", align: "center"};
    var t = game.add.text(game.world.centerX, game.world.centerY, mytext, style);
    t.anchor.set(0.5, 0.5);

}

function update() {
    if(mytween.isRunning == true) {
        console.log("tween has finished"); // do nothing, just wait for it to finish
       
        // var mytext = "phaser -\n with a sprinkle of \n pixi dust";
        // var style = {font: "25px Arial", fill: "#bbccdd", align: "center"};
        // var t = game.add.text(game.world.centerX, game.world.centerY, mytext, style);
        // t.anchor.set(0.5, 0.5);
        // t.
    }
}