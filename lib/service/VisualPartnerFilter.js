const Reader=require('./Reader');


class VisualPartnerFilter{
    static getVirtualPartners() {
        const AllVirtualPartners=Reader.pathFile('virtualpartners.json');
        return AllVirtualPartners;
    }
    static getEmailsWithCertification(Certificate){
        const AllVirtualPartners=VisualPartnerFilter.getVirtualPartners();
        const FilterCertificateVsPartners=AllVirtualPartners.filter((student)=>student.haveCertification==Certificate);
        const emailsCertificateVSPartners=[];

        for(let i=0; i<FilterCertificateVsPartners.length; i++) {
            emailsCertificateVSPartners.push(FilterCertificateVsPartners[i].email)
        }

        return emailsCertificateVSPartners;

    }
    static getStudentsWithCredits(credits){
        const AllVirtualPartners=VisualPartnerFilter.getVirtualPartners();
        const FilterCreditsVsPartners=AllVirtualPartners.filter((student)=>student.credits>credits);
        const StudentsCreditsVSPartners=[];

        for(let i=0; i<FilterCreditsVsPartners.length; i++) {
            StudentsCreditsVSPartners.push(FilterCreditsVsPartners[i])
        }

        return StudentsCreditsVSPartners;

    }
    
}
module.exports=VisualPartnerFilter;
