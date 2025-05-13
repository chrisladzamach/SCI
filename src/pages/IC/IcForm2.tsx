import { FormField } from "../../components/molecules/FormField";
import { Header } from "../../components/molecules/Header";
import { AutoDateTime } from "../../components/molecules/autoComponents/AutoDateTime";
import { CustomSelect } from "../../components/atoms/CustomSelect";
import { useState, useMemo } from "react";

interface Options {
  value: string;
  label: string;
}

export const IcForm2 = () => {
  const [productSelected, setProductSelected] = useState<Options | null>(null);
  const [boquillaSelected, setBoquillaSelected] = useState<Options | null>(null);

  const handleProductChange = (newValue: Options | null) => {
    setProductSelected(newValue);
    setBoquillaSelected(null);
  };

  const handleBoquillaChange = (newValue: Options | null) => setBoquillaSelected(newValue);

  const products: Options[] = [
    { value: 'uht', label: 'UHT' },
    { value: 'essi', label: 'ESSI' },
    { value: 'productoFermentado', label: 'Producto Fermentado' },
  ];

  const boquillasPermitidas = useMemo(() => {
    const allBoquillas: Options[] = [
      { value: 'mordIzq', label: 'Mordaza Izquierda' },
      { value: 'mordDer', label: 'Mordaza Derecha' },
      { value: 'cabA', label: 'Cabezal A' },
      { value: 'cabB', label: 'Cabezal B' },
      { value: 'slpk1', label: 'Solpak 1' },
      { value: 'slpk2', label: 'Solpak 2' },
      { value: 'slpk3', label: 'Solpak 3' },
      { value: 'slpk4', label: 'Solpak 4' },
    ];
    return {
      uht: allBoquillas.filter(boquilla => boquilla.value === 'mordIzq' || boquilla.value === 'mordDer'),
      essi: allBoquillas.filter(boquilla => boquilla.value === 'cabA' || boquilla.value === 'cabB'),
      productoFermentado: allBoquillas.filter(boquilla => boquilla.value.startsWith('slpk')),
    };
  }, []); 

  const boquillaOptions = useMemo(() => {
    if (productSelected && Object.prototype.hasOwnProperty.call(boquillasPermitidas, productSelected.value)) {
      return boquillasPermitidas[productSelected.value as keyof typeof boquillasPermitidas];
    }
    return [];
  }, [productSelected, boquillasPermitidas]);
  return (
    <div>
      <Header formName='Verificación de producto terminado.' formCode='(RE-05-LC)' />
      <form action="">
        <section className="border-b flex flex-col m-4 gap-2 border-zinc-400 pb-4">
          <AutoDateTime />
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
        <section className="grid grid-cols-1 md:grid-cols-2 gap-4 m-4">
          <CustomSelect
            id="producto"
            options={products}
            value={productSelected?.value}
            onChange={handleProductChange}
            className="w-full"
            label="Producto: "
          />
          <CustomSelect
            id="boquilla"
            options={boquillaOptions}
            value={boquillaSelected?.value}
            onChange={handleBoquillaChange}
            className="w-full"
            label="Boquilla: "
            // disabled={productSelected}
          />
        </section>
      </form>
    </div>
  );
};