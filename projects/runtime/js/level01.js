var level01 = function (window) {

    window.opspark = window.opspark || {};

    var draw = window.opspark.draw;
    var createjs = window.createjs;

    window.opspark.runLevelInGame = function(game) {
        // some useful constants 
        var groundY = game.groundY;

        // this data will allow us to define all of the
        // behavior of our game
        var levelData = {
            name: "Robot Romp",
            number: 1, 
            speed: -3,
            gameItems: [
                {type: 'sawblade',x:400,y:groundY},
                {type: 'sawblade',x:600,y:355},
                {type: 'sawblade',x:900,y:groundY},
                {type: 'box',x:100,y:200}
               ]
    
        };
        window.levelData = levelData;
        // set this to true or false depending on if you want to see hitzones
        game.setDebugMode(false);

        // BEGIN EDITING YOUR CODE HERE
        function createSawBlade(x,y) {

            var hitZoneSize = 15;
            var damageFromObstacle = 10;
            var myObstacle = game.createObstacle(hitZoneSize,damageFromObstacle);
            
             myObstacle.x = x;
             myObstacle.y = y;
             game.addGameItem(myObstacle);
             
             var obstacleImage = draw.bitmap('img/sawblade.png');
             myObstacle.addChild(obstacleImage);
             obstacleImage.x = -25;
             obstacleImage.y = -25;
        }

       
              
        for ( var lol = 0; lol < levelData.gameItems.length; lol++) {
            var gameItem = levelData.gameItems[lol];
            createSawBlade(gameItem.x,gameItem.y)  
            
            
    
        }
        function createBox(x,y)  {
            
           
              var hitZoneSize = 15;
            var damageFromObstacle = 10;
            var myObstacle = game.createObstacle(hitZoneSize,damageFromObstacle);
            
             myObstacle.x = x;
             myObstacle.y = y;
             game.addGameItem(myObstacle);
             
            var myItem = draw.square('blue', 200, 100, 300);
            myObstacle.addChild(myItem);
            
             myItem.x = -25;
             myItem.y = -25;
        };
createBox(); 
    }

};


// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = level01;
}