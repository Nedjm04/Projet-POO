package application.controllers;

import application.Medecin;
import application.services.MedecinService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/medecins")
public class MedecinController {
    @Autowired
    private MedecinService medecinService;

    @GetMapping
    public List<Medecin> getAllMedecins() {
        return medecinService.getAllMedecins();
    }

    @GetMapping("/{id}")
    public Optional<Medecin> getMedecinById(@PathVariable Long id) {
        return medecinService.getMedecinById(id);
    }

    @PostMapping
    public Medecin createMedecin(@RequestBody Medecin medecin) {
        return medecinService.saveMedecin(medecin);
    }

    @PutMapping("/{id}")
    public Medecin updateMedecin(@PathVariable Long id, @RequestBody Medecin medecinDetails) {
        Medecin medecin = medecinService.getMedecinById(id).orElseThrow(() -> new RuntimeException("Medecin not found"));
        medecin.setNom(medecinDetails.getNom());
        medecin.setSpecialite(medecinDetails.getSpecialite());
        return medecinService.saveMedecin(medecin);
    }

    @DeleteMapping("/{id}")
    public void deleteMedecin(@PathVariable Long id) {
        medecinService.deleteMedecin(id);
    }
}
