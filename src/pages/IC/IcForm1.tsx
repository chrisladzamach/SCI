import { useState } from 'react';

import { AutoProductConcentration } from '../../components/molecules/autoComponents/AutoProductConcentration';
import { AutoDateTime } from '../../components/molecules/autoComponents/AutoDateTime';
import { CustomSelect } from '../../components/atoms/CustomSelect';
import { TxtArea } from '../../components/atoms/inputs/TxtArea';
import { Header } from '../../components/molecules/Header';

interface Options {
  value: string;
  label: string;
}

export const IcForm1 = () => {
  const [filterSelected, setFilterSelected] = useState<Options | null>(null);
  const [responsibleSelected, setResponsibleSelected] = useState<Options | null>(null);
  const [miTexto, setMiTexto] = useState('');

  const handleFilterChange = (newValue: Options | null) => setFilterSelected(newValue);
  const handleResponsibleChange = (newValue: Options | null) => setResponsibleSelected(newValue);
  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => setMiTexto(event.target.value);

  const filters: Options[] = [
    { value: 'filtro-de-area1', label: 'Filtro 1' },
    { value: 'filtro-de-area2', label: 'Filtro 2' },
    { value: 'filtro-de-area3', label: 'Filtro 3' },
  ];

  const responsible: Options[] = [
    { value: 'inspector-calidad1', label: 'Juliana Burbano' },
    { value: 'inspector-calidad2', label: 'Wilder Barrero' },
    { value: 'sistemas-de-gestion', label: 'Liceth Alfonso' },
  ];

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Aquí podría agregar la lógica para el envío del formulario (corroborrar)
    console.log('Formulario enviado');
    console.log('Filtro seleccionado:', filterSelected);
    console.log('Responsable seleccionado:', responsibleSelected);
    console.log('Texto ingresado:', miTexto);
  };

  return (
    <div className=''>
      <Header formName='Control de concentración de producto en filtro sanitario' formCode='(RE-09-LC)' />
      <form className='p-4' onSubmit={handleSubmit}>
        <section className="border-b flex flex-col gap-2 border-zinc-400 pb-2">
          <AutoDateTime />
          <AutoProductConcentration />
        </section>
        <section className="grid grid-cols-1 md:grid-cols-1 gap-4 mt-4">
          <CustomSelect
            id="filtro-de-area"
            options={filters}
            value={filterSelected?.value}
            onChange={handleFilterChange}
            className="w-full"
            label="Filtro de área"
          />
          <CustomSelect
            id="responsable-select"
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
            value={miTexto}
            onChange={handleChange}
            classNameTextArea="resize-none focus:border-blue-500"
            classNameLabel="text-blue-600"
          />
        </section>

        <section className='flex justify-between gap-4 pt-4 mt-4 border-t border-zinc-400'>
          <button 
            type="button" 
            className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-zinc-50 
            rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:bg-gray-200"
          >
            Cancelar
          </button>

          <button 
            type="submit" 
            className="text-white bg-blue-400 focus:bg-blue-500 font-medium rounded-lg text-sm px-5 py-2.5 
            me-2 mb-2 focus:outline-none"
            >
            Guardar registro
          </button>
        </section>
      </form>
    </div>
  );
};