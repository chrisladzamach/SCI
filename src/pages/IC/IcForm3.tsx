import { useState, useEffect } from "react";
import type React from "react";

import { AutoDateTime } from "../../components/molecules/autoComponents/AutoDateTime";
import { AutoInputTime } from "../../components/atoms/inputs/automatic/AutoInputTime";
import { FormButtons } from "../../components/molecules/FormButtons";
import { CustomSelect } from "../../components/atoms/CustomSelect";
import { FormField } from "../../components/molecules/FormField";
import { TxtArea } from "../../components/atoms/inputs/TxtArea";
import { Header } from "../../components/molecules/Header";

interface Options {
  value: string;
  label: string;
}

export const IcForm3 = () => {
  const [registroInfo, setRegistroInfo] = useState<{ fecha: string; hora: string } | null>(null);
  const [responsibleSelected, setResponsibleSelected] = useState<Options | null>(null);
  const [areaSelected, setAreaSelected] = useState<Options | null>(null);
  const [humedadRelativa, setHumedadRelativa] = useState('');
  const [observations, setObservations] = useState('');
  const [temperatura, setTemperatura] = useState('');

  // Estados para los mensajes de error
  const [humedadRelativaError, setHumedadRelativaError] = useState('');
  const [temperaturaError, setTemperaturaError] = useState('');
  const [responsibleError, setResponsibleError] = useState('');
  const [areaError, setAreaError] = useState('');
  
  useEffect(() => {
    const currentDate = new Date();
    const fecha = currentDate.toLocaleDateString();
    const hora = currentDate.toLocaleTimeString();
    setRegistroInfo({ fecha, hora });
  }, []);

  const handleObservations = (event: React.ChangeEvent<HTMLTextAreaElement>) => setObservations(event.target.value);
  const handleTemperaturaChange = (event: React.ChangeEvent<HTMLInputElement>) => setTemperatura(event.target.value);
  const handleHumedadRelativaChange = (event: React.ChangeEvent<HTMLInputElement>) => setHumedadRelativa(event.target.value);

  const responsible: Options[] = [
    { value: 'inspector-calidad1', label: 'Juliana Burbano' },
    { value: 'inspector-calidad2', label: 'Wilder Barrero' },
    { value: 'sistemas-de-gestion', label: 'Liceth Alfonso' },
  ];

  const handleResponsibleChange = (newValue: string | number) => {
    const selectedResponsible = responsible.find((r) => r.value === String(newValue));
    setResponsibleSelected(selectedResponsible || null);
  };

  const handleAreaChange = (newValue: string | number) => {
    const selectedArea = areas.find((a) => a.value === String(newValue));
    setAreaSelected(selectedArea || null);
  };

  const areas: Options[] = [
    { value: 'area1', label: 'area1' },
    { value: 'area2', label: 'area2' },
    { value: 'area3', label: 'area3' },
  ];

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const now = new Date();
    const isMorning = now.getHours() >= 6 && now.getHours() < 12;
    const momentoDelDia = isMorning ? 'Mañana' : 'Tarde';

    let hasErrors = false;

    setAreaError('');
    setTemperaturaError('');
    setHumedadRelativaError('');
    setResponsibleError('');

    if (!areaSelected) {
      setAreaError('Falta seleccionar el área');
      hasErrors = true;
    }
    if (!temperatura) {
      setTemperaturaError('Falta la temperatura');
      hasErrors = true;
    }
    if (!humedadRelativa) {
      setHumedadRelativaError('Falta la humedad relativa');
      hasErrors = true;
    }
    if (!responsibleSelected) {
      setResponsibleError('Falta seleccionar el responsable');
      hasErrors = true;
    }

    if (hasErrors) return;

    const formData = {
      momentoDelDia: momentoDelDia,
      fecha: registroInfo?.fecha,
      hora: registroInfo?.hora,
      area: areaSelected?.value,
      "T°C": temperatura,
      HumedadRelativa: humedadRelativa,
      responsable: responsibleSelected?.value || '',
      observaciones: observations,
    };
    console.log(formData);
  };

  return (
    <div>
      <Header formCode="(RE-06-LC)" formName="Verificación de condiciones ambientales" />
      <form onSubmit={handleSubmit}>
        <section className="flex flex-col gap-4 p-4 border-1 border-b border-zinc-300">
          {registroInfo && <AutoDateTime />}
          <CustomSelect
            options={areas}
            value={areaSelected?.value}
            onChange={handleAreaChange}
            className="w-full"
            label="Area:"
          />
          {areaError && <p className="text-red-500 text-sm">{areaError}</p>}
        </section>
        <section className="flex flex-col gap-4 p-4 border-1 border-b border-zinc-300">
          <AutoInputTime />
          <FormField
            labelText="T°C:"
            inputId="Temperatura°C"
            inputName="T°C"
            inputType="number"
            inputRequired={true}
            inputPlaceholder="Ingrese Temperatura en grados centígrados..."
            inputValue={temperatura}
            onChange={handleTemperaturaChange}
          />
          {temperaturaError && <p className="text-red-500 text-sm">{temperaturaError}</p>}
          <FormField
            labelText="Humedad relativa:"
            inputId="HumedadR"
            inputName="HumedadRelativa"
            inputType="number"
            inputRequired={true}
            inputPlaceholder="Ingrese Humedad Relativa..."
            inputValue={humedadRelativa}
            onChange={handleHumedadRelativaChange}
          />
          {humedadRelativaError && <p className="text-red-500 text-sm">{humedadRelativaError}</p>}
          <CustomSelect
            options={responsible}
            value={responsibleSelected?.value}
            onChange={handleResponsibleChange}
            className="w-full"
            label="Responsable"
          />
          {responsibleError && <p className="text-red-500 text-sm">{responsibleError}</p>}
          <TxtArea
            id="Observations"
            name="Observations"
            label="Observaciones"
            rows={5}
            placeholder="Ingrese observaciones si las hay..."
            value={observations}
            onChange={handleObservations}
            classNameTextArea="resize-none focus:border-blue-500"
            classNameLabel="text-blue-600"
          />
        </section>
        <FormButtons />
      </form>
    </div>
  );
};