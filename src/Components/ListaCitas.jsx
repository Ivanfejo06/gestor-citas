import React from 'react';
import CitaCard from './CitaCard';

const ListaCitas = ({ citas, eliminarCita }) => {
  return (
    <div className="lista-citas">
      <h2>ADMINISTRA TUS CITAS</h2>
      {citas.map((cita) => (
        <CitaCard key={cita.id} cita={cita} eliminarCita={eliminarCita} />
      ))}
    </div>
  );
};

export default ListaCitas;