interface FormProps {
  formName: string;
  formCode: string;
  href?: string
}

export const Header: React.FC<FormProps> = ({ formName, formCode, href }) => {
  return (
    <header className="max-w-screen px-2 bg-blue-400 text-white flex items-center gap-2 md:gap-4 md:p-4">
			<a className="p-2 max-h-[300px]  bg-blue-500 rounded-lg flex items-center" href={href} >Volver</a>
			<section>
				<h2 className="text-xl font-semibold">{formName}</h2>
				<p className="text-xl font-mono">{formCode}</p>
			</section>
    </header>
  )
}
