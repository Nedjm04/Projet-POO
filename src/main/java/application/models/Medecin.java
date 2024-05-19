package application;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
public class Medecin {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nom;
    private String specialite;

    @OneToMany(mappedBy = "medecin", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<RendezVous> rendezVousList = new ArrayList<>();

    // Constructeurs, getters, setters et méthodes existants

    public Medecin() {}

    public Medecin(String nom, String specialite) {
        this.nom = nom;
        this.specialite = specialite;
    }

    // Getters, setters et autres méthodes
}
