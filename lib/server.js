const express=require("express");
const app=express();
app.use(express.json());

const VisualPartnerFilter = require("./service/VisualPartnerFilter");
const port=3000;

app.get("/",(req,res)=>{
    res.send("Bienvenido a la base de datos de Virtual Partners");
    console.log("Entrada al servidor");
});

app.get("/virtualpartners/students",(req,res)=>{
    const students=VisualPartnerFilter.getVirtualPartners();

    res.json(students);
});

app.get("/virtualpartners/emails/certificate/",(req,res)=>{
    const SendArray=VisualPartnerFilter.getEmailsWithCertification(true);

    res.json(SendArray);
});

app.get("/virtualpartners/students/fullcredits/",(req,res)=>{
    const creditsValue=500;
    const StudentsCreditsFilter=VisualPartnerFilter.getStudentsWithCredits(creditsValue);

    res.json(StudentsCreditsFilter);
});

app.listen(port,()=>{
    console.log("Api Virtual Partners localhost:${port}");
});
