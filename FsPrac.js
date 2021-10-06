const fs = require('fs')

const content = 'Some contene!'

fs.writeFile('./test2.txt',content,{flag: 'a+'},err => {
    if(err) {
        console.log(err)
        return
    }
})

fs.readFile('./test.txt','utf8',(err,data) => 
{
    if(err) {
        console.log(err)
        return
    }
    console.log(data)
})