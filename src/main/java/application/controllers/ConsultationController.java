package application.controllers;

import application.Consultation;
import application.services.ConsultationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/consultations")
public class ConsultationController {
    @Autowired
    private ConsultationService consultationService;

    @GetMapping
    public List<Consultation> getAllConsultations() {
        return consultationService.getAllConsultations();
    }

    @GetMapping("/{id}")
    public Optional<Consultation> getConsultationById(@PathVariable Long id) {
        return consultationService.getConsultationById(id);
    }

    @PostMapping
    public Consultation createConsultation(@RequestBody Consultation consultation) {
        return consultationService.saveConsultation(consultation);
    }

    @PutMapping("/{id}")
    public Consultation updateConsultation(@PathVariable Long id, @RequestBody Consultation consultationDetails) {
        Consultation consultation = consultationService.getConsultationById(id).orElseThrow(() -> new RuntimeException("Consultation not found"));
        consultation.setDate(consultationDetails.getDate());
        consultation.setSymptomes(consultationDetails.getSymptomes());
        consultation.setDiagnostics(consultationDetails.getDiagnostics());
        consultation.setMedicaments(consultationDetails.getMedicaments());
        return consultationService.saveConsultation(consultation);
    }

    @DeleteMapping("/{id}")
    public void deleteConsultation(@PathVariable Long id) {
        consultationService.deleteConsultation(id);
    }
}
