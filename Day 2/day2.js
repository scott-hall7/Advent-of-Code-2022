//  Gets input from html text content
const input = document.body.textContent;

//  Splits sections into into an array of arrays
const inputArray = input.trim().split(/\r?\n/).map(move => move.trim().split(/\r?\n/));

//  Sums all arrays;
function sum(a, b)  {
    return a + b;
}


/* ---- Solution for Part 1 ---- */

// Scoring arrays
const scoredArraysPart1 = inputArray.map(x => scoreMove(x[0].charAt(0), x[0].charAt(2)))

//  Scores each move played for Part 1
function scoreMove(oppMove, myMove)    {
    let score = 0;

    //  Scoring points for move players
    switch(myMove)   {
        case 'X':
            score += 1;
            break;
        case 'Y':
            score += 2;
            break;
        case 'Z':
            score += 3;
            break;
    }

    //  Scoring draws
    if (oppMove === 'A' && myMove === 'X') score += 3;
    if (oppMove === 'B' && myMove === 'Y') score += 3;
    if (oppMove === 'C' && myMove === 'Z') score += 3;

    //  Scoring wins
    if (oppMove === 'A' && myMove === 'Y') score += 6;
    if (oppMove === 'B' && myMove === 'Z') score += 6;
    if (oppMove === 'C' && myMove === 'X') score += 6;

    return score;
}

//  Finds total of all arrays
const totalSumPart1 = scoredArraysPart1.reduce(sum, 0)

//  Part 1 Answer:
console.log(totalSumPart1); // 13682


/* ---- Solution for Part 2 ---- */
const scoredArraysPart2 = inputArray.map(x => findMove(x[0].charAt(0), x[0].charAt(2)))

//  Scores each move played for Part 2
function findMove(oppMove, action)    {
    let move = "";

    //  Finds action to take based off letter
    switch(action) {
        case 'X':
            move = "lose"
            break;
        case 'Y':
            move = "draw";
            break;
        case 'Z':
            move = "win";
            break;
    }

    //  Scoring opponent moves rock
    if (oppMove === 'A' && move === 'lose') return scoreMove('A','Z');
    if (oppMove === 'A' && move === 'draw') return scoreMove('A','X');
    if (oppMove === 'A' && move === 'win') return scoreMove('A','Y');

    //  Scoring opponent moves paper
    if (oppMove === 'B' && move === 'lose') return scoreMove('B','X');
    if (oppMove === 'B' && move === 'draw') return scoreMove('B','Y');
    if (oppMove === 'B' && move === 'win') return scoreMove('B','Z');

    //  Scoring opponent moves scissors
    if (oppMove === 'C' && move === 'lose') return scoreMove('C','Y');
    if (oppMove === 'C' && move === 'draw') return scoreMove('C','Z');
    if (oppMove === 'C' && move === 'win') return scoreMove('C','X');
}


//  Finds total of all arrays
const totalSumPart2 = scoredArraysPart2.reduce(sum, 0)

//  Part 2 Answer:
console.log(totalSumPart2); // 12881
