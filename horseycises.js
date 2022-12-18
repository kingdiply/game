//Declare a function that takes 4 arguments, and adds them all together, and returns the sum.
function add(a, b, c , d){
    return a + b + c + d;
}
console.log(add(15, 30, 45, 60));


//Declare a function that takes two arguments, and if the first argument is greater than the second one, return true, otherwise return false.
function isGreater(a, b) { 
    if (a > b) {
        return true; 
}       else {
        return false;

    }
}
console.log(isGreater(5, 3))


//Declare a function that takes a single argument, an array of numbers, and loops over all the elements of the array, 
//adding them together, and returning the total sum of all the elements in the array.
function sumArray(arr){
    var total = 0;
    for(var i=0; i<arr.length; i++){
        total = total + arr[i]
    }
    return total;
}
console.log(sumArray([1,3,5,7,9]));

class Poop {
    constructor(numberOne=0, numberTwo=0){
         this.numberOne = numberOne;
         this.numberTwo = numberTwo;
     }
     addAllNumbers(){
         return this.numberOne - this.numberTwo;
     }
 }

 const poop = new Poop(456,123).addAllNumbers();
console.log(poop)

const lowerCaseArray = [string => string.toLowerCase()];

console.log(lowerCaseArray['Crane Juice']);