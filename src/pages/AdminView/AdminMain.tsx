import { Header } from "../../components/molecules/Header"
import { FormCard } from "../../components/atoms/FormCard"

export const AdminMain = () => {
  return (
    <div>
      <Header formName='Admin' formCode='View' />
      <section className='flex flex-col gap-4 m-2 p-2 lg:grid lg:grid-cols-4'>
        <FormCard 
          title='Inspección de Calidad (IC)'
          description='Registros en el módulo de Inspección de calidad (IC)'
          to='/icregs'
        />
      </section>
    </div>
  )
}
