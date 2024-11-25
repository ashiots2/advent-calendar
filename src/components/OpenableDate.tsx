import {CalendarDateProperties} from "../types/CalendarDateProperties.ts";

export const OpenableDate = ({dateProperties, onToggle}: {
                                 dateProperties: CalendarDateProperties,
                                 onToggle: (date: number) => void
                             }
    ) => {
        return (
            <>
                <div onClick={() => onToggle(dateProperties.date)}
                     className={`openable-date date-${dateProperties.date} ${dateProperties.isOpen ? "openable-date__opened" : "openable-date"}`}>
                    {dateProperties.isOpen ?
                        <img src={"./days/day" + dateProperties.date + ".svg"} alt={dateProperties.date.toString()}/> :
                        <span>{dateProperties.date}</span>}
                </div>
            </>
        );
    }
;
