export const OpenableDate = ({dateNumber, isOpen, onToggle}: {
    dateNumber: number,
    isOpen: boolean,
    onToggle: (date: number) => void
}) => {
    return (
        <>
            <div onClick={() => onToggle(dateNumber)}
                 className={`openable-date date-${dateNumber} ${isOpen ? "openable-date__opened" : "openable-date"}`}>
                {isOpen ? <img src={"./days/day" + dateNumber + ".svg"} alt={dateNumber.toString()}/> :
                    <span>{dateNumber}</span>}
            </div>
        </>
    );
};
