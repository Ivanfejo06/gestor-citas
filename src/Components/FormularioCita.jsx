import React, { useState } from 'react';

const FormularioCita = ({ agregarCita }) => {
  const [mascota, setMascota] = useState('');
  const [dueno, setDueno] = useState('');
  const [fecha, setFecha] = useState('');
  const [hora, setHora] = useState('');
  const [sintomas, setSintomas] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    agregarCita({ mascota, dueno, fecha, hora, sintomas });
    setMascota('');
    setDueno('');
    setFecha('');
    setHora('');
    setSintomas('');
  };

  return (
    <div className="formulario-cita">
      <h2>CREAR MI CITA</h2>
      <form onSubmit={handleSubmit}>
        <div className='entrada'>
          <label>Nombre Mascota</label>
          <input type="text" value={mascota} onChange={(e) => setMascota(e.target.value)} />
        </div>
        <div className='entrada'>
          <label>Nombre Dueño</label>
          <input type="text" value={dueno} onChange={(e) => setDueno(e.target.value)} />
        </div>
        <div className='entrada'>
          <label>Fecha</label>
          <input type="date" value={fecha} onChange={(e) => setFecha(e.target.value)} />
        </div>
        <div className='entrada'>
          <label>Hora</label>
          <input type="time" value={hora} onChange={(e) => setHora(e.target.value)} />
        </div>
        <div className='entrada'>
          <label>Sintomas</label>
          <textarea value={sintomas} onChange={(e) => setSintomas(e.target.value)} />
        </div>
        <button type="submit">AGREGAR CITA</button>
      </form>
    </div>
  );
};

export default FormularioCita;