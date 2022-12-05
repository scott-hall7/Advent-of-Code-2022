//  Gets input from html text content
const input = document.body.textContent;

//  Splits sections into into an array of arrays
const inputArray = input.trim().split(/\r?\n/).map(move => move.trim().split(/\r?\n/));

/* --- Part 1 Solution --- */

//  Returns an array of scores
const scoredArraysPart1 = inputArray.map(array => halfArray(array));

//  Splits array into two halves
function halfArray(array)   {
    const firstHalf = array[0].slice(0, array[0].length / 2);
    const secondHalf = array[0].slice(array[0].length / 2);

    return findLetter(firstHalf, secondHalf);
}

//  Finds common letter between two halves
function findLetter(firstPart, secondPart)  {
    for(let i = 0; i < firstPart.length; i++)   {
        let char = firstPart[i];
        for(let i = 0; i < secondPart.length; i++)  {
            if(char === secondPart[i])  {
                 return scoreArray(char);
            }
        }
    }
}

//  Scores letter based off positioning
function scoreArray(letter) {
    const letterScores = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const letterScore = letterScores.indexOf(letter)

    //  Adding 1 since starting position should score as 1, instead of 0
    return letterScore + 1;
}

//  Sums all scores of arrays
const part1Total = scoredArraysPart1.reduce((a,b) => a + b, 0)

//  Part 1 Answer:
console.log(part1Total) // 7691



/* --- Part 2 Solution --- */


//  Groups every 3 arrays together
const groupedArray = groupArray(inputArray);

//  Returns an array of all grouped arrays
const newArray = groupedArray.map(x => groupArray(x))

function groupArray(array) {
    const ungroupedArray = array;
    const newArray = [];

    while(ungroupedArray.length > 0) {
        newArray.push(ungroupedArray.splice(0,3))
    }
    return newArray;
}

//  Returns an array of each grouping of array scores by unique letter
const scoredArrayPart2 = newArray.map(array => compareGroups(array))


function compareGroups(array)   {
    const comparedArrays = array[0];

    //  Selects each array of the grouped arrays
    let firstArray = comparedArrays[0];
    let secondArray = comparedArrays[1];
    let thirdArray = comparedArrays[2];

    //  Loops through the each letter of first array
    for (let i = 0; i < firstArray[0].length; i++)    {
        let letter = firstArray[0].charAt(i);

        const firstComparison = secondArray[0].toString();
        const secondComparison = thirdArray[0].toString();
        
        //  Compares first array letter to second array to find letter
        //  If found, look for letter in third array
        for (let i = 0; i < firstComparison.length; i++) {
            if(firstComparison.charAt(i) === letter)   {

                //  If the letter is found in third array, score the letter as it's the only letter in all three arrays
                for (let i = 0; i < secondComparison.length; i++) {
                    if(secondComparison.charAt(i) === letter) return scoreArray(letter);
                }
            }
        }
        
    }
}

//  Sums the total of all the letter scores
const part2Total = scoredArrayPart2.reduce((a,b) => a + b, 0);

//  Part 2 Answer:
console.log(part2Total); //  2508