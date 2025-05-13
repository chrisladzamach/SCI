import { FormCard } from '../../components/atoms/FormCard'
import { Header } from '../../components/molecules/Header'

export const IcMain = () => {
  return (
    <div className='p-4'>
      <Header formName='Inspección de Calidad' formCode='IC' href='/' />
      <section className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-2'>
        <FormCard 
            title='(RE-09-LC)'
            description='Control de concentración de producto en filtro sanitario'
            to='/form1'
        />
        <FormCard 
            title='(RE-05-LC)'
            description='Verificación de producto terminado.'
            to='/form2'
        />
      </section>
    </div>
  )
}
