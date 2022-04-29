const VisualPartnerFilter=require("./../service/VisualPartnerFilter");
const path="virtualpartners.json"

class VisualPartnerController {
    static getStudentsVirtualP(){
        const StudentsVirtualP=VisualPartnerFilter.getVirtualPartners(path);
        return StudentsVirtualP;
    }
    static getEmailsVirtualP(){
        const EmailsVirtualP=VisualPartnerFilter.getEmailsWithCertification(path);
        return EmailsVirtualP;
    }
    static getStudentsVPCredits(){
        const StudentsVPCredits=VisualPartnerFilter.getStudentsWith500Credits(path);
        return StudentsVPCredits;
    }
}
module.exports = VisualPartnerController;