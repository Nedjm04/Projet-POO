package application.controllers;

import application.DossierMedical;
import application.services.DossierMedicalService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/dossiers")
public class DossierMedicalController {

    @Autowired
    private DossierMedicalService dossierMedicalService;

    @GetMapping
    public List<DossierMedical> getAllDossierMedicals() {
        return dossierMedicalService.getAllDossierMedicals();
    }

    @GetMapping("/{id}")
    public Optional<DossierMedical> getDossierMedicalById(@PathVariable Long id) {
        return dossierMedicalService.getDossierMedicalById(id);
    }

    @PostMapping
    public DossierMedical createDossierMedical(@RequestBody DossierMedical dossierMedical) {
        return dossierMedicalService.saveDossierMedical(dossierMedical);
    }

    @PutMapping("/{id}")
    public DossierMedical updateDossierMedical(@PathVariable Long id, @RequestBody DossierMedical dossierMedicalDetails) {
        DossierMedical dossierMedical = dossierMedicalService.getDossierMedicalById(id)
                .orElseThrow(() -> new RuntimeException("DossierMedical not found"));
        // Mettre à jour les champs nécessaires ici
        dossierMedical.setOrdonnance(dossierMedicalDetails.getOrdonnance());
        dossierMedical.setCertificatMedical(dossierMedicalDetails.getCertificatMedical());
        dossierMedical.setResumeTraitement(dossierMedicalDetails.getResumeTraitement());
        dossierMedical.setAntecedents(dossierMedicalDetails.getAntecedents());
        dossierMedical.setRemarques(dossierMedicalDetails.getRemarques());
        return dossierMedicalService.saveDossierMedical(dossierMedical);
    }

    @DeleteMapping("/{id}")
    public void deleteDossierMedical(@PathVariable Long id) {
        dossierMedicalService.deleteDossierMedical(id);
    }
}
