import { Header } from '../../components/molecules/Header'

interface Options {
  value: string;
  label: string;
}

export const IcForm5 = () => {
  return (
    <div>
      <Header formCode='(RE-01-LC)' formName='Formato de practicas higiénicas y medidas de protección' href='/icmain' />
    </div>
  )
}
