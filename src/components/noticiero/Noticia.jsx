const Noticia = ({ titulo, descripcion, fecha, imagen_url }) => {
    return (
        <div className="flex flex-col md:flex-row items-center gap-4 border border-white p-4 rounded-lg bg-black bg-opacity-20 w-full transition duration-300 ease-in-out shadow-md hover:scale-[1.01] hover:bg-opacity-30 hover:border-gray-400 animate-fade-in-right max-w-sm md:max-w-xl lg:max-w-4xl mx-auto">
            {imagen_url && (
                <img
                    src={imagen_url}
                    alt="Imagen de la noticia"
                    className="w-full md:w-32 h-32 object-cover rounded-lg shadow-sm"
                    loading="lazy"
                />
            )}

            <div className="flex flex-col justify-between text-left w-full">
                <h2 className="text-lg text-white font-semibold mb-1">{titulo}</h2>
                <p className="text-sm text-gray-200 mb-2">{descripcion}</p>
                <p className="text-xs text-gray-400 italic">Fecha: {fecha}</p>
            </div>
        </div>
    );
};

export default Noticia;
