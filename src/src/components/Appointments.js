/*import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';
import '../styles/Appointments.css';


const localizer = momentLocalizer(moment);

const Appointments = ({ appointments, doctors, patients, addAppointment }) => {
  const [newAppointment, setNewAppointment] = useState({
    patientId: '',
    doctorId: '',
    date: new Date(),
    time: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const appointment = {
      ...newAppointment,
      start: new Date(newAppointment.date.setHours(newAppointment.time.split(':')[0], newAppointment.time.split(':')[1])),
      end: new Date(newAppointment.date.setHours(newAppointment.time.split(':')[0], newAppointment.time.split(':')[1]) + 3600000), // 1 hour appointment
    };
    addAppointment(appointment);
  };

  return (
    <div className="appointments">
      <h2>Gestion des Rendez-vous</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Patient:</label>
          <select value={newAppointment.patientId} onChange={(e) => setNewAppointment({ ...newAppointment, patientId: e.target.value })}>
            <option value="">Select Patient</option>
            {patients.map(patient => (
              <option key={patient.id} value={patient.id}>{patient.name}</option>
            ))}
          </select>
        </div>
        <div>
          <label>Médecin:</label>
          <select value={newAppointment.doctorId} onChange={(e) => setNewAppointment({ ...newAppointment, doctorId: e.target.value })}>
            <option value="">Select Doctor</option>
            {doctors.map(doctor => (
              <option key={doctor.id} value={doctor.id}>{doctor.name}</option>
            ))}
          </select>
        </div>
        <div>
          <label>Date:</label>
          <DatePicker selected={newAppointment.date} onChange={(date) => setNewAppointment({ ...newAppointment, date })} />
        </div>
        <div>
          <label>Heure:</label>
          <input type="time" value={newAppointment.time} onChange={(e) => setNewAppointment({ ...newAppointment, time: e.target.value })} />
        </div>
        <button type="submit">Ajouter Rendez-vous</button>
      </form>

      <Calendar
        localizer={localizer}
        events={appointments}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
      />
    </div>
  );
};

export default Appointments;*/




// components/Appointments.js
/*import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import DatePicker from 'react-datepicker';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import 'react-datepicker/dist/react-datepicker.css';
import { addAppointment } from '../redux/actions';
import '../styles/Appointments.css';

const localizer = momentLocalizer(moment);

const Appointments = ({ appointments, doctors, patients, addAppointment }) => {
  const [newAppointment, setNewAppointment] = useState({
    patientId: '',
    doctorId: '',
    date: new Date(),
    time: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const appointment = {
      ...newAppointment,
      start: new Date(newAppointment.date.setHours(newAppointment.time.split(':')[0], newAppointment.time.split(':')[1])),
      end: new Date(newAppointment.date.setHours(newAppointment.time.split(':')[0], newAppointment.time.split(':')[1]) + 3600000), // 1 hour appointment
    };
    addAppointment(appointment);
  };

  if (!patients || !doctors) {
    return <div>Loading...</div>;
  }

  return (
    <div className="appointments">
      <h2>Gestion des Rendez-vous</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Patient:</label>
          <select value={newAppointment.patientId} onChange={(e) => setNewAppointment({ ...newAppointment, patientId: e.target.value })}>
            <option value="">Select Patient</option>
            {patients.map(patient => (
              <option key={patient.id} value={patient.id}>{patient.name}</option>
            ))}
          </select>
        </div>
        <div>
          <label>Médecin:</label>
          <select value={newAppointment.doctorId} onChange={(e) => setNewAppointment({ ...newAppointment, doctorId: e.target.value })}>
            <option value="">Select Doctor</option>
            {doctors.map(doctor => (
              <option key={doctor.id} value={doctor.id}>{doctor.name}</option>
            ))}
          </select>
        </div>
        <div>
          <label>Date:</label>
          <DatePicker selected={newAppointment.date} onChange={(date) => setNewAppointment({ ...newAppointment, date })} />
        </div>
        <div>
          <label>Heure:</label>
          <input type="time" value={newAppointment.time} onChange={(e) => setNewAppointment({ ...newAppointment, time: e.target.value })} />
        </div>
        <button type="submit">Ajouter Rendez-vous</button>
      </form>

      <Calendar
        localizer={localizer}
        events={appointments}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  appointments: state.appointments,
  doctors: state.medecins, // Assurez-vous que c'est le bon nom de propriété
  patients: state.patients,
});

const mapDispatchToProps = (dispatch) => ({
  addAppointment: (appointment) => dispatch(addAppointment(appointment)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Appointments);*/




import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import DatePicker from 'react-datepicker';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import 'react-datepicker/dist/react-datepicker.css';
import { addAppointment } from '../redux/actions';
import '../styles/Appointments.css';

const localizer = momentLocalizer(moment);

const Appointments = ({ appointments, doctors, patients, addAppointment }) => {
  const [newAppointment, setNewAppointment] = useState({
    patientId: '',
    doctorId: '',
    date: new Date(),
    time: ''
  });

  useEffect(() => {
    console.log("Doctors:", doctors);
    console.log("Patients:", patients);
  }, [doctors, patients]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const appointment = {
      ...newAppointment,
      start: new Date(newAppointment.date.setHours(newAppointment.time.split(':')[0], newAppointment.time.split(':')[1])),
      end: new Date(newAppointment.date.setHours(newAppointment.time.split(':')[0], newAppointment.time.split(':')[1]) + 3600000), // 1 hour appointment
    };
    addAppointment(appointment);
  };

  return (
    <div className="appointments">
      <h2>Gestion des Rendez-vous</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Patient:</label>
          <select value={newAppointment.patientId} onChange={(e) => setNewAppointment({ ...newAppointment, patientId: e.target.value })}>
            <option value="">Select Patient</option>
            {patients && patients.map(patient => (
              <option key={patient.id} value={patient.id}>{patient.name}</option>
            ))}
          </select>
        </div>
        <div>
          <label>Médecin:</label>
          <select value={newAppointment.doctorId} onChange={(e) => setNewAppointment({ ...newAppointment, doctorId: e.target.value })}>
            <option value="">Select Doctor</option>
            {doctors && doctors.map(doctor => (
              <option key={doctor.id} value={doctor.id}>{doctor.name}</option>
            ))}
          </select>
        </div>
        <div>
          <label>Date:</label>
          <DatePicker selected={newAppointment.date} onChange={(date) => setNewAppointment({ ...newAppointment, date })} />
        </div>
        <div>
          <label>Heure:</label>
          <input type="time" value={newAppointment.time} onChange={(e) => setNewAppointment({ ...newAppointment, time: e.target.value })} />
        </div>
        <button type="submit">Ajouter Rendez-vous</button>
      </form>

      <Calendar
        localizer={localizer}
        events={appointments}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  appointments: state.appointments,
  doctors: state.medecins,
  patients: state.patients,
});

const mapDispatchToProps = (dispatch) => ({
  addAppointment: (appointment) => dispatch(addAppointment(appointment)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Appointments);

