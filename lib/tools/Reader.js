const fs=require("fs");

class Reader{
    static returnFile(path){
        const rawFile=fs.readFileSync(path);
        return JSON.parse(rawFile);
    }
}
module.exports=Reader;

