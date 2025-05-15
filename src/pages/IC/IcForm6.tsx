import React from 'react'

import { AutoDateTime } from "../../components/molecules/autoComponents/AutoDateTime";
import { FormButtons } from "../../components/molecules/FormButtons";
import { CustomSelect } from "../../components/atoms/CustomSelect";
import { TxtArea } from '../../components/atoms/inputs/TxtArea';
import { Header } from "../../components/molecules/Header";

interface Options {
  value: string;
  label: string;
}

export const IcForm6 = () => {
  const [areaSelected, setAreaSelected] = React.useState<Options | null>(null);
  const [productSelected, setProductSelected ] = React.useState<Options | null>(null);
  const [concentrationSelected, setConcentrationSelected] = React.useState<Options | null>(null);
  const [observations, setObservations] = React.useState('');
  const [responsibleSelected, setResponsibleSelected] = React.useState<Options | null>(null);

  const handleResponsibleChange = (newValue: string | number) => {
    const selectedResponsible = responsible.find(r => r.value === String(newValue));
    setResponsibleSelected(selectedResponsible || null);
  };

  const handleObservationChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setObservations(event.target.value);
  };

  const handleAreaChange = (newValue: string | number) => {
    const selectedArea = areas.find(r => r.value === String(newValue));
    setAreaSelected(selectedArea || null);
  };

  const handleProduct = (newValue: string | number) => {
    const selectedProduct = product.find(r => r.value === String(newValue));
    setProductSelected(selectedProduct || null);
  };

  const handleConcentration = (newValue: string | number) => {
    const selectedConcentration = concentration.find(r => r.value === String(newValue));
    setConcentrationSelected(selectedConcentration || null);
  };
  
  const responsible: Options[] = [
    { value: 'inspector-calidad1', label: 'Juliana Burbano' },
    { value: 'inspector-calidad2', label: 'Wilder Barrero' },
    { value: 'sistemas-de-gestion', label: 'Liceth Alfonso' },
  ];

  const areas: Options[] = [
    { value: 'Area 1', label: 'Area 1' },
    { value: 'Area 2', label: 'Area 2' },
    { value: 'Area 3', label: 'Area 3' },
  ];
  
  const product: Options[] = [
    { value: "producto1", label: "Producto 1" },
    { value: "producto2", label: "Producto 2" },
    { value: "producto3", label: "Producto 3" },
  ];
  
  const concentration: Options[] = [
    { value: "concentration1", label: "0.20%" },
    { value: "concentration2", label: "0.40%" },
    { value: "concentration3", label: "0.60%" },
  ];
  
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    
    const currentDate = new Date();
    const formData = {
      fecha: currentDate.toLocaleDateString(),
      area: areaSelected?.value || '',
      producto: productSelected?.value || '',
      concentracion: concentrationSelected?.value || '',
      responsable: responsibleSelected?.value || '',
      observaciones: observations,
    };
    console.log(formData);
  };

  return (
    <div>
      <Header formCode='(RE-08-LC)' formName='Control de aspersiones ambientales.' />
      <form action="" onSubmit={handleSubmit} className="p-4">
        <section className="border-b flex flex-col gap-2 border-zinc-400 pb-4">
          <AutoDateTime />
        </section>
        <section>
          <CustomSelect 
            options={areas}
            value={areaSelected?.value}
            onChange={handleAreaChange}
            className="w-full"
            label="Area: "
            required
          />

          <CustomSelect 
            options={product}
            value={productSelected?.value}
            onChange={handleProduct}
            className="w-full"
            label="Producto: "
            required
          />

          <CustomSelect 
            options={concentration}
            value={concentrationSelected?.value}
            onChange={handleConcentration}
            className="w-full"
            label="Concentración: "
            required
          />

          <CustomSelect 
            options={responsible}
            value={responsibleSelected?.value}
            onChange={handleResponsibleChange}
            className="w-full"
            label="Responsable: "
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
        <FormButtons />
      </form>
    </div>
  );
};
