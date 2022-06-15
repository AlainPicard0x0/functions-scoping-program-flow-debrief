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

let myFunction = element => console.log(element.charAt(0));

console.log('\nfor of mode');
for (const iterator of arr) {
    myFunction(iterator);
}

console.log('\nfor each mode');
arr.forEach(element => {
    myFunction(element);
});

console.log('\nfor each mode2');
arr.forEach( el => myFunction(el) );

console.log('\nfor mode');
for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    myFunction(element);   
}





