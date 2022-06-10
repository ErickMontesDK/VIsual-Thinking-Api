const express=require("express");
const app=express();
app.use(express.json());

const VisualPartnerController = require("./controller/VisualPartnerController");
const port=process.env.port || 5000;

app.get("/",(req,res)=>{
    res.send("Bienvenido a la base de datos de Virtual Partners");
    console.log("Entrada al servidor");
});

app.get("/virtualpartners/students",(req,res)=>{
    const students=VisualPartnerController.getStudentsVirtualP();

    res.json(students);
});

app.get("/virtualpartners/emails/certificate/",(req,res)=>{
    const SendArray=VisualPartnerController.getEmailsVirtualP();

    res.json(SendArray);
});

app.get("/virtualpartners/students/fullcredits/",(req,res)=>{
    const StudentsCreditsFilter=VisualPartnerController.getStudentsVPCredits();

    res.json(StudentsCreditsFilter);
});

app.listen(port,()=>{
    console.log(`Api Virtual Partners localhost:${port}`);
});
