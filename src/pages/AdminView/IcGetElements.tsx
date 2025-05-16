import { FormCard } from "../../components/atoms/FormCard"
import { Header } from "../../components/molecules/Header"
export const IcGetElements = () => {
  return (
    <div>
      <Header formName='Inspección de Calidad' formCode='Formatos de registro' />
      <section>
        <FormCard 
          title='(RE-09-LC) Control de concentración de producto en filtro sanitario'
          description='Control de concentración de producto en filtro sanitario'
          to='/adminMain/icregs/IcRegform1'
        />
      </section>

    </div>
  )
}
