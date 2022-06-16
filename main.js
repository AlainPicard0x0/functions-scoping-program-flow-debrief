//JavaScript Functions, Scoping, Program Flow//


/*Exercise #6
    //  Write a function that takes an Array of strings as an argument and prints the first letter of each element out (one per line). 
    //  For example the Array ["Hello", "World", "This", "Is", "My", "String"] should get printed as follows:
    
    H
    W
    T
    I
    M
    S
    
*/ 
//  Resources: charAt: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charAt
//             for...of statement: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
//             functions: https://www.w3schools.com/js/js_functions.asp


//  Write your code below:
//  Use console.log() to check your results in the browser
const arr = ["Hello", "World", "This", "Is", "My", "String"];

//---1------using for loop and call back function---//
for(let i= 0; i < arr.length ; i++) {
const newArr = arr[i].charAt(word => {
   return word ;
});
console.log(newArr); 
}

// ---2----using for...of------------------//
function newArr(letter) {
    for(let i of arr){
        console.log(i.charAt(0));
    }
}
newArr();
