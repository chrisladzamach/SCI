import { useState } from "react";

import { AutoDateTime } from "../../components/molecules/autoComponents/AutoDateTime";
import { FormButtons } from "../../components/molecules/FormButtons";
import { CustomSelect } from "../../components/atoms/CustomSelect";
import { InputCNC }from "../../components/atoms/inputs/InputCNC";
import { TxtArea } from "../../components/atoms/inputs/TxtArea";
import { Header } from "../../components/molecules/Header";

interface Options {
  value: string;
  label: string;
}

export const IcForm4 = () => {
  const [cumpleRequisito1, setCumpleRequisito1] = useState('');
  const [cumpleRequisito2, setCumpleRequisito2] = useState('');
  const [cumpleRequisito3, setCumpleRequisito3] = useState('');
  const [cumpleRequisito4, setCumpleRequisito4] = useState('');
  const [cumpleRequisito5, setCumpleRequisito5] = useState('');
  const [cumpleRequisito6, setCumpleRequisito6] = useState('');
  const [cumpleRequisito7, setCumpleRequisito7] = useState('');
  const [cumpleRequisito8, setCumpleRequisito8] = useState('');
  const [cumpleRequisito9, setCumpleRequisito9] = useState('');
  const [cumpleRequisito10, setCumpleRequisito10] = useState('');
  const [observations, setObservations] = useState('');
  const [verificationOfficerSelected, setVerificationOfficerSelected] = useState<Options | null>(null);
  const [approvalOfficerSelected, setApprovalOfficerSelected] = useState<Options | null>(null);

  const handleObservations = (event: React.ChangeEvent<HTMLTextAreaElement>) => setObservations(event.target.value);
  
  const handleApprovalOfficerChange = (newValue: string | number) => {
    const selectedApprovalOfficer = approvalOfficer.find(r => r.value === String(newValue));
    setApprovalOfficerSelected(selectedApprovalOfficer || null);
  };
  const handleVerificationOfficerChange = (newValue: string | number) => {
    const selectedVerificationOfficer = verificationOfficer.find(r => r.value === String(newValue));
    setVerificationOfficerSelected(selectedVerificationOfficer || null);
  };

  const handleCumpleRequisito1Change = (valor: string) => {
    setCumpleRequisito1(valor);
  };
  const handleCumpleRequisito2Change = (valor: string) => {
    setCumpleRequisito2(valor);
  };
  const handleCumpleRequisito3Change = (valor: string) => {
    setCumpleRequisito3(valor);
  };
  const handleCumpleRequisito4Change = (valor: string) => {
    setCumpleRequisito4(valor);
  };
  const handleCumpleRequisito5Change = (valor: string) => {
    setCumpleRequisito5(valor);
  };
  const handleCumpleRequisito6Change = (valor: string) => {
    setCumpleRequisito6(valor);
  };
  const handleCumpleRequisito7Change = (valor: string) => {
    setCumpleRequisito7(valor);
  };
  const handleCumpleRequisito8Change = (valor: string) => {
    setCumpleRequisito8(valor);
  };
  const handleCumpleRequisito9Change = (valor: string) => {
    setCumpleRequisito9(valor);
  };
  const handleCumpleRequisito10Change = (valor: string) => {
    setCumpleRequisito10(valor);
  };

  const verificationOfficer: Options[] = [
    { value: 'inspector-calidad1', label: 'Juliana Burbano' },
    { value: 'inspector-calidad2', label: 'Wilder Barrero' },
    { value: 'sistemas-de-gestion', label: 'Liceth Alfonso' },
  ];

  const approvalOfficer: Options[] = [
    { value: 'Jefe de Calidad', label: 'Felipe algo' },
  ]

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if ( !cumpleRequisito1 || !cumpleRequisito2 || !cumpleRequisito3 || !cumpleRequisito4 || 
      !cumpleRequisito5 || !cumpleRequisito6 || !cumpleRequisito7 || !cumpleRequisito8 || 
      !cumpleRequisito9 || !cumpleRequisito10 || !verificationOfficerSelected || !approvalOfficerSelected ) {
      alert('Por favor, complete todos los requisitos antes de guardar.');
      return;
    }

    const currentDate = new Date();
    const formData = {
      fecha: currentDate.toLocaleDateString(),
      hora: currentDate.toLocaleTimeString(),
      requisito1: cumpleRequisito1,
      requisito2: cumpleRequisito2,
      requisito3: cumpleRequisito3,
      requisito4: cumpleRequisito4,
      requisito5: cumpleRequisito5,
      requisito6: cumpleRequisito6,
      requisito7: cumpleRequisito7,
      requisito8: cumpleRequisito8,
      requisito9: cumpleRequisito9,
      requisito10: cumpleRequisito10,
      observaciones: observations,
      responsableVerificacion: verificationOfficerSelected?.value || '',
      responsableAprobacion: approvalOfficerSelected?.value || '',
    };

    console.log(formData);
  };

  return (
    <div>
      <Header formCode="(RE-07-LC)" formName="Inspección de limpieza y desinfección en planta" href="/icmain" />
      <form action="" onSubmit={handleSubmit} className="p-4">
        <section className="grid grid-cols-2 md:grid-cols-1 gap-4">
          <AutoDateTime />
        </section>
        <section className="grid grid-cols-2 gap-x-10 gap-y-4 p-4 my-4 border-1 border-b border-zinc-300">
          <InputCNC
            nombreCriterio="Ventanas, Puertas y otras aberturas."
            value={cumpleRequisito1}
            onChange={handleCumpleRequisito1Change}
            name="vpoa"
          />

          <InputCNC
            nombreCriterio="Pisos"
            value={cumpleRequisito2}
            onChange={handleCumpleRequisito2Change}
            name="Pisos"
          />
          
          <InputCNC
            nombreCriterio="Paredes"
            value={cumpleRequisito3}
            onChange={handleCumpleRequisito3Change}
            name="Paredes"
          />

          <InputCNC
            nombreCriterio="Techos"
            value={cumpleRequisito4}
            onChange={handleCumpleRequisito4Change}
            name="Techos"
          />

          <InputCNC
            nombreCriterio="Mesas"
            value={cumpleRequisito5}
            onChange={handleCumpleRequisito5Change}
            name="Mesas"
          />

          <InputCNC
            nombreCriterio="Máquina ESSI"
            value={cumpleRequisito6}
            onChange={handleCumpleRequisito6Change}
            name="MaquinaESSI"
          />

          <InputCNC
            nombreCriterio="Sifones y drenajes"
            value={cumpleRequisito7}
            onChange={handleCumpleRequisito7Change}
            name="Sifonesydrenajes"
          />

          <InputCNC
            nombreCriterio="Disposición de basura"
            value={cumpleRequisito8}
            onChange={handleCumpleRequisito8Change}
            name="DisposicionBasura"
          />

          <InputCNC
            nombreCriterio="Tuberías de leche"
            value={cumpleRequisito9}
            onChange={handleCumpleRequisito9Change}
            name="Tuberiasdeleche"
          />

          <InputCNC
            nombreCriterio="Orden de área"
            value={cumpleRequisito10}
            onChange={handleCumpleRequisito10Change}
            name="ordendearea"
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
            classNameLabel="text-blue-600 w-full"
          />
        <section className="flex gap-4 my-8">
          <CustomSelect 
            options={verificationOfficer}
            value={verificationOfficerSelected?.value}
            onChange={handleVerificationOfficerChange}
            className="w-full"
            label="Responsable de verificación:"
          />
          <CustomSelect
            options={approvalOfficer}
            value={approvalOfficerSelected?.value}
            onChange={handleApprovalOfficerChange}
            className="w-full"
            label="Responsable de aprobación:"
          />
        </section>
        <FormButtons />
      </form>
    </div>
  )
}
