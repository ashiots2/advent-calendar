import {OpenableDate} from "./OpenableDate.tsx";
import {CalendarDateProperties} from "../types/CalendarDateProperties.ts";
import "./Calendar.css"
import {ReactNode} from "react";
import xmasTree from '../assets/xmas_tree.svg'

export const Calendar = ({children, calendarDates, toggleDate}: {
    calendarDates: CalendarDateProperties[],
    toggleDate: (date: number) => void
    children: ReactNode
}) => {
    return (
        <div className="calendar">
            <div className={"xmas-tree-card"}>
                <img className={"xmas-tree-img"} src={xmasTree} alt={"xmas-tree"}/>
            </div>
            {
                calendarDates.map((x) => (
                    <OpenableDate key={"openable-date-" + x.date} dateNumber={x.date} isOpen={x.isOpen}
                                  onToggle={toggleDate}/>
                ))
            }
            {children}
        </div>)
};