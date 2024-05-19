import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addPatient, updatePatient, deletePatient } from '../redux/actions';

const Patients = () => {
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [id, setId] = useState('');
  const [telephone, setTelephone] = useState('');
  const [adresse, setAdresse] = useState('');
  const [antecedentsMedicaux, setAntecedentsMedicaux] = useState('');
  const [alergie, setAlergie] = useState('');
  const patients = useSelector(state => state.patients);
  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(addPatient({ nom, prenom, id, telephone, adresse, antecedentsMedicaux, alergie }));
    setNom('');
    setPrenom('');
    setId('');
    setTelephone('');
    setAdresse('');
    setAntecedentsMedicaux('');
    setAlergie('');
  };

  const handleUpdate = (patient) => {
    setNom(patient.nom);
    setPrenom(patient.prenom);
    setId(patient.id);
    setTelephone(patient.telephone);
    setAdresse(patient.adresse);
    setAntecedentsMedicaux(patient.antecedentsMedicaux);
    setAlergie(patient.alergie);
  };

  const handleDelete = (id) => {
    dispatch(deletePatient(id));
  };

  return (
    <div>
      <h2>Gestion des Patients</h2>
      <input type="text" placeholder="Nom" value={nom} onChange={(e) => setNom(e.target.value)} />
      <input type="text" placeholder="Prenom" value={prenom} onChange={(e) => setPrenom(e.target.value)} />
      <input type="text" placeholder="ID" value={id} onChange={(e) => setId(e.target.value)} />
      <input type="text" placeholder="Telephone" value={telephone} onChange={(e) => setTelephone(e.target.value)} />
      <input type="text" placeholder="Adresse" value={adresse} onChange={(e) => setAdresse(e.target.value)} />
      <input type="text" placeholder="Antecedents Medicaux" value={antecedentsMedicaux} onChange={(e) => setAntecedentsMedicaux(e.target.value)} />
      <input type="text" placeholder="Alergie" value={alergie} onChange={(e) => setAlergie(e.target.value)} />
      <button onClick={handleAdd}>Ajouter</button>
      <ul>
        {patients.map(patient => (
          <li key={patient.id}>
            {patient.nom} - {patient.prenom} - {patient.id} - {patient.telephone} - {patient.adresse} - {patient.antecedentsMedicaux} - {patient.alergie}
            <button onClick={() => handleUpdate(patient)}>Modifier</button>
            <button onClick={() => handleDelete(patient.id)}>Supprimer</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Patients;
