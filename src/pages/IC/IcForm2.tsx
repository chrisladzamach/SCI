import { useState, useMemo } from "react";

import { AutoDateTime } from "../../components/molecules/autoComponents/AutoDateTime";
import { ExpirationDate } from "../../components/molecules/ExpirationDate";
import { FormButtons } from "../../components/molecules/FormButtons";
import { CustomSelect } from "../../components/atoms/CustomSelect";
import { FormField } from "../../components/molecules/FormField";
import { TxtArea } from "../../components/atoms/inputs/TxtArea";
import { Header } from "../../components/molecules/Header";

interface Options {
  value: string;
  label: string;
}

export const IcForm2 = () => {
  const [responsibleSelected, setResponsibleSelected] = useState<Options | null>(null);
  const [boquillaSelected, setBoquillaSelected] = useState<Options | null>(null);
  const [productSelected, setProductSelected] = useState<Options | null>(null);
  const [calculatedDate, setCalculatedDate] = useState('');
  const [observations, setObservations] = useState('');
  const [lote, setLote] = useState('');
  
  const handleResponsibleChange = (newValue: string | number) => {
    const selectedResponsible = responsible.find(r => r.value === String(newValue));
    setResponsibleSelected(selectedResponsible || null);
  };

  const handleProductChange = (newValue: string | number) => {
    const selectedProduct = products.find(p => p.value === String(newValue));
    setProductSelected(selectedProduct || null);
    setBoquillaSelected(null);
  };

  const handleBoquillaChange = (newValue: string | number) => {
    const selectedBoquilla = boquillaOptions.find(b => b.value === String(newValue));
    setBoquillaSelected(selectedBoquilla || null);
  };

  const handleObservations = (event: React.ChangeEvent<HTMLTextAreaElement>) => setObservations(event.target.value);

  const handleLoteChange = (event: React.ChangeEvent<HTMLInputElement>) => setLote(event.target.value);

  const responsible: Options[] = [
    { value: 'inspector-calidad1', label: 'Juliana Burbano' },
    { value: 'inspector-calidad2', label: 'Wilder Barrero' },
    { value: 'sistemas-de-gestion', label: 'Liceth Alfonso' },
  ];

  const products: Options[] = [
    { value: 'UHT', label: 'UHT' },
    { value: 'ESSI', label: 'ESSI' },
    { value: 'ProductoFermentado', label: 'Producto Fermentado' },
  ];

  const boquillasPermitidas = useMemo(() => {
    const allBoquillas: Options[] = [
      { value: 'Mordaza Izquierda', label: 'Mordaza Izquierda' },
      { value: 'Mordaza Derecha', label: 'Mordaza Derecha' },
      { value: 'Cabezal A', label: 'Cabezal A' },
      { value: 'Cabezal B', label: 'Cabezal B' },
      { value: 'Solpak 1', label: 'Solpak 1' },
      { value: 'Solpak 2', label: 'Solpak 2' },
      { value: 'Solpak 3', label: 'Solpak 3' },
      { value: 'Solpak 4', label: 'Solpak 4' },
    ];
    return {
      UHT: allBoquillas.filter(boquilla => boquilla.value === 'Mordaza Izquierda' || boquilla.value === 'Mordaza Derecha'),
      ESSI: allBoquillas.filter(boquilla => boquilla.value === 'Cabezal A' || boquilla.value === 'Cabezal B'),
      ProductoFermentado: allBoquillas.filter(boquilla => boquilla.value.startsWith('Solpak')),
    };
  }, []); 

  const boquillaOptions = useMemo(() => {
    if (productSelected && Object.prototype.hasOwnProperty.call(boquillasPermitidas, productSelected.value)) {
      return boquillasPermitidas[productSelected.value as keyof typeof boquillasPermitidas];
    }
    return [];
  }, [productSelected, boquillasPermitidas]);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    
    const currentDate = new Date();
    const formData = {
      fecha: currentDate.toLocaleDateString(),
      hora: currentDate.toLocaleTimeString(),
      fechaVencimiento: calculatedDate,
      lote: lote, 
      producto: productSelected?.value || '',
      boquilla: boquillaSelected?.value || '',
      observaciones: observations,
      responsable: responsibleSelected?.value || '',
    };

    console.log(formData);
  };

  return (
    <div>
      <Header formName='Verificación de producto terminado.' formCode='(RE-05-LC)'/>
      <form className="p-4" onSubmit={handleSubmit}>
        <section className="grid grid-cols-2 md:grid-cols-1 gap-4 m-4">
          <AutoDateTime />
          <ExpirationDate 
            productType={productSelected?.value as 'UHT' | 'ESSI' | 'ProductoFermentado' | null}
            onDateCalculated={setCalculatedDate}
          />
          <CustomSelect
            options={responsible}
            value={responsibleSelected?.value}
            onChange={handleResponsibleChange}
            className="w-full"
            label="Responsable:"
          />
          <FormField
            labelText="Lote:"
            inputId="IcF1Lote"
            inputName="Lote"
            inputType="text"
            inputRequired={true}
            inputPlaceholder="Ingrese lote..."
            onChange={handleLoteChange}
          />
        </section>
        <section className="grid grid-cols-1 md:grid-cols-2 gap-4 m-4">
          <FormField
            labelText="Peso:"
            inputId="ICform1peso"
            inputName="Peso"
            inputType="number"
            inputRequired={true}
            inputPlaceholder="Ingrese peso..."
          />
          <FormField
            labelText="Nuevo Peso:"
            inputId="ICform1nuevopeso"
            inputName="NuevoPeso"
            inputType="number"
            inputRequired={true}
            inputPlaceholder="Ingrese nuevo peso..."
          />
        </section>
        <section className="grid grid-cols-1 md:grid-cols-1 gap-4 mt-4 p-4">
          <section className="grid grid-cols-2 md:grid-cols-2 gap-4">
            <CustomSelect
              options={products}
              value={productSelected?.value}
              onChange={handleProductChange}
              className="w-full"
              label="Producto: "
            />
            <CustomSelect
              options={boquillaOptions}
              value={boquillaSelected?.value}
              onChange={handleBoquillaChange}
              className="w-full"
              label="Boquilla: "
            />
          </section>
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
        <section className='flex justify-between gap-4 pt-4 mt-4 border-t border-zinc-400'>
          <FormButtons />
        </section>
      </form>
    </div>
  );
};