//  Gets input from html text content
const input = document.body.textContent;


//  Splits sections into into an array of arrays
const splitArrays = input.trim().split(/\r?\n\r?\n/).map(elf => elf.split(/\r?\n/));


//  Finds sum in each elf array and creates new array of all the sums
const totalCalories = splitArrays.map(array => array.reduce((accumulator, currentValue) => accumulator + (currentValue * 1), 0));

//  Sorts the sum totals by smallest to largest
const sortedCalories = totalCalories.sort((a,b) => a - b)

let part1 = sortedCalories.at(-1)
let part2 = sortedCalories.slice(-3).reduce((accumulator, currentValue) => accumulator + currentValue, 0);


