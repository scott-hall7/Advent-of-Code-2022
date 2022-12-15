//  Gets input from html text content
const input = document.body.textContent.trim().split(/\r?\n|\r|\n/g).map(item => item.trim());

console.log(input)

 /* --- Part 1 Solution ---*/
let files = {
    Directories: [],
    Files: [],

}
loopInput(input);

function loopInput(array)   {
    let activeDirectory = files;
    //  Update to array length. //
    for(let i = 0; i < array.length; i++)   {
        if(array[i].includes("dir"))    {
            files.Directories.push({Directory: array[i]})
        }
        else if(array[i].includes('cd')) {
            activeDirectory = array[i].slice(5)
            console.log(activeDirectory)
        }
        else if(array[i].includes('ls')) {
        }

        else {
            let split = array[i].split(" ");
            files.Files.push(split[0])
        }
    }
    console.log(activeDirectory)
    console.log(files)
}

