const Reader=require("./../tools/Reader");


class VisualPartnerFilter{
    static getVirtualPartners() {
        return Reader.pathFile("virtualpartners.json");
    }

    static getEmailsWithCertification(){
        const AllVirtualPartners=this.getVirtualPartners();
        const FilterCertificateVsPartners=AllVirtualPartners.filter((student)=>student.haveCertification==true);

        return FilterCertificateVsPartners.map(student=>student.email);
    }

    static getStudentsWith500Credits(){
        const AllVirtualPartners=this.getVirtualPartners();

        return AllVirtualPartners.filter((student)=>student.credits>500);
    }
    
}
module.exports=VisualPartnerFilter;
