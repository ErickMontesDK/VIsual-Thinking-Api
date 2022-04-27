const VisualPartnerController=require('../../lib/controller/VisualPartnerController')

describe('Verificar funcionamiento de VisualPartnerController',()=>{
    test('1-Recibir la lista de estudiantes con todos los campos',()=>{
        const AllVirtualPartners=VisualPartnerController.getStudentsVirtualP();
        
        expect(AllVirtualPartners).toBeDefined();
    });
    test('2-Recibir lista de correos con Certificate',()=>{
        const FilterCertificateVsPartners=VisualPartnerController.getEmailsVirtualP(true);
        
        for(let i=0; i<FilterCertificateVsPartners.length; i++){
            expect(FilterCertificateVsPartners[i]).toMatch(/@visualpartnership.xyz/)
        }
    });
    test('3-Recibir lista de estudiantes con credits mayor a 500',()=>{
        const FilterCreditsVsPartners=VisualPartnerController.getStudentsVPCredits(500);
        
        for(let i=0; i<FilterCreditsVsPartners.length; i++){
            expect(FilterCreditsVsPartners[i].credits).toBeGreaterThan(500)
        }
    });

})