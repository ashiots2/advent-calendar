import './OpenableDate.css'
import vite from '../assets/vite.svg'

export const OpenableDate = ({dateNumber, isOpen, onToggle}: {
    dateNumber: number,
    isOpen: boolean,
    onToggle: (date: number) => void
}) => {
    return (
        <>
            <div onClick={() => onToggle(dateNumber)}
                 className={`openable-date date-${dateNumber} ${isOpen ? "openable-date__opened" : "openable-date"}`}>
                {isOpen ? <img src={vite} alt={dateNumber.toString()}/> : <span>{dateNumber}</span>}
            </div>
        </>
    );
};
