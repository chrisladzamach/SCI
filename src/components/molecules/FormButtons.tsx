export const FormButtons = () => {
    return (
        <section className='flex justify-between gap-4 pt-4 mt-4 border-t border-zinc-400'>
            <button
                type="button"
                className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-zinc-50
                rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:bg-gray-200"
            >
                Cancelar
            </button>

            <button
                type="submit"
                className="text-white bg-blue-400 focus:bg-blue-500 font-medium rounded-lg text-sm px-5 py-2.5
                me-2 mb-2 focus:outline-none"
            >
                Guardar registro
            </button>
        </section>
    )
}