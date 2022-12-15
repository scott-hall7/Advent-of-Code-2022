//  Gets input from html text content
const input = document.body.textContent.trim().split(/\r?\n|\r|\n/g).map(row => row.trim());


/* --- Part 1 Solution --- */
const visibleScore = input.map(row => scoreRow(row))


function scoreRow(row)  {
    let score = 0;

    //  If first Row and last Row of trees, count all the trees as visible
    if(row === input[0] || row === input[input.length - 1]) {
        score = row.length;
        return score;
    }

    //  Score Row
    return scoreEachNumber(row);
}

function scoreEachNumber(row)   {

    let rowNumber = input.indexOf(row)
    let score = 0;

    //  Loops through row
    for(let i = 0; i < row.length; i++) {

        let charIndex = i;

        //  Scores first and last element of row as visible automatically
        if(i === 0 || i === row.length - 1) {
            score += 1;
        }

        //  If not first or last element of row, check if visible
        else {
            let rowFirstResult = true;
            let rowSecondResult = true;
            let rowFirstHalf = row.slice(0, charIndex);
            let rowSecondHalf = row.slice(charIndex + 1);

            //  Loop through first half of row to find if visible
            for(let i = 0; i < rowFirstHalf.length; i++)   {
                if ((rowFirstHalf[i] * 1) >= (row[charIndex] * 1)) {
                    rowFirstResult = false;
                }
            }
            
            //  Loop through second half of row to find if visible
            for(let i = 0; i < rowSecondHalf.length; i++)   {
                if ((rowSecondHalf[i] * 1) >= (row[charIndex] * 1)) {
                    rowSecondResult = false;
                }
            }
            //  If number is visible from either side, give it a 1 score
            if (rowFirstResult === true || rowSecondResult === true) score += 1;

            //  If not visible in row, check if visible in column
            else if(rowFirstResult === false && rowSecondResult === false) {

                let firstResult = true;
                let secondResult = true;
                let firstHalf = input.slice(0, rowNumber)
                let secondHalf = input.slice(rowNumber + 1)

                //  Loops through first half of column to find if visible
                for(let i = 0; i < firstHalf.length; i++)   {
                    if ((firstHalf[i][charIndex] * 1) >= (row[charIndex] * 1)) {
                        firstResult = false;
                    }
                }

                //  Loops through second half of column to find if visible
                for(let i = 0; i < secondHalf.length; i++)   {
                    if ((secondHalf[i][charIndex] * 1) >= (row[charIndex] * 1)) {
                        secondResult = false;
                    }
                }

                // If visible in top or bottom of column, give it a 1 score;
                if (firstResult === true || secondResult === true) score +=1;
            }
        }
    }
    return score;
}

//  Sums all 1s to determine how many numbers are visible
const Part1Answer = visibleScore.reduce((a,b) => a + b);
console.log(Part1Answer) //  1763



/* --- Part 2 Solution */
function scenicScore(array) {

    //  Loops through array by row
    for(let i = 0; i < array.length; i++)   {
        let row = array[i];
        let inputIndex = i;
        
        //  Loops through each invidual row
        for(let i = 0; i < row.length; i++) {
            let topScenicScore = 0;
            let bottomScenicScore = 0;
            let leftScenicScore = 0;
            let rightScenicScore = 0;

            //  Finds the current number
            let compareNumber = row[i] * 1;

            //Finds the right of the row sliced at current number position
            let rowSecondHalf = row.slice(i + 1);

            //Finds the right of the input sliced at current row position
            let rightInputHalf = input.slice(inputIndex + 1)

            //  Scores Left Scenic Score
            for(let a = i - 1; a >= 0; a--)   {
                leftScenicScore += 1;
                if((row[a] * 1) >= compareNumber) break;
            }

           //  Scores Right Scenic Score
            for(let b = 0; b < rowSecondHalf.length; b++)   {
                rightScenicScore +=1;
                if((rowSecondHalf[b] * 1) >= compareNumber) break;
            }

            //  Scores Top Scenic Score
            for (let c = inputIndex - 1; c >= 0; c--)    {
                topScenicScore += 1;
                if((input[c][i] * 1) >= compareNumber) break;
            }

            //  Scores Bottom Scenic Score
            for (let d = 0; d < rightInputHalf.length; d++)    {
                bottomScenicScore += 1;
                if((rightInputHalf[d][i] * 1) >= compareNumber) break;
            }

            //  Returns letter score
            let letterScore = leftScenicScore * rightScenicScore * topScenicScore * bottomScenicScore;
            if (letterScore >= 600000) console.log(letterScore)
        }
    }
}

//  Part 2 Answer:
scenicScore(input); //  671160

