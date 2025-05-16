import React from 'react';
import { useNavigate } from 'react-router-dom';

interface FormProps {
  formName: string;
  formCode: string;
  onBack?: () => void; // Prop para una función de "volver" personalizada
}

export const Header: React.FC<FormProps> = ({ formName, formCode, onBack }) => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    if (onBack) {
      onBack(); // Ejecutar la función de "volver" personalizada si se proporciona
    } else {
      navigate(-1); // Navegar a la página anterior en el historial
    }
  };

  return (
    <header className="max-w-screen px-2 bg-blue-400 text-white flex items-center gap-2 md:gap-4 md:p-4">
      <button className="p-2 max-h-[300px] cursor-pointer bg-blue-500 rounded-lg flex items-center" onClick={handleGoBack} >
        Volver
      </button>
      <section>
        <h2 className="text-xl font-semibold">{formName}</h2>
        <p className="text-xl font-mono">{formCode}</p>
      </section>
    </header>
  );
};