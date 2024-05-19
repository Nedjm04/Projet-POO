package application.services;

import application.FichePatient;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class FichePatientService {

    @Autowired
    private FichePatientRepository fichePatientRepository;

    public List<FichePatient> getAllFichePatients() {
        return fichePatientRepository.findAll();
    }

    public Optional<FichePatient> getFichePatientById(Long id) {
        return fichePatientRepository.findById(id);
    }

    public FichePatient saveFichePatient(FichePatient fichePatient) {
        return fichePatientRepository.save(fichePatient);
    }

    public void deleteFichePatient(Long id) {
        fichePatientRepository.deleteById(id);
    }
}
