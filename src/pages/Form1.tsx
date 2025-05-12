import { FormField } from '../components/molecules/FormField'

export const Form1 = () => {
  return (
    <div className='p-4'>
			<h1>Formulario 1</h1>
      <form>
        <FormField 
					inputId='ic1'
					inputName='ic1'
					inputType='text'
					inputRequired={true}
					inputPlaceholder='Escriba su nombre'
					inputClassName='bg-red-300'
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