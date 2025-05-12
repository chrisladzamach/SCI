import { AutoDateTime } from '../components/molecules/autoComponents/AutoDateTime'
import { FormField } from '../components/molecules/FormField'
import { Header } from '../components/molecules/Header'

export const Form1 = () => {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log('Formulario enviado');
  };
  return (
    <div className='px-4'>
      <Header formName='Control de concentración de producto en filtro sanitario' formCode='(RE-09-LC)' />
      <form onSubmit={handleSubmit}>
        <AutoDateTime />
        <FormField 
          labelText='fecha'
					inputId='fechaic1'
					inputName='ic1'
					inputType='text'
					inputRequired={true}
					inputPlaceholder='Escriba su nombre'
        />
        <FormField 
          labelText='Hora'
					inputId='ic1'
					inputName='ic1'
					inputType='text'
					inputRequired={true}
					inputPlaceholder='Escriba su nombre'
        />
      </form>
    </div>
  )
}

/*
        id={inputId}
        name={inputName}
        type={inputType}
        required={inputRequired}
        placeholder={inputPlaceholder}
        classNameInput={inputClassName}
*/