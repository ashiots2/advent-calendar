import {CalendarDateProperties} from "../types/CalendarDateProperties.ts";
import "./OpenableDate.css";
import ExpandableImage from "./ExpandableImage.tsx";

export const OpenableDate = ({dateProperties, onToggle}: {
                                 dateProperties: CalendarDateProperties,
                                 onToggle: (date: number) => void
                             }
    ) => {
        return (
            <>
                <div onClick={() => onToggle(dateProperties.date)}
                     className={`calendar-card openable-date date-${dateProperties.date} ${dateProperties.isOpen ? "openable-date__opened" : "openable-date"}`}>
                    {dateProperties.isOpen ?
                        <ExpandableImage src={"/advent-calendar/days/day" + dateProperties.date + ".png"} alt={dateProperties.date.toString()}/> :
                        <span>{dateProperties.date}</span>}
                </div>
            </>
        );
    }
;
