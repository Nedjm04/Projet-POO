package application;

import javax.persistence.*;
import java.util.List;

@Entity
public class DossierMedical {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    private Patient patient;

    @OneToMany
    private List<Consultation> consultations;

    private String ordonnance;
    private String certificatMedical;
    private String resumeTraitement;
    private String antecedents;
    private String remarques;

    // Constructeur par défaut
    public DossierMedical() {}

    // Constructeur avec paramètres
    public DossierMedical(Patient patient, List<Consultation> consultations, String ordonnance,
                          String certificatMedical, String resumeTraitement, String antecedents, String remarques) {
        this.patient = patient;
        this.consultations = consultations;
        this.ordonnance = ordonnance;
        this.certificatMedical = certificatMedical;
        this.resumeTraitement = resumeTraitement;
        this.antecedents = antecedents;
        this.remarques = remarques;
    }

    // Getters et setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Patient getPatient() {
        return patient;
    }

    public void setPatient(Patient patient) {
        this.patient = patient;
    }

    public List<Consultation> getConsultations() {
        return consultations;
    }

    public void setConsultations(List<Consultation> consultations) {
        this.consultations = consultations;
    }

    public String getOrdonnance() {
        return ordonnance;
    }

    public void setOrdonnance(String ordonnance) {
        this.ordonnance = ordonnance;
    }

    public String getCertificatMedical() {
        return certificatMedical;
    }

    public void setCertificatMedical(String certificatMedical) {
        this.certificatMedical = certificatMedical;
    }

    public String getResumeTraitement() {
        return resumeTraitement;
    }

    public void setResumeTraitement(String resumeTraitement) {
        this.resumeTraitement = resumeTraitement;
    }

    public String getAntecedents() {
        return antecedents;
    }

    public void setAntecedents(String antecedents) {
        this.antecedents = antecedents;
    }

    public String getRemarques() {
        return remarques;
    }

    public void setRemarques(String remarques) {
        
