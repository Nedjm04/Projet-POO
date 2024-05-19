import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

public class FichePatientDAO {
    private final JDBCManager jdbcManager;

    public FichePatientDAO(JDBCManager jdbcManager) {
        this.jdbcManager = jdbcManager;
    }

    // Méthode pour récupérer toutes les fiches patients depuis la base de données
    public List<FichePatient> getAllFichePatients() {
        List<FichePatient> fichePatients = new ArrayList<>();
        String query = "SELECT * FROM FichePatient";

        try (Connection connection = jdbcManager.getConnection();
             PreparedStatement statement = connection.prepareStatement(query);
             ResultSet resultSet = statement.executeQuery()) {

            while (resultSet.next()) {
                int id = resultSet.getInt("id");
                int patientId = resultSet.getInt("patient_id");
                int dossierMedicalId = resultSet.getInt("dossier_medical_id");
                String observationMedicale = resultSet.getString("observation_medicale");
                String antecedentsMedicaux = resultSet.getString("antecedents_medicaux");
                String antecedentsChirurgicaux = resultSet.getString("antecedents_chirurgicaux");

                // Vous devrez ajuster cette partie en fonction de votre implémentation de la classe Patient et DossierMedical
                // Supposons que vous ayez une classe PatientDAO et une classe DossierMedicalDAO pour obtenir les objets correspondants
                PatientDAO patientDAO = new PatientDAO(jdbcManager);
                Patient patient = patientDAO.getPatientById(patientId);

                DossierMedicalDAO dossierMedicalDAO = new DossierMedicalDAO(jdbcManager);
                DossierMedical dossierMedical = dossierMedicalDAO.getDossierMedicalById(dossierMedicalId);

                FichePatient fichePatient = new FichePatient(id, patient, dossierMedical, observationMedicale, antecedentsMedicaux, antecedentsChirurgicaux);
                fichePatients.add(fichePatient);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return fichePatients;
    }

    // Autres méthodes DAO pour créer, mettre à jour, ou supprimer des fiches patients selon les besoins
}