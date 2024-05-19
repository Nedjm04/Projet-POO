package application.controllers;

import application.FichePatient;
import application.services.FichePatientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/fiches-patients")
public class FichePatientController {

    @Autowired
    private FichePatientService fichePatientService;

    @GetMapping
    public List<FichePatient> getAllFichePatients() {
        return fichePatientService.getAllFichePatients();
    }

    @GetMapping("/{id}")
    public Optional<FichePatient> getFichePatientById(@PathVariable Long id) {
        return fichePatientService.getFichePatientById(id);
    }

    @PostMapping
    public FichePatient createFichePatient(@RequestBody FichePatient fichePatient) {
        return fichePatientService.saveFichePatient(fichePatient);
    }

    @PutMapping("/{id}")
    public FichePatient updateFichePatient(@PathVariable Long id, @RequestBody FichePatient fichePatientDetails) {
        FichePatient fichePatient = fichePatientService.getFichePatientById(id)
                .orElseThrow(() -> new RuntimeException("FichePatient not found"));
        // Mettre à jour les champs nécessaires ici
        fichePatient.setObservationMedicale(fichePatientDetails.getObservationMedicale());
        fichePatient.setAntecedentsMedicaux(fichePatientDetails.getAntecedentsMedicaux());
        fichePatient.setAntecedentsChirurgicaux(fichePatientDetails.getAntecedentsChirurgicaux());
        return fichePatientService.saveFichePatient(fichePatient);
    }

    @DeleteMapping("/{id}")
    public void deleteFichePatient(@PathVariable Long id) {
        fichePatientService.deleteFichePatient(id);
    }
}
