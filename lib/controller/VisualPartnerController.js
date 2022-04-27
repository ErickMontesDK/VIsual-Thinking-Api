const VisualPartnerFilter=require('./../service/VisualPartnerFilter')

class VisualPartnerController {
    static getStudentsVirtualP(){
        const StudentsVirtualP=VisualPartnerFilter.getVirtualPartners();
        return StudentsVirtualP;
    }
    static getEmailsVirtualP(Certificate){
        const EmailsVirtualP=VisualPartnerFilter.getEmailsWithCertification(Certificate);
        return EmailsVirtualP;
    }
    static getStudentsVPCredits(credits){
        const StudentsVPCredits=VisualPartnerFilter.getStudentsWithCredits(credits);
        return StudentsVPCredits;
    }
}
module.exports = VisualPartnerController;