import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addMedecin, updateMedecin, deleteMedecin } from '../redux/actions';

const Medecins = () => {
  const [nom, setNom] = useState('');
  const [id, setId] = useState('');
  const [specialite, setSpecialite] = useState('');
  const medecins = useSelector(state => state.medecins);
  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(addMedecin({ nom, id, specialite }));
    setNom('');
    setId('');
    setSpecialite('');
  };

  const handleUpdate = (medecin) => {
    setNom(medecin.nom);
    setId(medecin.id);
    setSpecialite(medecin.specialite);
  };

  const handleDelete = (id) => {
    dispatch(deleteMedecin(id));
  };

  return (
    <div>
      <h2>Gestion des Médecins</h2>
      <input type="text" placeholder="Nom" value={nom} onChange={(e) => setNom(e.target.value)} />
      <input type="text" placeholder="ID" value={id} onChange={(e) => setId(e.target.value)} />
      <input type="text" placeholder="Specialité" value={specialite} onChange={(e) => setSpecialite(e.target.value)} />
      <button onClick={handleAdd}>Ajouter</button>
      <ul>
        {medecins.map(medecin => (
          <li key={medecin.id}>
            {medecin.nom} - {medecin.id} - {medecin.specialite}
            <button onClick={() => handleUpdate(medecin)}>Modifier</button>
            <button onClick={() => handleDelete(medecin.id)}>Supprimer</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Medecins;
