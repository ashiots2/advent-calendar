import {OpenableDate} from "./OpenableDate.tsx";
import {CalendarDateProperties} from "../types/CalendarDateProperties.ts";
import "./Calendar.css"
import {ReactNode} from "react";

export const Calendar = ({children, calendarDates, toggleDate}: {
    calendarDates: CalendarDateProperties[],
    toggleDate: (date: number) => void
    children: ReactNode
}) => {
    return (
        <div className="calendar">
            {
                calendarDates.map((x) => (
                    <OpenableDate key={"openable-date-" + x.date} dateNumber={x.date} isOpen={x.isOpen}
                                  onToggle={toggleDate}/>
                ))
            }
            {children}
        </div>)
};