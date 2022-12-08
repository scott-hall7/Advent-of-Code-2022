//  Gets input from html text content
const input = document.body.textContent;
 /* --- Part 1 Solution ---*/


//  Splits sections into into an array of arrays
for(let i = 3; i < input.length - 3; i++)   {
    const firstChar = input[i];
    const secondChar = input[i + 1];
    const thirdChar = input[i + 2];
    const fourthChar = input[i + 3];

    //  Checks each char against the other chars
    //  If the same char does not appear twice, find the position of that letter
    if(firstChar !== secondChar && firstChar !== thirdChar && firstChar !== fourthChar && secondChar !== thirdChar && secondChar !== fourthChar && thirdChar !== fourthChar)    {
         countLetter(i + 1)
    }
}
 //  Part 1 Answer:
function countLetter(number)    {
    console.log(number)
}

 /* --- Part 2 Solution ---*/

 loopInputArray(input);


//  Loops entire input, takes 14 chars from input, tests if any of them match.
//  If a match is found, move down input 1 char until message that contains 14 unique chars is found
 function loopInputArray(input)  {
    
    //  Loopps entire array, splits out array into a string of 14 chars
    //  Test each 14 char string to see if it contains all unique chars
     for(let i = 1; i <= input.length; i++)  {
        let testString = "";
        let inputIndex = i;
        for(let i = inputIndex; i <= inputIndex + 13; i++) {
            testString += input[i];
        }
        //  If string contains all unique characters, find the position in the input of the last char of string
        if(matchingLetters(testString) === false) console.log(i + 13);
     }
 }

//  For each string, loop through chars to check if all of the chars are unique
 function matchingLetters(string)   {
    let result = false;
    for(let i = 0; i < 14; i++) {
        let message = string;
        let checkChar = message[i];
        let checkMessage = message.slice(0, i) + message.slice(i + 1);
        //  If all chars are unique, let result = true
        if(checkMessage.includes(checkChar) === true) {
            result = true;
            break;
        }
    }
    return result;
 }







