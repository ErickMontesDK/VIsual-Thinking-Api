const Reader=require("../utils/Reader");


class VisualPartnerService{
    static getVirtualPartners(path) {
        return Reader.returnFile(path);
    }

    static getEmailsWithCertification(path){
        const AllVirtualPartners=this.getVirtualPartners(path);

        if(AllVirtualPartners==null){
            const noData=[];
            return noData;
        }
        const FilterCertificateVsPartners=AllVirtualPartners.filter((student)=>student.haveCertification==true);

        for(let i=0; i<FilterCertificateVsPartners.length;i++){
            if (FilterCertificateVsPartners[i].email==undefined || FilterCertificateVsPartners[i].email==""){
                FilterCertificateVsPartners[i].email=`${FilterCertificateVsPartners[i].name} no tiene correo registrado`;
            } 
        }
        return FilterCertificateVsPartners.map(student=>student.email);
    }

    static getStudentsWith500Credits(path){
        const AllVirtualPartners=this.getVirtualPartners(path);
        if(AllVirtualPartners==null ){
            const noData=[];
            return noData;
        }
        
        return AllVirtualPartners.filter((student)=>student.credits>500);
    }
    
}
module.exports=VisualPartnerService;
