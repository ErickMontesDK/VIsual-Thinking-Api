const Reader=require('./../../lib/service/Reader');

describe("Verificar funcionamiento de Reader.js",()=>{
    test("1-Reader.js devuelva un Json del archivo solicitado",()=>{
        const path='virtualpartners.json'
        const fileJson=Reader.pathFile(path);

        expect(fileJson).toBeDefined();
    })
})