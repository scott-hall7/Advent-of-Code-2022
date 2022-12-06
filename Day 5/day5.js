
//  Manually inputting starting stack
//  Note: Struggled with manually pulling in input from HTML directly
const startingStack = {
    1: ["H", "T", "Z", "D"],
    2: ["Q", "R", "W", "T", "G", "C", "S"],
    3: ["P", "B", "F", "Q", "N", "R", "C", "H"],
    4: ["L", "C", "N", "F", "H", "Z"],
    5: ["G", "L", "F", "Q", "S"],
    6: ["V", "P", "W", "Z", "B", "R", "C", "S"],
    7: ["Z", "F", "J"],
    8: ["D", "L", "V", "Z", "R", "H", "Q"],
    9: ["B", "H", "G", "N", "F", "Z", "L", "D"],
}

//  Gets input from html text content
const input = document.body.textContent;

//  Splits sections into into an array of arrays
const moves = input.trim().split(/\r?\n/).map(x => removeSpaces(x));


//  Function to remove any spaces from the move input
function removeSpaces(string)   {
    let newString = "";
    for(let i = 0; i < string.length; i++) {
        if(string.charAt(i) !== " ") {
             newString += string.charAt(i);
        }
    }
    return newString.trim();
}

//  Breaks out each input into the individual numbers
const numberGrouping = moves.map(x => x.trim().replace("move", "")).map(x => x.trim().split("from").map(x => x.trim().split("to")))


//  Sets the first number to the count of letters to move, the second number to the start position, and the third number to the end position
//  Splices letter change based off count of letters and pushes it into new stack array
function finalLetter(array) {

    //  Creating a copy of original stack to not mess with original stack
    let startingStackCopy = startingStack;


    //  For every array element, set the count, start position, and end position based off array numbers
    for(let i = 0; i < array.length; i++)   {
        let groupedArray = array[i];
        let count = groupedArray[0][0] * 1;
        let startPosition = groupedArray[1][0] * 1;
        let endPosition = groupedArray[1][1] * 1;

        //  Splices the start position array from the back based off the count of letters to remove
        const lettersChange = startingStackCopy[startPosition].splice(-count);
        
        //  Pushes each element of the spliced array to its new position
        for(let i = 0; i < lettersChange.length; i++)  {
            startingStackCopy[endPosition].push(lettersChange[i])
        }
    }
    //  Returns the final stack
    return startingStackCopy;
}

//  Part 2 Answer:
console.log(finalLetter(numberGrouping));  //  The last element of each array is the answer: CQQBBJFCS.




