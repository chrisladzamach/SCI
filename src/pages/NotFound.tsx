export const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center h-full w-full bg-zinc-900">
            <h1 className="text-4xl font-bold text-gray-400 mb-4">
                <span className="text-red-400 mr-2">
                    ¡Oops!
                </span>
                Página no encontrada
            </h1>
            <p className="text-gray-500 text-xl">La ruta a la que intentas acceder no existe.</p>
            <a className="mt-4 p-4 bg-blue-400 text-white font-bold tracking-widest rounded-lg" href="/">Volver a la página principal</a>
        </div>
    )
}