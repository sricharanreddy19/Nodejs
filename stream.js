const fs = require('fs');
const path = require('path');

const rs = fs.createReadStream(path.join(__dirname, 'lorem.txt')); // 🔧 this was missing
const ws = fs.createWriteStream(path.join(__dirname, 'new-lorem.txt'));

/* rs.on('data', (dataChunk) => {
    ws.write(dataChunk);
}); */

rs.pipe(ws);
