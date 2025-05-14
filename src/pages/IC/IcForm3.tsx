import { useState, useEffect } from "react";
import type React from "react";
import { Header } from "../../components/molecules/Header";
import { CustomSelect } from "../../components/atoms/CustomSelect"
import { AutoInputTime } from "../../components/atoms/inputs/automatic/AutoInputTime";
import { AutoDateTime } from "../../components/molecules/autoComponents/AutoDateTime";
import { FormField } from "../../components/molecules/FormField";
import { TxtArea } from "../../components/atoms/inputs/TxtArea";
import { FormButtons } from "../../components/molecules/FormButtons";

interface Options {
  value: string;
  label: string;
}

export const IcForm3 = () => {
  const [areaSelected, setAreaSelected] = useState<Options | null>(null);
  const [responsibleSelected, setResponsibleSelected] = useState<Options | null>(null);
  const [observations, setObservations] = useState('');
  const [temperatura, setTemperatura] = useState('');
  const [humedadRelativa, setHumedadRelativa] = useState('');
  const [registroInfo, setRegistroInfo] = useState<{ fecha: string; hora: string } | null>(null);

  useEffect(() => {
    const currentDate = new Date();
    const fecha = currentDate.toLocaleDateString();
    const hora = currentDate.toLocaleTimeString();
    setRegistroInfo({ fecha, hora });
  }, []); // El array vacío como segundo argumento asegura que esto solo se ejecute una vez al montar el componente

  const handleObservations = (event: React.ChangeEvent<HTMLTextAreaElement>) => setObservations(event.target.value);
  const handleTemperaturaChange = (event: React.ChangeEvent<HTMLInputElement>) => setTemperatura(event.target.value);
  const handleHumedadRelativaChange = (event: React.ChangeEvent<HTMLInputElement>) => setHumedadRelativa(event.target.value);


  const responsible: Options[] = [
    { value: 'inspector-calidad1', label: 'Juliana Burbano' },
    { value: 'inspector-calidad2', label: 'Wilder Barrero' },
    { value: 'sistemas-de-gestion', label: 'Liceth Alfonso'}
  ]

  const handleResponsibleChange = (newValue: string | number) => {
    const selectedResponsible = responsible.find(r => r.value === String(newValue));
    setResponsibleSelected(selectedResponsible || null);
  };

  const handleAreaChange = (newValue: string | number) => {
    const selectedArea = areas.find(a => a.value === String(newValue));
    setAreaSelected(selectedArea || null);
  };

  const areas: Options[] = [
    { value: 'area1', label: 'area1' },
    { value: 'area2', label: 'area2' },
    { value: 'area3', label: 'area3' },
  ];

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const formData = {
      fecha: registroInfo?.fecha || '',
      hora: registroInfo?.hora || '',
      area: areaSelected?.value || '',
      "T°C": temperatura,
      HumedadRelativa: humedadRelativa,
      responsable: responsibleSelected?.value || '',
      observaciones: observations,
    };
    console.log(formData);
    // Aquí podrías enviar los datos del formulario
  }

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
        </section>
        <section className="flex flex-col gap-4 p-4 border-1 border-b border-zinc-300">
          <AutoInputTime  />
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
          <CustomSelect
            options={responsible}
            value={responsibleSelected?.value}
            onChange={handleResponsibleChange}
            className="w-full"
            label="Responsable"
          />
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