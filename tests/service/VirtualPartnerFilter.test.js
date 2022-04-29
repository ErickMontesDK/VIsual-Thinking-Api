const VisualPartnerFilter=require("../../lib/service/VisualPartnerFilter");
const testFull="./tests/datatest1.test.json";
const testNull="./tests/datatest4.test.json";
const testNoCredits="./tests/datatest2.test.json";
const testNoEmail="./tests/datatest3.test.json";
const testNoCertificate="./tests/datatest5.test.json";

describe("Verificar funcionamiento de VisualPartnerFilter",()=>{
    test("1-Recibir la lista de estudiantes con todos los campos",()=>{
        const AllVirtualPartners=VisualPartnerFilter.getVirtualPartners(testFull);
        
        expect(AllVirtualPartners).toBeDefined();
        expect(AllVirtualPartners.length).toBe(10);
    });
    test("2-Recibir mensaje en caso de Json esta vacio",()=>{
        const NullVirtualPartners=VisualPartnerFilter.getVirtualPartners(testNull);
        
        expect(NullVirtualPartners).toBe(null);
    });
    test("3-Recibir lista de correos con Certification",()=>{
        const FilterCertificateVsPartners=VisualPartnerFilter.getEmailsWithCertification(testFull);

        for(let i=0; i<FilterCertificateVsPartners.length; i++){
            expect(FilterCertificateVsPartners[i]).toMatch(/@visualpartnership.xyz/);
        }
        expect(FilterCertificateVsPartners.length).toBe(5)
    });
    test("3-Recibir aviso si un estudiante no tiene correo",()=>{
        const FilterCertificateVsPartners=VisualPartnerFilter.getEmailsWithCertification(testNoEmail);

        for(let i=0; i<FilterCertificateVsPartners.length; i++){
            expect(FilterCertificateVsPartners[i]).toMatch(/no tiene correo/);
        }
        expect(FilterCertificateVsPartners.length).toBe(10)

    });

    test("4-Recibir mensaje si no hay key de Certification",()=>{
        const FilterCertificateVsPartners=VisualPartnerFilter.getEmailsWithCertification(testNull);
        let probe=[]
        expect(FilterCertificateVsPartners).toEqual(probe)

        const FilterCertificateVsPartners2=VisualPartnerFilter.getEmailsWithCertification(testNoCertificate);
        expect(FilterCertificateVsPartners2).toEqual(probe)
    });

    test("5-Recibir lista de estudiantes con credits mayor a 500",()=>{
        const FilterCreditsVsPartners=VisualPartnerFilter.getStudentsWith500Credits(testFull);

        for(let i=0; i<FilterCreditsVsPartners.length; i++){
            expect(FilterCreditsVsPartners[i].credits).toBeGreaterThan(500);
        }
    });

    test("6-Recibir mensaje si no hay key de Credits",()=>{
        const FilterCertificateVsPartners=VisualPartnerFilter.getStudentsWith500Credits(testNull);
        let probe=[]
        expect(FilterCertificateVsPartners).toEqual(probe)
    });

    test("6-Recibir mensaje si no hay key de Credits",()=>{
        const FilterCertificateVsPartners=VisualPartnerFilter.getStudentsWith500Credits(testNoCredits);
        let probe=[]
        expect(FilterCertificateVsPartners).toEqual(probe)

    });

});