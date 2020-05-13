// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require("./../underpants-lite/underpants-lite");

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./<YOUR_GITHUB_FOLDER/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

var maleCount = function(array) {

 var test = function(value){
     if(value.gender === "male"){
         return true;
     } else {
         return false; 
     }
 }
 var ret = _.filter(array, test);  
  
 
 return ret.length; 
 
 
 
 
};

var femaleCount = function(array){
    
    var result = 0;
    
    var test = function(value){
        if(value.gender === "female"){
            result++
        } 
    }
 _.each(array, test); 
 
 return result; 
};

var oldestCustomer = function(array){
   array.sort( function(a,b) {
       return a.age - b.age;
   });
   var oldestPerson = array[array.length - 1].name; 
  
   return oldestPerson; 
   
}; 

var youngestCustomer = function(array){
   array.sort( function (a, b) {
        return a.age - b.age
    }); 
   var youngestPerson = array[0].name; 
   return youngestPerson; 
};  

var averageBalance = function(array){
    var sum = 0; 
    
    for(var i = 0; i < array.length; i++){
     // array[i] will never equal array[i].balance because array[i].balance is a string (if it exists)
     // and array[i] is an object
     // how do you know if a propery exists inside of an object? Feel free to google it
     if(array[i].balance !== undefined){
            sum += parseFloat(array[i].balance.replace('$',"").replace(',',"")); 
       }
 }
    
    var avg = sum / array.length;  
    
    return avg;  
}; 

var firstLetterCount = function(array, letter){
 var totalLetterCount = 0;
  
    for(var i=0; i<array.length; i++){
        var checkName = array[i].name.charAt(0); 
      if(checkName == letter.toUpperCase()){
        totalLetterCount++; 
      } else if(checkName == letter.toLowerCase()){
          totalLetterCount++
      }
  }
  return totalLetterCount; 
}; 

var friendFirstLetterCount = function(array, customer, letter){
    var totalFriendLetterCount = 0; 
    for(var i=0; i<array.length; i++){
        var childLoop = array[i].friends; 
        if(array[i].name === customer){
            for(var j=0; j < childLoop.length; j++) {
               var nameTest = childLoop[j].name.charAt(0); 
               if(nameTest === letter.toUpperCase()){
                   totalFriendLetterCount++
               } else if(nameTest === letter.toLowerCase()){
                   totalFriendLetterCount++
               }
            }   
        }
    }
    return totalFriendLetterCount; 
}; 
var friendsCount = function(array, name){
    var customersNameArray = []; 
    
    for(var i=0; i < array.length; i++){
        var childLoop = array[i].friends; 
        
    for(var j=0; j < childLoop.length; j++){
        if(name === childLoop[j].name){
            customersNameArray.push(array[i].name); 
        }
    }
    }
    
    
    return customersNameArray; 
};

var topThreeTags = function(array){
var mainArr = []; 
var hashMap = {}; 
var topThree = []; 
    for(var i=0; i < array.length; i++){
        var tagEl = array[i].tags; 
        for(var j=0; j < tagEl.length; j++){
            mainArr.push(tagEl[j]); 
        }
    }
            for(var k=0; k < mainArr.length; k++){
                var word = mainArr[k]; 
                if(hashMap[word] === undefined){
                    hashMap[word] = 1; 
                } else {
                    hashMap[word] = hashMap[word] +1; 
                }
            }  
            for(var key in hashMap){
                if(hashMap[key] === 3){
                    topThree.push(key); 
                }
            }
            return topThree; 
}; 

var genderCount = function(array){
    var summary = {}; 
    var nonBinaryCount = 0;
    
    var test = function(value){
        if(value.gender === 'non-binary'){
            nonBinaryCount++
        }
    }
    
    _.each(array, test); 
    
    summary['male'] = maleCount(array); 
    summary['female'] = femaleCount(array); 
    summary['non-binary'] = nonBinaryCount; 
   return summary; 
}; 

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
