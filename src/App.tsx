import {useState} from 'react'

import './App.css'
import {CalendarDateProperties} from "./types/CalendarDateProperties.ts";
import {Calendar} from "./components/Calendar.tsx";
import {initialData} from "./data/InitialData.ts";

function App() {
    const [calendarDates, setCalendarDates] = useState<CalendarDateProperties[]>(initialData);

    const resetCalendarDates = () => {
        setCalendarDates(prevCalendarDates =>
            prevCalendarDates.map(item =>
                Object.assign(item, {isOpen: false})
            )
        );
    };

    const toggleDate = (date: number) => {
        setCalendarDates(prevCalendarDates =>
            prevCalendarDates.map(item =>
                item.date === date
                    ? {...item, isOpen: true}
                    : item
            )
        );
    };

    return (
        <>
            <h2>BarbieTheNinja's Advent Calendar</h2>
            <Calendar calendarDates={calendarDates} toggleDate={toggleDate}>
                <div onClick={resetCalendarDates} className={"calendar-title"}>
                    <span className={"calendar-title__highlighted calendar-title__larger font-glacial-indifference"}>Tiny builds</span>
                    <span className={"calendar-title__highlighted font-amsterdam"}>of</span>
                    <span className={"calendar-title__alternative-highlighted font-amsterdam"}>Christmas</span>
                </div>
            </Calendar>
        </>
    )
}

export default App
