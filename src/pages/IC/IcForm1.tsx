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
  const [observations, setObservations] = useState('');

  const handleObservationChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setObservations(event.target.value);
  };

  const handleFilterChange = (newValue: string | number) => {
    const selectedFilter = filters.find(f => f.value === String(newValue));
    setFilterSelected(selectedFilter || null);
  };

  const handleResponsibleChange = (newValue: string | number) => {
    const selectedResponsible = responsible.find(r => r.value === String(newValue));
    setResponsibleSelected(selectedResponsible || null);
  };

  const filters: Options[] = [
    { value: 'Filtro-UHT', label: 'Filtro UHT' },
    { value: 'Filtro-Fermentados', label: 'Filtro Fermentados' },
    { value: 'Filtro-Bodega', label: 'Filtro Bodega' },
    { value: 'Filtro-Bodega-UHT', label: 'Filtro Bodega UHT' },
  ];

  const responsible: Options[] = [
    { value: 'inspector-calidad1', label: 'Juliana Burbano' },
    { value: 'inspector-calidad2', label: 'Wilder Barrero' },
    { value: 'sistemas-de-gestion', label: 'Liceth Alfonso' },
  ];

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (!filterSelected || !responsibleSelected) return;

    const currentDate = new Date();
    const formData = {
      fecha: currentDate.toLocaleDateString(),
      hora: currentDate.toLocaleTimeString(),
      producto: 'Divosan',
      concentration: '0.20%',
      filtro: filterSelected?.value || '',
      responsable: responsibleSelected?.value || '',
      observaciones: observations,
    };

    console.log(formData);
  };

  return (
    <div className=''>
      <Header formName='Control de concentración de producto en filtro sanitario' formCode='(RE-09-LC)' href='/icmain' />
      <form className='p-4' onSubmit={handleSubmit}>
        <section className="border-b flex flex-col gap-2 border-zinc-400 pb-2">
          <AutoDateTime />
          <AutoProductConcentration />
        </section>
        <section className="grid grid-cols-1 md:grid-cols-1 gap-4 mt-4">
          <CustomSelect
            options={filters}
            value={filterSelected?.value}
            onChange={handleFilterChange}
            className="w-full"
            label="Filtro de área"
            required
          />
          <CustomSelect
            options={responsible}
            value={responsibleSelected?.value}
            onChange={handleResponsibleChange}
            className="w-full"
            label="Responsable"
            required
          />
          <TxtArea
            id="Observations"
            name="Observations"
            label="Observaciones"
            rows={5}
            placeholder="Ingrese observaciones si las hay..."
            value={observations}
            onChange={handleObservationChange}
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