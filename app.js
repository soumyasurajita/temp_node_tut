const _ = require("lodash")

const items = [1, [2, [3, [4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems)










// const http = require('http');
// const server = http.createServer((req,res)=> {
//     if(req.url === '/'){
//         res.end('welcome to our home page');
//     }
//     if(req.url === '/about'){
//         res.end('welcome to our about page');
//     }
//     res.end(`<h1>Oops!</h1>
//     <p>We cant seem to find the page you are looking for</p> 
//     <a href="/"> back to home page </a>
//     `)
//     // res.write('welcome to our home page');
//     // res.end();
// })

// server.listen(5002);




















// const fs = require('fs');

// const {readFile, writeFile} = fs;
// console.log('start')
// readFile('./content/first.txt', 'utf8',  (err,result)=> {
//     if(err){ console.log(err); return;}
//     console.log(result);
//     const first = result;
//     readFile('./content/first.txt', 'utf8',  (err,result)=> {
//         if(err){ console.log(err); return;}
//         console.log(result);
//         const second = result;

//         writeFile('./content/result-async.txt', `Here is the result: ${first} , ${second}`,(e,r)=>{
//             if(e){ console.log(e); return;}
//             console.log(r)
//         })
//      })
// });

// console.log('done with this task')
// console.log('starting with the next task')



















// const fs = require('fs');

// const {readFileSync, writeFileSync} = fs;

// console.log('start')
// const first = readFileSync('./content/first.txt', 'utf8')
// const second = readFileSync('./content/second.txt', 'utf8')
// // console.log(first);
// // console.log(second);

// writeFileSync('./content/result-sync.txt', 
// `Here is the result: ${first} , ${second}`, 
// {flag: 'a'});
// console.log('done with this task')
// console.log('starting with the next task')


















// const path = require('path');
// console.log(path.sep);

// const filepath = path.join('/content', 'subfolder', 'test.txt')
// console.log(filepath); //  /content/subfolder/test.txt

// const base = path.basename(filepath)
// console.log(base); // test.txt

// const absolute = path.resolve(__dirname, 'content', 'subfolder','test.txt');
// console.log(absolute);
















// const os = require("os");

// const username = os.userInfo();
// console.log(username);

// const uptime = os.uptime();
// console.log(uptime);

// const currentOS = {
//     osname: os.type(),
//     release: os.release(),
//     totalMemo: os.totalmem(),
//     freeMemo: os.freemem(),
//     version: os.version(),
//     platform: os.platform()
// }
// console.log(currentOS);
