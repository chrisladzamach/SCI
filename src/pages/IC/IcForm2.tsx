import { Header } from "../../components/molecules/Header"
import { AutoDateTime } from "../../components/molecules/autoComponents/AutoDateTime"

export const IcForm2 = () => {
  return (
    <div>
      <Header formName='Verificación de producto terminado.' formCode='(RE-05-LC)' />
      <form action="">
        <section className="border-b flex flex-col m-4 gap-2 border-zinc-400 pb-2">
          <AutoDateTime />
        </section>
      </form>
    </div>
  )
}
