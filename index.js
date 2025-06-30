const fsPromises = require('fs').promises;
const path=require('path');

const fileOps=async () => {
    try {

        const data = await fsPromises.readFile(path.join(__dirname,'starter.txt'),'utf8')
        console.log(data);
        await fsPromises.unlink(path.join(__dirname,'starter.txt'));
        await fsPromises.writeFile(path.join(__dirname,'promisewrite.txt'),data);
        await fsPromises.appendFile(path.join(__dirname,'promisewrite.txt'),'\n\n nice to meet you ');
        await fsPromises.rename(path.join(__dirname,'promisewrite.txt'),'promiseComplete.txt');
        const Newdata = await fsPromises.readFile(path.join(__dirname,'promiseComplete.txt'),'utf8');
        console.log(Newdata);
    }catch(err){
        console.error(err)
    }
}

fileOps();


/* 
    fs.writeFile(path.join(__dirname,'reply.txt'), ' nice to meet you .',(err) => {
    if (err) throw err;
    console.log('write complete');

    
    fs.appendFile(path.join(__dirname,'reply.txt'), '\n\n Yes ',(err) => {
       if (err) throw err;
       console.log('append complete');
    
       fs.rename(path.join(__dirname,'reply.txt'),path.join(__dirname,'newreply.txt'),(err) => {
        if (err) throw err;
        console.log(' rename complete');
       });
    });

}); */


//exit on uncaught error
process.on('uncaughtexception',err => {
    console.error('there was an uncaught error :$(err)');
    process.exit(1);
})  