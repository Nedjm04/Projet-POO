package application;

import javax.persistence.Entity;

@Entity
public class FichePatient extends DossierMedical {
    
    private String observationMedicale;
    private String antecedentsMedicaux;
    private String antecedentsChirurgicaux;

    public FichePatient() {
        super(); // Appel du constructeur de la classe parente
    }

    public FichePatient(Patient patient, List<Consultation> consultations, String ordonnance, String certificatMedical, String resumeTraitement, String antecedents, String remarques,
                        String observationMedicale, String antecedentsMedicaux, String antecedentsChirurgicaux) {
        super(patient, consultations, ordonnance, certificatMedical, resumeTraitement, antecedents, remarques);
        this.observationMedicale = observationMedicale;
        this.antecedentsMedicaux = antecedentsMedicaux;
        this.antecedentsChirurgicaux = antecedentsChirurgicaux;
    }

    // Getters et Setters pour les nouveaux champs
    public String getObservationMedicale() {
        return observationMedicale;
    }

    public void setObservationMedicale(String observationMedicale) {
        this.observationMedicale = observationMedicale;
    }

    public String getAntecedentsMedicaux() {
        return antecedentsMedicaux;
    }

    public void setAntecedentsMedicaux(String antecedentsMedicaux) {
        this.antecedentsMedicaux = antecedentsMedicaux;
    }

    public String getAntecedentsChirurgicaux() {
        return antecedentsChirurgicaux;
    }

    public void setAntecedentsChirurgicaux(String antecedentsChirurgicaux) {
        this.antecedentsChirurgicaux = antecedentsChirurgicaux;
    }
}
