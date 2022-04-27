const express=require('express');
const app=express();
app.use(express.json());

const VirtualPartnerController = require('./controller/VisualPartnerController')
const port=3000;

app.get('/',(req,res)=>{
    res.send('Bienvenido a la base de datos de Virtual Partners')
    console.log('Entrada al servidor')
})

app.get('/virtualpartners/students',(req,res)=>{
    const students=VirtualPartnerController.getStudentsVirtualP()

    res.json(students);
})

app.get('/virtualpartners/emails/Certificate/:has',(req,res)=>{

    const emailsArray=function(CertificateBoolean){
        const SendArray=VirtualPartnerController.getEmailsVirtualP(CertificateBoolean)

        res.json(SendArray);
    }

    let hasCertificate=(req.params.has).toLowerCase();
    let BooleanHas;
    if(hasCertificate==='true'){
        BooleanHas=true;
        emailsArray(BooleanHas);
    } else if(hasCertificate=='false'){
        BooleanHas=false;
        emailsArray(BooleanHas)
    }
       
})

app.get('/virtualpartners/students/credits/:creditsValue',(req,res)=>{
    const creditsValue=Number((req.params.creditsValue));
    const StudentsCreditsFilter=VirtualPartnerController.getStudentsVPCredits(creditsValue);

    res.json(StudentsCreditsFilter);
})

app.listen(port,()=>{
    console.log('Api Virtual Partners localhost:${port}')
})
