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
// fs.unlinkSync('./copy.txt');

//status check
// console.log(fs.statSync('./test.txt'))
// console.log(fs.statSync('./test.txt').isFile()) //true of false



// others
// fs.mkdirSync('mydir');
// fs.mkdirSync('mydir2/a/b',{ recursive: true });


//node.js architecture
// Event loop...
// Operation:- (i) blocking (synchronous)(waiting) (ii)non-blocking(asynchronous) (no waiting or skipping)
// request -> blocking operation -> thread-pool(consist of thread or workers)-> check if any worker is free -> if free assign work to worker -> return response
// request -> non-blocking operation -> process -> return response

// Default thread pool size = 8
// Maximum thread pool size = no of CPU cores

const os = require('os');
// console.log(os.cpus().length);


