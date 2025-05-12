import { AutoDateTime } from '../../components/molecules/autoComponents/AutoDateTime'
import { Header } from '../../components/molecules/Header'
import { AutoProductConcentration } from "../../components/molecules/autoComponents/AutoProductConcentration"
import CustomSelect from '../../components/atoms/CustomSelect';
import { useState } from 'react';

interface Options {
  value: string;
  label: string;
}

export const Form1 = () => {
  const [filterSelected, setFilterSelected] = useState<Options | null>(null);
  const [responsibleSelected, setResponsibleSelected] = useState<Options | null>(null);

  const handleFilterChange = (newValue: string) => setFilterSelected(newValue);
  const handleResponsibleChange = (newValue: string) => setResponsibleSelected(newValue);

  const filters: Options[] = [
    { value: 'filtro-de-area1', label: 'Filtro 1' },
    { value: 'filtro-de-area2', label: 'Filtro 2' },
    { value: 'filtro-de-area3', label: 'Filtro 3' },
  ]

  const responsible: Options[] = [
    { value: 'inspector-calidad1', label: 'Juliana Burbano' },
    { value: 'inspector-calidad2', label: 'Wilder Barrero' },
    { value: 'sistemas-de-gestion', label: 'Liceth Alfonso' },
  ];

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
  };

  return (
    <div className=''>
      <Header formName='Control de concentración de producto en filtro sanitario' formCode='(RE-09-LC)' />
      <form className='p-4' onSubmit={handleSubmit}>
        <section className="border-b flex flex-col gap-2 border-zinc-400">
          <AutoDateTime />
          <AutoProductConcentration />
        </section>
        <section className="grid grid-cols-2 gap-4 mt-2">
          <CustomSelect
            id="filtro-de-area"
            options={filters}
            value={filterSelected}
            onChange={handleFilterChange}
            className="w-full mb-4"
            label="Filtro de área"
          />
          <CustomSelect
            id="responsable-select"
            options={responsible}
            value={responsibleSelected}
            onChange={handleResponsibleChange}
            className="w-full mb-4" 
            label="Responsable"
          />

        </section>

      </form>
    </div>
  )
}