package application;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
public class RendezVous {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private LocalDateTime dateHeure;

    @ManyToOne
    @JoinColumn(name = "medecin_id")
    private Medecin medecin;

    @ManyToOne
    @JoinColumn(name = "patient_id")
    private Patient patient;

    // Constructeurs, getters, setters et méthodes existants

    public RendezVous() {}

    public RendezVous(LocalDateTime dateHeure, Medecin medecin, Patient patient) {
        this.dateHeure = dateHeure;
        this.medecin = medecin;
        this.patient = patient;
    }

    // Getters, setters et autres méthodes
}
