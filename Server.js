
//# Project
// Node js runs on the server where as javascipt runs on the browser
// we should know the html,css and javascript basics to learn node js

// Diff between node js and vanilla js(the plain old javascript)
// 1) Node runs on the server not in browser and u work on the backend not frontend
// 2) The console is in the terminal window
//    To exit from the console press ctrl+c
console.log('hello world')
// 3) Global object instead of window object(browser)
//    Global oject is small and have some of the same properties of the window object
// console.log(global);
// 4) Has common core modules that we will explore
// 5) CommonJS modules instead of ES6 modules(ES6 requires import etc and commonJS uses require statement)

const os =  require('os')
const path =require('path')

console.log("hello world")

console.log(os.type())
console.log(os.version())
console.log(os.homedir())

console.log(__dirname)
console.log(__filename)

console.log(path.dirname(__filename))
console.log(path.basename(__filename))
console.log(path.extname(__filename))

console.log(path.parse(__filename)) 