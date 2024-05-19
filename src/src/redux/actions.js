/*export const addMedecin = (medecin) => ({
    type: 'ADD_MEDECIN',
    payload: medecin
  });
  
  export const updateMedecin = (id, medecin) => ({
    type: 'UPDATE_MEDECIN',
    payload: { id, medecin }
  });
  
  export const deleteMedecin = (id) => ({
    type: 'DELETE_MEDECIN',
    payload: id
  });
  
  export const addPatient = (patient) => ({
    type: 'ADD_PATIENT',
    payload: patient
  });
  
  export const updatePatient = (id, patient) => ({
    type: 'UPDATE_PATIENT',
    payload: { id, patient }
  });
  
  export const deletePatient = (id) => ({
    type: 'DELETE_PATIENT',
    payload: id
  });

  // actions.js
export const ADD_APPOINTMENT = 'ADD_APPOINTMENT';

export const addAppointment = (appointment) => ({
  type: ADD_APPOINTMENT,
  payload: appointment,
});*/
// actions.js
export const ADD_APPOINTMENT = 'ADD_APPOINTMENT';
export const ADD_MEDECIN = 'ADD_MEDECIN';
export const UPDATE_MEDECIN = 'UPDATE_MEDECIN';
export const DELETE_MEDECIN = 'DELETE_MEDECIN';
export const ADD_PATIENT = 'ADD_PATIENT';
export const UPDATE_PATIENT = 'UPDATE_PATIENT';
export const DELETE_PATIENT = 'DELETE_PATIENT';

export const addMedecin = (medecin) => ({
  type: ADD_MEDECIN,
  payload: medecin
});

export const updateMedecin = (id, medecin) => ({
  type: UPDATE_MEDECIN,
  payload: { id, medecin }
});

export const deleteMedecin = (id) => ({
  type: DELETE_MEDECIN,
  payload: id
});

export const addPatient = (patient) => ({
  type: ADD_PATIENT,
  payload: patient
});

export const updatePatient = (id, patient) => ({
  type: UPDATE_PATIENT,
  payload: { id, patient }
});

export const deletePatient = (id) => ({
  type: DELETE_PATIENT,
  payload: id
});

export const addAppointment = (appointment) => ({
  type: ADD_APPOINTMENT,
  payload: appointment
});

export const ADD_DOSSIER_MEDICAL = 'ADD_DOSSIER_MEDICAL';

export const addDossierMedical = (dossierMedical) => ({
  type: ADD_DOSSIER_MEDICAL,
  payload: dossierMedical
});

  