import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import Login from './src/components/Login';
import Dashboard from './src/components/Dashboard';
import Medecins from './src/components/Medecins';
import Patients from './src/components/Patients';
import Sidebar from './src/components/Sidebar';
import './src/styles/App.css';
import Appointments from './src/components/Appointments';
import Profile from './src/components/Profile';
import DossierMedical from './src/components/DossierMedical';

/*const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className="container">
          <Sidebar />
          
          <div className="main-content">
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/medecins" element={<Medecins />} />
              <Route path="/patients" element={<Patients />} />
              <Route path="/appointments" element={<Appointments />} />
              <Route path="/profile" element={<Profile />} />

            </Routes>
          </div>
        </div>
      </Router>
    </Provider>
  );
};

export default App;*/


const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <AppContent />
      </Router>
    </Provider>
  );
};

const AppContent = () => {
  const location = useLocation();
  const isLoginPage = location.pathname === '/';

  return (
    <div className="container">
      {!isLoginPage && <Sidebar />}
      <div className={`main-content ${isLoginPage ? 'full-width' : ''}`}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/medecins" element={<Medecins />} />
          <Route path="/patients" element={<Patients />} />
          <Route path="/appointments" element={<Appointments />} />
          <Route path="/dossier" element={<DossierMedical/>} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;

/*import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Medecins from './components/Medecins';
import Patients from './components/Patients';
import Appointments from './components/Appointments';
import Login from './components/Login';
import { useSelector, useDispatch } from 'react-redux';
import { addAppointment } from './redux/actions';
import './styles/App.css';

function App() {
  const appointments = useSelector(state => state.appointments);
  const doctors = useSelector(state => state.doctors);
  const patients = useSelector(state => state.patients);
  const dispatch = useDispatch();

  return (
    <Router>
      <div className="App">
        <Sidebar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/medecins" element={<Medecins />} />
          <Route path="/patients" element={<Patients />} />
          <Route path="/appointments" element={
            <Appointments 
              appointments={appointments} 
              doctors={doctors} 
              patients={patients} 
              addAppointment={(appointment) => dispatch(addAppointment(appointment))} 
            />
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
*/