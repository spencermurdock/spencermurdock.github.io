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
                {type: 'box',x:1000,y:300},
                {type:'enemy',x:400 ,y:groundY-10},
                {type:'enemy',x:800 ,y:groundY-100},
                {type:'reward',x:1000,y:350},
                {type:'reward',x:900,y:350}
                
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
           if (gameItem.type === 'sawblade'){

               createSawBlade(gameItem.x,gameItem.y); 
            } else if (gameItem.type ==='box') {
                createBox(gameItem.x, gameItem.y);
            } else if (gameItem.type === 'enemy'){
                createEnemy(gameItem.x, gameItem.y)
            } else if (gameItem.type === 'reward') {
                createReward(gameItem.x, gameItem.y)
            }
            
            
            
    
        }
        
        function createBox(x,y)  {
            
           
             var hitZoneSize = 15;
            var damageFromObstacle = 10;
            var myObstacle = game.createObstacle(hitZoneSize,damageFromObstacle);
            
             myObstacle.x = x;
             myObstacle.y = y;
             game.addGameItem(myObstacle);
             
            var myItem = draw.rect( 100, 100, "blue");
            myObstacle.addChild(myItem);
            
             myItem.x = -25;
             myItem.y = -25;
        }
        function createEnemy(x,y){
            var enemy =  game.createGameItem('enemy',25);
            var redSquare = draw.rect(50,50,'white');
            redSquare.x = -25;
            redSquare.y = -25;
            enemy.addChild(redSquare);
            enemy.x = x;
            enemy.y = y;
            enemy.velocityX = -1;
            enemy.rotationalVelocity = 10;
            game.addGameItem(enemy);
            enemy.onPlayerCollision = function() {
                console.log('The enemy has hit Halle'); 
                  game.changeIntegrity(30); 
                 enemy.fadeOut(); 
            };
            enemy.onProjectileCollision = function() {
                console.log('Halle has hit the enemy')
                game.increaseScore(100);
                enemy.shrink(); 
            }
            
           
          }
          function createReward (x,y) {
            var reward = game.createGameItem('reward',25);
            var yellowSquare = draw.rect(60,60,'yellow');
            yellowSquare.x = -25;
            yellowSquare.y = -25;
            reward.addChild(yellowSquare);
            reward.x = x;
            reward.y = y;
            reward.velocityX = -1;
            reward.rotationalVelocity = 10;
            game.addGameItem(reward);
            reward.onPlayerCollision = function() {
                game.increaseScore(500); 
                console.log('Halle has hit a reward')
                reward.fadeOut(); 
};
             
  }
          


    };
};


// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = level01;
}