const VisualPartnerService=require("../service/VisualPartnerService");
const path="./virtualpartners.json";

class VisualPartnerController {
    static getStudentsVirtualP(){
        const StudentsVirtualP=VisualPartnerService.getVirtualPartners(path);
        return StudentsVirtualP;
    }
    static getEmailsVirtualP(){
        const EmailsVirtualP=VisualPartnerService.getEmailsWithCertification(path);
        return EmailsVirtualP;
    }
    static getStudentsVPCredits(){
        const StudentsVPCredits=VisualPartnerService.getStudentsWith500Credits(path);
        return StudentsVPCredits;
    }
}
module.exports = VisualPartnerController;