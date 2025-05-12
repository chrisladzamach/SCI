import { FormCard } from '../components/atoms/FormCard'

export const IcMain = () => {
  return (
    <div className='p-4'>
        <h1>Inspección de Calidad</h1>
        <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4 p-2'>
            <FormCard 
                title='Formulario1'
                description='Descripción del formulario 1'
                to='/form1'
            />
            <FormCard 
                title='Formulario2'
                description='Descripción del formulario 2'
                to='/form2'
            />
        </section>
    </div>
  )
}
