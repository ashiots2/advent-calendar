import {OpenableDate} from "./OpenableDate.tsx";
import {CalendarDateProperties} from "../types/CalendarDateProperties.ts";
import "./Calendar.css"

export const Calendar = ({calendarDates, toggleDate}: {
    calendarDates: CalendarDateProperties[],
    toggleDate: (date: number) => void
}) => {
    return (
        <div className="calendar">
            {
                calendarDates.map((x) => (
                    <OpenableDate key={"openable-date-" + x.date} dateNumber={x.date} isOpen={x.isOpen}
                                  onToggle={toggleDate}/>
                ))
            }
        </div>)
};