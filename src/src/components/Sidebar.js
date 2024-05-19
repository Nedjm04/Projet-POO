import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Sidebar.css';
import logo from '../assets/white_transparent.svg';  // Assurez-vous que le chemin vers le logo est correct
import avatar from '../assets/doctor.png';

/*const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/medecins">Médecins</Link>
      <Link to="/patients">Patients</Link>
      <Link to="/appointments">Rendez-vous</Link>
      
    </div>
  );
};

export default Sidebar;*/

const Sidebar = () => {
  const navigate = useNavigate();

  const handleProfileClick = () => {
    navigate('/profile');
  };

  const handleLogoutClick = () => {
    navigate('/');
  };

  return (
    <div className="sidebar">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <div className="profile-section">
        <img src={avatar} alt="Avatar" className="avatar" />
        <p className="profile-name">Nedjm Aibeche</p>
        <button className="profile-button" onClick={handleProfileClick}>Afficher le profil</button>
        
      </div>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/medecins">Médecins</Link>
      <Link to="/patients">Patients</Link>
      <Link to="/appointments">Rendez-vous</Link>
      
      <Link to="/dossier">Dossiers Medicaux</Link>
      <div className='logout'>
        <button className="profile-button-g" onClick={handleLogoutClick}>Déconnecter</button>
      </div>
      
    </div>
  );
};

export default Sidebar;