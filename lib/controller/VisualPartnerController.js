const VisualPartnerFilter=require("./../service/VisualPartnerFilter");

class VisualPartnerController {
    static getStudentsVirtualP(){
        const StudentsVirtualP=VisualPartnerFilter.getVirtualPartners();
        return StudentsVirtualP;
    }
    static getEmailsVirtualP(){
        const EmailsVirtualP=VisualPartnerFilter.getEmailsWithCertification();
        return EmailsVirtualP;
    }
    static getStudentsVPCredits(){
        const StudentsVPCredits=VisualPartnerFilter.getStudentsWith500Credits();
        return StudentsVPCredits;
    }
}
module.exports = VisualPartnerController;