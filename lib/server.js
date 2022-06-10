const express=require("express");
const app=express();
app.use(express.json());

const VisualPartnerController = require("./controller/VisualPartnerController");
const PORT=process.env.PORT || 3001;

app.get("/",(req,res)=>{
    res.send(`Bienvenido a la base de datos de Virtual Partners<br>
    A continuación puede revisar en esta API:<br>
    <a href="https://visual-thinking-api.herokuapp.com/virtualpartners/students">Lista de estudiantes</a><br>
    <a href="https://visual-thinking-api.herokuapp.com/virtualpartners/emails/certificate/">Lista de emails con certificación</a> y<br>
    <a href="https://visual-thinking-api.herokuapp.com/virtualpartners/students/fullcredits/">Lista de estudiantes con creditos mayores a 500</a>`
    );
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

app.listen(PORT,()=>{
    console.log(`Api Virtual Partners localhost:${PORT}`);
});
