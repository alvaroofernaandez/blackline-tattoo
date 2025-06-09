import CardDiseñoModal from './CardDiseñoModal';
import { useDiseñosModal } from '../../hooks/useCitas';

const DiseñosModal = ({ isOpen, onClose }) => {
    const {
        diseños,
        selectedId,
        selectDiseño,
        selectedDesign,
        setSelectedId,
    } = useDiseñosModal(isOpen);

    if (!isOpen) return null;

    const handleBackdropClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <div
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
            onClick={handleBackdropClick}
        >
            <div className="relative w-full max-w-3xl h-[90vh] sm:h-[80vh] md:h-[78%] mx-2 sm:mx-4 bg-gradient-to-tl from-neutral-800 via-neutral-900 to-neutral-950 p-4 sm:p-6 rounded-lg shadow-lg border border-neutral-800/10 flex flex-col"
            >
                <button
                    className="absolute top-2 right-4 text-neutral-400 text-3xl font-bold hover:text-white transition-transform transform hover:scale-110"
                    onClick={() => {
                        onClose(null);
                        setSelectedId(null);
                    }}
                    aria-label="Close modal"
                >
                    &times;
                </button>
                <div className="flex flex-col gap-4 mt-4 flex-1">
                    <h1 className="text-xl sm:text-2xl font-semibold text-white text-center">Selecciona un diseño</h1>
                    <hr className="border border-neutral-600" />
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 items-start justify-center overflow-y-auto p-1 sm:p-2 flex-1"
                        style={{ maxHeight: '50vh' }}
                    >
                        {diseños.map((diseño) => (
                            <CardDiseñoModal
                                key={diseño.id}
                                diseño={diseño}
                                isSelected={selectedId === diseño.id}
                                onSelect={() => selectDiseño(diseño.id)}
                            />
                        ))}
                    </div>
                </div>
                <button
                    className="block px-4 py-2 mt-4 mx-auto text-white bg-neutral-700 border border-neutral-500 rounded-md hover:bg-neutral-600 cursor-pointer transition-all duration-300 w-full sm:w-auto"
                    onClick={() => {
                        onClose(selectedDesign);
                        setSelectedId(null);
                    }}
                    disabled={!selectedId}
                >
                    Seleccionar
                </button>
            </div>
        </div>
    );
};

export default DiseñosModal;
