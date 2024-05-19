import React, { useState } from 'react';

const DossierMedical = () => {
  const [formData, setFormData] = useState({
    patientName: '',
    patientId: '',
    ordonnance: '',
    resumeTraitement: '',
    antecedents: '',
    remarques: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleAdd = () => {
    // Vous pouvez envoyer les données du formulaire à votre backend ou effectuer d'autres actions nécessaires
    console.log(formData);
    // Réinitialisez le formulaire après avoir ajouté les données
    setFormData({
      patientName: '',
      patientId: '',
      ordonnance: '',
      resumeTraitement: '',
      antecedents: '',
      remarques: ''
    });
  };

  return (
    <div>
      <h2>Gestion des Dossiers Médicaux</h2>
      <input type="text" placeholder="Nom du Patient" name="patientName" value={formData.patientName} onChange={handleChange} />
      <input type="text" placeholder="ID du Patient" name="patientId" value={formData.patientId} onChange={handleChange} />
      <textarea placeholder="Ordonnance" name="ordonnance" value={formData.ordonnance} onChange={handleChange}></textarea>
      <textarea placeholder="Résumé Traitement" name="resumeTraitement" value={formData.resumeTraitement} onChange={handleChange}></textarea>
      <textarea placeholder="Antécédents" name="antecedents" value={formData.antecedents} onChange={handleChange}></textarea>
      <textarea placeholder="Remarques" name="remarques" value={formData.remarques} onChange={handleChange}></textarea>
      <button onClick={handleAdd}>Ajouter</button>
    </div>
  );
};

export default DossierMedical;
