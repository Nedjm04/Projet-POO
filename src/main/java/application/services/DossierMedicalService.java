package application.services;

import application.DossierMedical;
import application.JDBCManager;
import application.Patient;
import application.PatientDAO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class DossierMedicalService {
    
    @Autowired
    private JDBCManager jdbcManager;

    @Autowired
    private PatientDAO patientDAO;

    // Méthode pour récupérer tous les dossiers médicaux depuis la base de données
    public List<DossierMedical> getAllDossierMedicals() {
        List<DossierMedical> dossierMedicals = new ArrayList<>();
        String query = "SELECT * FROM DossierMedical";

        try (Connection connection = jdbcManager.getConnection();
             PreparedStatement statement = connection.prepareStatement(query);
             ResultSet resultSet = statement.executeQuery()) {

            while (resultSet.next()) {
                Long id = resultSet.getLong("id");
                Long patientId = resultSet.getLong("patient_id");
                String ordonnance = resultSet.getString("ordonnance");
                String certificatMedical = resultSet.getString("certificat_medical");
                String resumeTraitement = resultSet.getString("resume_traitement");
                String antecedents = resultSet.getString("antecedents");
                String remarques = resultSet.getString("remarques");

                Patient patient = patientDAO.getPatientById(patientId).orElseThrow(() -> new RuntimeException("Patient not found"));

                DossierMedical dossierMedical = new DossierMedical(id, patient, ordonnance, certificatMedical, resumeTraitement, antecedents, remarques);
                dossierMedicals.add(dossierMedical);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return dossierMedicals;
    }

    public Optional<DossierMedical> getDossierMedicalById(Long id) {
        // Implémentation pour récupérer un DossierMedical par ID
        // similaire à getAllDossierMedicals mais avec une clause WHERE id = ?
    }

    public DossierMedical saveDossierMedical(DossierMedical dossierMedical) {
        // Implémentation pour sauvegarder un DossierMedical dans la base de données
    }

    public void deleteDossierMedical(Long id) {
        // Implémentation pour supprimer un DossierMedical par ID
    }
}
