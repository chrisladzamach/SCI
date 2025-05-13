import { FormCard } from '../../components/atoms/FormCard'
import { Header } from '../../components/molecules/Header'

export const IcMain = () => {
  return (
    <div className=''>
      <Header formName='Inspección de Calidad' formCode='IC' href='/' />
      <section className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 m-2 p-2'>
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
        <FormCard 
            title='(RE-06-LC)'
            description='Verificación de condiciones ambientales.'
            to='/form3'
        />
        <FormCard 
            title='(RE-07-LC)'
            description='Inspección de limpieza y desinfección en planta.'
            to='/form4'
        />
        <FormCard 
            title='(RE-01-LC)'
            description='Formato de practicas higiénicas y medidas de protección.'
            to='/form5'
        />
        <FormCard 
            title='(RE-08-LC)'
            description='Control de aspersiones ambientales.'
            to='/form6'
        />
      </section>
    </div>
  )
}
