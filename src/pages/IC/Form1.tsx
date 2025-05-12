import { AutoDateTime } from '../../components/molecules/autoComponents/AutoDateTime'
// import { FormField } from '../components/molecules/FormField'
import { Header } from '../../components/molecules/Header'
import { AutoProductConcentration } from "../../components/molecules/autoComponents/AutoProductConcentration"

export const Form1 = () => {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log('Formulario enviado');
  };
  return (
    <div className=''>
      <Header formName='Control de concentración de producto en filtro sanitario' formCode='(RE-09-LC)' />
      <form className='p-4' onSubmit={handleSubmit}>
        <AutoDateTime />
        <AutoProductConcentration />
      </form>
    </div>
  )
}