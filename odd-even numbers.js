/*write a small web app that does the following:
    - asks the user to enter a number.
    - displays whether the number is even or odd (even means that it can be divided by 2
        
        . use Google to find out how to do this :) ).
    - if the user enters a non-numeric value or clicks Cancel the returned 
    value is converted to 0.
    - zero is considered even.
    - examples:
        * the user enters 4, clicks Ok: result it "4 is even".
        * the user enters 5, clicks Ok: result it "5 is odd".
        * the user clicks Cancel: result is "0 is even".
        * the user enters a string: result is "0 is even".*/

       /*const value1 = Number(prompt('Enter first value')) || 0;
const value2 = Number(prompt('Enter second value')) || 0;
console.log(value1 + value2);*/
const value = prompt("ENTER A NUMBER") || 0 ;
if (value%2==0){
    document.getElementById("test").innerHTML = "Number  " + value+ "  is Even Number";
}
else{
    document.getElementById("test").innerHTML = "Number  " + value+ "  is Odd Number";
}




