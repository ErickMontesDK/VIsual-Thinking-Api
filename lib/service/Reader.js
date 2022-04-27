const fs=require("fs");

class Reader{
    static pathFile(path){
        const rawFile=fs.readFileSync(path);
        const fileJson=JSON.parse(rawFile);
        return fileJson;

    }
}
module.exports=Reader;

