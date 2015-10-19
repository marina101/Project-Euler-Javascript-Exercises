/* 
The program displays the largest prime factor of any given number that compare is set to.
Currently is is configured to calculate it for the number 1000, but this can be changed to anything.
*/

var collection = new Array();
var prime = true;
var compare = 1000;
for(var i = 2; i<compare; i++, prime =true){
    
    //if i is a factor of 1000
    if(compare%i === 0 ){
        
        for(var j =2; j<compare; j++){
            //test if i is prime
            if((i != j)&&(i%j === 0)){
                prime = false;
            }
        }
        
        
        
        if(prime===true){
            
            collection.push(i);
        }
    }
}

console.log("The largest prime factor of " + compare + " is " + collection[collection.length-1] );