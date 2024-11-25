import {OpenableDate} from "./OpenableDate.tsx";
import {CalendarDateProperties} from "../types/CalendarDateProperties.ts";
import "./Calendar.css"
import {ReactNode} from "react";
import {XmasTree} from "./XmasTree.tsx";

export const Calendar = ({children, calendarDates, toggleDate}: {
    calendarDates: CalendarDateProperties[],
    toggleDate: (date: number) => void
    children: ReactNode
}) => {
    return (
        <div className="calendar">
            <XmasTree/>
            {
                calendarDates.map((x) => (
                    <OpenableDate key={"openable-date-" + x.date} dateProperties={x} onToggle={toggleDate}/>
                ))
            }
            {children}
        </div>)
};