package application.controllers;

import application.RendezVous;
import application.services.RendezVousService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/rendezvous")
public class RendezVousController {
    @Autowired
    private RendezVousService rendezVousService;

    @GetMapping
    public List<RendezVous> getAllRendezVous() {
        return rendezVousService.getAllRendezVous();
    }

    @GetMapping("/{id}")
    public Optional<RendezVous> getRendezVousById(@PathVariable Long id) {
        return rendezVousService.getRendezVousById(id);
    }

    @PostMapping
    public RendezVous createRendezVous(@RequestBody RendezVous rendezVous) {
        return rendezVousService.saveRendezVous(rendezVous);
    }

    @PutMapping("/{id}")
    public RendezVous updateRendezVous(@PathVariable Long id, @RequestBody RendezVous rendezVousDetails) {
        RendezVous rendezVous = rendezVousService.getRendezVousById(id).orElseThrow(() -> new RuntimeException("Rendez-vous not found"));
        rendezVous.setDateHeure(rendezVousDetails.getDateHeure());
        rendezVous.setMedecin(rendezVousDetails.getMedecin());
        rendezVous.setPatient(rendezVousDetails.getPatient());
        return rendezVousService.saveRendezVous(rendezVous);
    }

    @DeleteMapping("/{id}")
    public void deleteRendezVous(@PathVariable Long id) {
        rendezVousService.deleteRendezVous(id);
    }
}
