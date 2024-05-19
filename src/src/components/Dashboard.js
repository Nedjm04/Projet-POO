import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const Dashboard = () => {
  const medecins = useSelector(state => state.medecins);
  const patients = useSelector(state => state.patients);
  const rdvs = useSelector(state => state.appointments); // Assurez-vous que rdvs est bien défini dans votre store

  const [showMedecins, setShowMedecins] = useState(false);
  const [showPatients, setShowPatients] = useState(false);
  const [showRdvs, setShowRdvs] = useState(false);

  return (
    <div className="main-content">
      <div className="box">
        <h2>Nombre de médecins: {medecins.length}</h2>
        <button onClick={() => setShowMedecins(!showMedecins)}>
          {showMedecins ? 'Masquer la liste' : 'Afficher la liste'}
        </button>
        {showMedecins && (
          <ul className={showMedecins ? 'active' : ''}>
            {medecins.map((medecin, index) => (
              <li key={index}>{medecin.name}</li>
            ))}
          </ul>
        )}
      </div>
      <div className="box">
        <h2>Nombre de patients: {patients.length}</h2>
        <button onClick={() => setShowPatients(!showPatients)}>
          {showPatients ? 'Masquer la liste' : 'Afficher la liste'}
        </button>
        {showPatients && (
          <ul className={showPatients ? 'active' : ''}>
            {patients.map((patient, index) => (
              <li key={index}>{patient.name}</li>
            ))}
          </ul>
        )}
      </div>
      <div className="box">
        <h2>Nombre de rendez-vous: {rdvs.length}</h2>
        <button onClick={() => setShowRdvs(!showRdvs)}>
          {showRdvs ? 'Masquer la liste' : 'Afficher la liste'}
        </button>
        {showRdvs && (
          <ul className={showRdvs ? 'active' : ''}>
            {rdvs.map((rdv, index) => (
              <li key={index}>{rdv.details}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
