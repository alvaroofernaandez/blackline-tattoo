function CardDiseñoModal({ diseño, isSelected, onSelect }) {
  return (
    <button
      className={`relative flex flex-col items-center rounded-xl mt-3 w-full max-w-xs sm:max-w-sm md:max-w-md ${
        isSelected
          ? 'border scale-105 transition-transform border-white'
          : 'border border-neutral-500'
      }`}
      onClick={onSelect}
    >
      <div className="relative w-full">
        <img
          src={diseño.image}
          alt={`Imagen del diseño ${diseño.nombre || ''}`}
          className="w-full h-56 sm:h-64 md:h-72 rounded-xl object-cover"
          loading="lazy"
        />
        <h4 className="absolute bottom-2 right-2 bg-opacity-75 bg-black text-white px-2 py-1 rounded text-xs sm:text-sm">
          {diseño.precio ? `${diseño.precio} €` : '(Precio) €'}
        </h4>
      </div>
    </button>
  );
}

export default CardDiseñoModal;
