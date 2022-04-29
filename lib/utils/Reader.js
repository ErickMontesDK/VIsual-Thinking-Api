const fs=require("fs");

class Reader{
    static returnFile(path){
        const rawFile=fs.readFileSync(path);

        if(rawFile.length >0){
            return JSON.parse(rawFile);
        }else{
            return null;
        }
    }
}
module.exports=Reader;

