import { combineReducers } from 'redux';
import { ADD_APPOINTMENT } from './actions';


const medecinsReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_MEDECIN':
      return [...state, action.payload];
    case 'UPDATE_MEDECIN':
      return state.map(medecin => medecin.id === action.payload.id ? action.payload.medecin : medecin);
    case 'DELETE_MEDECIN':
      return state.filter(medecin => medecin.id !== action.payload);
    default:
      return state;
  }
};

const patientsReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_PATIENT':
      return [...state, action.payload];
    case 'UPDATE_PATIENT':
      return state.map(patient => patient.id === action.payload.id ? action.payload.patient : patient);
    case 'DELETE_PATIENT':
      return state.filter(patient => patient.id !== action.payload);
    default:
      return state;
  }

};


const appointmentsReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_APPOINTMENT:
      return [...state, action.payload];
    default:
      return state;
  }
};


export default combineReducers({
  medecins: medecinsReducer,
  patients: patientsReducer,
  appointments : appointmentsReducer
});


/*import { combineReducers } from 'redux';
import { ADD_APPOINTMENT } from './actions';

const initialState = {
  appointments: [],
  doctors: [],
  patients: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_APPOINTMENT:
      return {
        ...state,
        appointments: [...state.appointments, action.payload],
      };
    default:
      return state;
  }
};

export default rootReducer;*/

