interface FormProps {
  formName: string;
  formCode: string;
}

export const Header: React.FC<FormProps> = ({ formName, formCode }) => {
  return (
    <header className="max-w-screen px-2 bg-blue-400 text-white flex items-center gap-2 md:gap-4 md:p-4">
			<a className="p-2 max-h-[300px]  bg-blue-500 rounded-lg flex items-center" href="/icmain">Volver</a>
			<section>
				<h2 className="font-semibold">{formName}</h2>
				<p className="font-mono">{formCode}</p>
			</section>
    </header>
  )
}
