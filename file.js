const fs  = require('fs');

//Synchronous write operations
// fs.writeFileSync('./test.txt','hay there !')
// fs.writeFileSync('./test.txt','hellow world !')// overwrite


//asynchronous write operations
// fs.writeFile('./test.txt','copy cat!',(error) => {});

// const result = fs.readFileSync('./contact.txt','utf-8');

// console.log(result);

fs.readFile('./contact.txt','utf-8',
    (error,result) => {
        if(error) {
            // console.log(error);
        }
        else{
            // console.log(result);
        }
    }
)

// synchronous operations returns result
// But asynchronous operations expects a callback




// appending files

// fs.appendFileSync('./contact.txt','\n' + new Date().getTime().toLocaleString());
// fs.appendFileSync('./contact.txt',`\n Logged in at ${Date.now()}`);






// coping files
// fs.cpSync('./contact.txt', './copy.txt');
// source to destination coping files.



// Delete files
fs.unlinkSync('./copy.txt');


