import React from 'react';

const CitaCard = ({ cita, eliminarCita }) => {
  return (
    <div className="cita-card">
      <p>Mascota: <span>{cita.mascota}</span></p>
      <p>Dueño: <span>{cita.dueno}</span></p>
      <p>Fecha: <span>{cita.fecha}</span></p>
      <p>Hora: <span>{cita.hora}</span></p>
      <p>Sintomas: <span>{cita.sintomas}</span></p>
      <button onClick={() => eliminarCita(cita.id)}>ELIMINAR</button>
    </div>
  );
};

export default CitaCard;