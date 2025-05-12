import { FormCard } from '../../components/atoms/FormCard'

export const IcMain = () => {
  return (
    <div className='p-4'>
        <section className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4'>
            <FormCard 
                title='(RE-09-LC)'
                description='Control de concentración de producto en filtro sanitario'
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
