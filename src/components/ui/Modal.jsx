import { XMarkIcon } from "@heroicons/react/24/outline"

function Modal({ isVisible, setIsVisible, textTitle, textParagraph, children }) {
    if (!isVisible) return null

    return (
        <div
            className={
                `fixed overflow-y-none inset-0 z-50 bg-gray-900 bg-opacity-80 transition-opacity duration-300
            ${isVisible ? "opacity-100" : "opacity-0 pointer-events-none"}`
            }>
            <dialog open={isVisible}
                className="absolute inset-0 z-50 rounded-xl bg-white p-6 max-w-lg w-screen">
                <header className="flex items-center lg:gap-x-32 gap-4 justify-between">
                    <div>
                        <h4 className="text-xl font-semibold">{textTitle}</h4>
                        <p className="text-sm text-gray-400">
                            {textParagraph}
                        </p>
                    </div>
                    <button type="button" onClick={() => setIsVisible(false)} >
                        <XMarkIcon className="h-6 w-6 text-gray-400 hover:text-gray-500"
                        />
                    </button>
                </header>
                {children}
            </dialog >
        </div>
    )
}

export default Modal