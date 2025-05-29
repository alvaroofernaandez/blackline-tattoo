
function CardDiseñoModal({ diseño, isSelected, onSelect }) {
  return (
    <button
      className={`relative flex rounded-xl items-center mt-3 ${
        isSelected
          ? 'border scale-105 transition-transform border-white'
          : 'border border-neutral-500'
      }`}
      onClick={onSelect}
    >
      <div className="relative"></div>
      <img
        src={diseño.image}
        alt={`Imagen del diseño ${diseño.nombre || ''}`}
        className="w-52 h-64 rounded-xl object-cover"
        loading="lazy"
      />
      <h4 className="absolute bottom-2 right-2 bg-opacity-75 bg-black text-white px-2 py-1 rounded">
        {diseño.precio ? `${diseño.precio} €` : '(Precio) €'}
      </h4>
    </button>
  );
}


export default CardDiseñoModal;
