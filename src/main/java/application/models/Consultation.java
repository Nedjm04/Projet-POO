package application;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
public class Consultation {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private LocalDate date;

    @ManyToOne
    @JoinColumn(name = "patient_id")
    private Patient patient;

    @ManyToOne
    @JoinColumn(name = "medecin_id")
    private Medecin medecin;

    private String symptomes;
    private String diagnostics;
    private String medicaments;

    // Constructeurs, getters, setters et méthodes existants

    public Consultation() {}

    public Consultation(LocalDate date, Patient patient, Medecin medecin, String symptomes, String diagnostics, String medicaments) {
        this.date = date;
        this.patient = patient;
        this.medecin = medecin;
        this.symptomes = symptomes;
        this.diagnostics = diagnostics;
        this.medicaments = medicaments;
    }

    // Getters, setters et autres méthodes
}
