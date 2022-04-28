const Reader=require("./../../lib/tools/Reader");

describe("Verificar funcionamiento de Reader.js",()=>{
    test("1-Reader.js devuelva un Json del archivo solicitado",()=>{
        const path="./virtualpartners.json";
        const fileJson=Reader.pathFile(path);

        expect(fileJson).toBeDefined();
    });

    test("2-Reader tiene que devolver todos los elementos del archivo",()=>{
        const path="./virtualpartners.json";
        const fileJson=Reader.pathFile(path);

        expect(fileJson.length).toBe(51);
    });
});