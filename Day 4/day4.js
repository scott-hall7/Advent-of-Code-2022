//  Gets input from html text content
const input = document.body.textContent;

//  Splits sections into into an array of arrays
const inputArray = input.trim().split(/\r?\n/).map(input => input.trim().split(/\r?\n/)).map(array => splitArray(array));

//  Splits the input into grouping of elves, that are split by commas
//  Breaks out each individual elf at it's min and max
function splitArray(array)  {
    const arraySplit = array[0].split(',');
    const newArray = [];

    for (let i = 0; i < arraySplit.length; i++) {
        newArray.push(arraySplit[i].split('-'));
    }
    return newArray
}

/* --- Part 1 Solution --- */

//  Returns a scored array:
//  1 indicates a grouping of elves where one elf is fully contained by the other
//  0 indicates either elf is not contained by the other
const scoreArrayPart1 = inputArray.map(x => findContain(x))

//  Breaks out the individual elf elements to compare the min and max of each grouping of elves
function findContain(array)   {

    const firstElf = array[0]
    const secondElf = array[1]

    const firstElfMin = firstElf[0] * 1;
    const firstElfMax = firstElf[1] * 1;

    const secondElfMin = secondElf[0] * 1;
    const secondElfMax = secondElf[1] * 1;
    

    //  If an elf fully contains another elf, return 1
    if ((firstElfMin <= secondElfMin ) && (firstElfMax  >= secondElfMax)) return 1;
    if ((secondElfMin  <= firstElfMin) && (secondElfMax  >= firstElfMax)) return 1;
    
    //  Return 0 if not fully contained
    else return 0;
}

//  Adds up all the 1s to find total grouping of elves that where one elf is contained by the other
const part1Total = scoreArrayPart1.reduce((a, b) => a + b);

//Part 1 Answer:
console.log(part1Total) // 448

/* --- Part 2 Solution --- */

//  Returns a scored array:
//  1 indicates a grouping of elves that overlaps
//  0 indicates a grouping of elves that does not overlap
const scoreArrayPart2 = inputArray.map(x => findLikeness(x))

function findLikeness(array)   {

    const firstElf = array[0]
    const secondElf = array[1]

    const firstElfMin = firstElf[0] * 1;
    const firstElfMax = firstElf[1] * 1;

    const secondElfMin = secondElf[0] * 1;
    const secondElfMax = secondElf[1] * 1;
    

    //  If a grouping of elves overlap, return 1
    if ((firstElfMin >= secondElfMin ) && (firstElfMin  <= secondElfMax)) return 1;
    if ((firstElfMax  >= secondElfMin) && (firstElfMax  <= secondElfMax)) return 1;
    if ((secondElfMin >= firstElfMin ) && (secondElfMin  <= firstElfMax)) return 1;
    if ((secondElfMax  >= firstElfMin) && (secondElfMax  <= firstElfMax)) return 1;
    
    //  Return 0 if not fully contained
    else return 0;
}

//  Adds up all the 1s to find total grouping of elves that overlap
const part2Total = scoreArrayPart2.reduce((a, b) => a + b);

//Part 2 Answer:
console.log(part2Total) // 794


