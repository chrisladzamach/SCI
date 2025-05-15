import React, { useState } from 'react'

import { AutoInputDate } from '../../components/atoms/inputs/automatic/AutoInputDate'
import { LabelComponent } from '../../components/atoms/LabelComponent';
import { FormButtons } from '../../components/molecules/FormButtons';
import { CustomSelect } from '../../components/atoms/CustomSelect';
import { FormField } from '../../components/molecules/FormField';
import { TxtArea } from '../../components/atoms/inputs/TxtArea';
import { Header } from '../../components/molecules/Header';

interface Options {
  value: string;
  label: string;
}

export const IcForm5 = () => {
  const [areaSelected, setAreaSelected] = React.useState<Options | null>(null);
  const [verificationOfficerSelected, setVerificationOfficerSelected] = useState<Options | null>(null);
  const [personalInspected, setPersonalInspected] = useState<string>('');
  const [observations, setObservations] = useState('');
  const [criterioSeleccionado, setCriterioSeleccionado] = useState<{ [key: number]: string }>({});
  const [errores, setErrores] = useState<{ [key: string]: string }>({});

  const handleObservations = (event: React.ChangeEvent<HTMLTextAreaElement>) => setObservations(event.target.value);

  const handleAreaChange = (newValue: string | number) => {
    const selectedArea = areas.find(r => r.value === String(newValue));
    setAreaSelected(selectedArea || null);
    setErrores(prev => ({ ...prev, area: '' }));
  };

  const handleVerificationOfficerChange = (newValue: string | number) => {
    const selectedVerificationOfficer = verificationOfficer.find(r => r.value === String(newValue));
    setVerificationOfficerSelected(selectedVerificationOfficer || null);
    setErrores(prev => ({ ...prev, responsableVerificacion: '' }));
  };

  const handlePersonalInspectedChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPersonalInspected(event.target.value);
    setErrores(prev => ({ ...prev, personalInspeccionado: '' }));
  };

  const handleCriterioChange = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
    setCriterioSeleccionado({ ...criterioSeleccionado, [index]: event.target.value });
    setErrores(prev => ({ ...prev, [`criterio-${index}`]: '' }));
  };

  const criterios = [
    "¿El personal manipulador de alimentos cumple con una estricta limpieza e higiene personal y aplica buenas prácticas higiénicas en sus labores, de manera que se evite la contaminación del alimento y de las superficies de contacto con éste?",
    "¿El personal manipulador de alimentos usa vestimenta de trabajo que cumpla los siguientes requisitos: De color claro que permita visualizar fácilmente su limpieza. ¿Se encuentra la vestimenta limpia y en buen estado?",
    "¿El manipulador de alimentos sale e ingresa al establecimiento con indumentaria diferente a la vestimenta de trabajo?",
    "¿El manipulador de alimentos se lava las manos con agua y jabón desinfectante, antes de comenzar su trabajo, cada vez que salga y regrese al área asignada y después de manipular cualquier material u objeto que pudiese representar un riesgo de contaminación para el alimento?",
    "El manipulador de alimentos mantiene el cabello recogido y cubierto totalmente mediante malla, gorro u otro medio efectivo y en caso de llevar barba, bigote o patillas usa cubiertas para estas.",
    "¿El manipulador de alimentos no usa maquillaje?",
    "¿El manipulador de alimentos no usa perfume?",
    "¿El manipulador de alimentos dependiendo del riesgo de contaminación asociado con el proceso o preparación usa tapabocas desechables cubriendo nariz y boca mientras manipula el alimento?",
    "¿El personal manipulador de alimentos mantiene las uñas cortas, limpias y sin esmalte?",
    "¿El manipulador de alimentos no usa reloj, anillos, aretes, joyas u otros accesorios durante la manipulación del alimento?",
    "¿El personal manipulador de alimentos usa calzado cerrado, de material resistente e impermeable y de tacón bajo?",
    "¿El personal manipulador de alimentos en caso usar de guantes mantiene estos limpios, sin roturas o desperfectos y trata estos con el mismo cuidado higiénico de las manos sin protección?",
    "¿El personal manipulador de alimentos no come, bebe o mastica cualquier objeto o producto, como tampoco fuma o escupe en las áreas donde se manipulan alimentos?",
    "¿El personal que presente afecciones de la piel o enfermedad infecto-contagiosa esta excluido de toda actividad directa de manipulación de alimentos?",
    "¿Los manipuladores no se sientan, acuestan, inclinan o similares en el pasto, andenes o lugares donde la ropa de trabajo pueda contaminarse?",
  ];

  const verificationOfficer: Options[] = [
    { value: 'inspector-calidad1', label: 'Juliana Burbano' },
    { value: 'inspector-calidad2', label: 'Wilder Barrero' },
    { value: 'sistemas-de-gestion', label: 'Liceth Alfonso' },
  ];

  const areas: Options[] = [
    { value: 'Area 1', label: 'Area 1' },
    { value: 'Area 2', label: 'Area 2' },
    { value: 'Area 3', label: 'Area 3' },
  ];

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    let hasErrors = false;
    const nuevosErrores: { [key: string]: string } = {};

    if (!areaSelected) {
      nuevosErrores.area = 'Falta completar este campo';
      hasErrors = true;
    }

    if (!verificationOfficerSelected) {
      nuevosErrores.responsableVerificacion = 'Falta completar este campo';
      hasErrors = true;
    }

    if (!personalInspected) {
      nuevosErrores.personalInspeccionado = 'Falta completar este campo';
      hasErrors = true;
    }

    criterios.forEach((_, index) => {
      if (!criterioSeleccionado[index]) {
        nuevosErrores[`criterio-${index}`] = 'Falta seleccionar una opción';
        hasErrors = true;
      }
    });

    setErrores(nuevosErrores);

    if (hasErrors) {
      return;
    }

    const currentDate = new Date();
    const formData = {
      fecha: currentDate.toLocaleDateString(),
      hora: currentDate.toLocaleTimeString(),
      area: areaSelected?.value || '',
      responsableVerificacion: verificationOfficerSelected?.value || '',
      personalInspeccionado: personalInspected,
      criterios: criterios.map((criterio, index) => ({
        criterio: criterio,
        seleccion: criterioSeleccionado[index] || null,
        observaciones: observations,
      })),
    };
    console.log(formData);
  };

  return (
    <div>
      <Header formCode='(RE-01-LC)' formName='Formato de practicas higiénicas y medidas de protección' />
      <form className='p-4' onSubmit={handleSubmit}>
        <section className='grid grid-cols-2 md:grid-cols-2 gap-4 border-b-2 border-zinc-400 pb-4'>
          <div className='flex flex-col gap-1'>
            <LabelComponent text='Fecha:' />
            <AutoInputDate className='rounded-lg max-h-10' />
          </div>
          <div className='flex flex-col gap-1'>
            <CustomSelect
              options={areas}
              value={areaSelected?.value}
              onChange={handleAreaChange}
              className='w-full'
              label='Area: '
            />
            {errores.area && <p className="text-red-500 text-xs italic">{errores.area}</p>}
          </div>

          <div className='flex flex-col gap-1'>
            <CustomSelect
              options={verificationOfficer}
              value={verificationOfficerSelected?.value}
              onChange={handleVerificationOfficerChange}
              className='w-full'
              label='Responsable de verificación: '
            />
            {errores.responsableVerificacion && <p className="text-red-500 text-xs italic">{errores.responsableVerificacion}</p>}
          </div>

          <div className='flex flex-col gap-1'>
            <FormField
              labelText='Personal Inspeccionado: '
              inputId='personalInspec'
              inputName='inspect'
              inputType='text'
              inputRequired={true}
              inputPlaceholder='Ingrese nombre del persoanl inspeccionado...'
              onChange={handlePersonalInspectedChange}
            />
            {errores.personalInspeccionado && <p className="text-red-500 text-xs italic">{errores.personalInspeccionado}</p>}
          </div>
        </section>

        <section>
          <div className="grid grid-cols-12 gap-4 font-semibold text-sm bg-slate-100 p-3 rounded-md">
            <div className="col-span-6 md:col-span-7">Criterio</div>
            <div className="col-span-2 md:col-span-1 text-center">C</div>
            <div className="col-span-2 md:col-span-1 text-center">NC</div>
            <div className="col-span-2 md:col-span-1 text-center">NA</div>
            <div className="col-span-12 md:col-span-2 text-center md:text-left">Observaciones</div>
          </div>
          {criterios.map((criterio, index) => (
            <div key={index} className="space-y-2">
              <div className="grid grid-cols-12 gap-4 items-center">
                <div className="col-span-6 md:col-span-7 text-sm">
                  {index + 1}. {criterio}
                </div>
                <div className="col-span-6 md:col-span-3 flex justify-around items-center px-0 py-2">
                  <div className="flex flex-col items-center">
                    <input
                      type="radio"
                      name={`criterio-${index}`}
                      value="C"
                      onChange={(e) => handleCriterioChange(e, index)}
                      className="size-6"
                    />
                  </div>
                  <div className="flex flex-col items-center">
                    <input
                      type="radio"
                      name={`criterio-${index}`}
                      value="NC"
                      onChange={(e) => handleCriterioChange(e, index)}
                      className="size-6"
                    />
                  </div>
                  <div className="flex flex-col items-center">
                    <input
                      type="radio"
                      name={`criterio-${index}`}
                      value="NA"
                      onChange={(e) => handleCriterioChange(e, index)}
                      className="size-6"
                    />
                  </div>
                </div>
                <div className="col-span-12 md:col-span-2">
                  <TxtArea
                    id={`Observations-${index}`}
                    name={`Observations-${index}`}
                    label=""
                    rows={3}
                    placeholder="Ingrese observaciones si las hay..."
                    value={observations}
                    onChange={handleObservations}
                    classNameTextArea="resize-none my-1 min-w-full outline-none border-none bg-zinc-100 focus:outline-none"
                    classNameLabel="text-blue-600"
                  />
                </div>
              </div>
              {errores[`criterio-${index}`] && <p className="text-red-500 text-xs italic">{errores[`criterio-${index}`]}</p>}
            </div>
          ))}
        </section>
        <FormButtons />
      </form>
    </div>
  )
}