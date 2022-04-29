const Reader=require("./../../lib/tools/Reader");
const testFull="./tests/datatest1.test.json";
const testNull="./tests/datatest4.test.json";

describe("Verificar funcionamiento de Reader.js",()=>{
    test("1-Reader.js devuelva un Json del archivo solicitado",()=>{
        const path=testFull;
        const fileJson=Reader.returnFile(path);
        expect(fileJson).toBeDefined();
    });

    test("2-Reader tiene que devolver todos los elementos del archivo",()=>{
        const path=testFull;
        const fileJson=Reader.returnFile(path);

        expect(fileJson.length).toBe(10);
    });
    test("3-Reader.js devuelve mensaje si el archivo Json no tiene datos",()=>{
        const path=testNull;
        const fileJson=Reader.returnFile(path);
 
        expect(fileJson).toBe(null);
    });

});