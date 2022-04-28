const VisualPartnerFilter=require("../../lib/service/VisualPartnerFilter");

describe("Verificar funcionamiento de VisualPartnerFilter",()=>{
    test("1-Recibir la lista de estudiantes con todos los campos",()=>{
        const AllVirtualPartners=VisualPartnerFilter.getVirtualPartners();
        
        expect(AllVirtualPartners).toBeDefined();
        expect(AllVirtualPartners.length).toBe(51);
    });
    test("2-Recibir lista de correos con Certification",()=>{
        const FilterCertificateVsPartners=VisualPartnerFilter.getEmailsWithCertification();

        for(let i=0; i<FilterCertificateVsPartners.length; i++){
            expect(FilterCertificateVsPartners[i]).toMatch(/@visualpartnership.xyz/);
        }
        expect(FilterCertificateVsPartners.length).toBe(29)
    });
    test("3-Recibir lista de estudiantes con credits mayor a 500",()=>{
        const FilterCreditsVsPartners=VisualPartnerFilter.getStudentsWith500Credits();

        for(let i=0; i<FilterCreditsVsPartners.length; i++){
            expect(FilterCreditsVsPartners[i].credits).toBeGreaterThan(500);
        }
        expect(FilterCreditsVsPartners.length).toBe(27)
    });

});