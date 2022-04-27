const VisualPartnerFilter=require('../../lib/service/VisualPartnerFilter')

describe('Verificar funcionamiento de VisualPartnerFilter',()=>{
    test('1-Recibir la lista de estudiantes con todos los campos',()=>{
        const AllVirtualPartners=VisualPartnerFilter.getVirtualPartners();
        
        expect(AllVirtualPartners).toBeDefined();
    });
    test('2-Recibir lista de correos con Certificate',()=>{
        const FilterCertificateVsPartners=VisualPartnerFilter.getEmailsWithCertification(true);

        for(let i=0; i<FilterCertificateVsPartners.length; i++){
            expect(FilterCertificateVsPartners[i]).toMatch(/@visualpartnership.xyz/)
        }
    });
    test('3-Recibir lista de estudiantes con credits mayor a 500',()=>{
        const FilterCreditsVsPartners=VisualPartnerFilter.getStudentsWithCredits(500);

        for(let i=0; i<FilterCreditsVsPartners.length; i++){
            expect(FilterCreditsVsPartners[i].credits).toBeGreaterThan(500)
        }
    });

})