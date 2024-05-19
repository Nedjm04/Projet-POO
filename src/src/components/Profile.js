import React from 'react';
import '../styles/Profile.css';  

const Profile = () => {
  return (
    <div className="profile-page">
      <h2>Profil de l'utilisateur</h2>
      <div className="profile-details">
        <p>Nom : Nom de l'utilisateur</p>
        <p>Email : utilisateur@example.com</p>
        <p>Autres informations de profil...</p>
      </div>
    </div>
  );
};

export default Profile;
