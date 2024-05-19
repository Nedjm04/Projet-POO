package application.services;

import application.Medecin;
import application.repositories.MedecinRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MedecinService {
    @Autowired
    private MedecinRepository medecinRepository;

    public List<Medecin> getAllMedecins() {
        return medecinRepository.findAll();
    }

    public Optional<Medecin> getMedecinById(Long id) {
        return medecinRepository.findById(id);
    }

    public Medecin saveMedecin(Medecin medecin) {
        return medecinRepository.save(medecin);
    }

    public void deleteMedecin(Long id) {
        medecinRepository.deleteById(id);
    }
}
