import {useState} from 'react'

import './App.css'
import {CalendarDateProperties} from "./types/CalendarDateProperties.ts";
import {Calendar} from "./components/Calendar.tsx";

function App() {
    const [calendarDates, setCalendarDates] = useState<CalendarDateProperties[]>([
        {date: 1, isOpen: false, imagePath: ''},
        {date: 2, isOpen: false, imagePath: ''},
        {date: 3, isOpen: false, imagePath: ''},
        {date: 4, isOpen: false, imagePath: ''},
        {date: 5, isOpen: false, imagePath: ''},
        {date: 6, isOpen: false, imagePath: ''},
        {date: 7, isOpen: false, imagePath: ''},
        {date: 8, isOpen: false, imagePath: ''},
        {date: 9, isOpen: false, imagePath: ''},
        {date: 11, isOpen: false, imagePath: ''},
        {date: 10, isOpen: false, imagePath: ''},
        {date: 12, isOpen: false, imagePath: ''},
        {date: 13, isOpen: false, imagePath: ''},
        {date: 14, isOpen: false, imagePath: ''},
        {date: 15, isOpen: false, imagePath: ''},
        {date: 16, isOpen: false, imagePath: ''},
        {date: 17, isOpen: false, imagePath: ''},
        {date: 18, isOpen: false, imagePath: ''},
        {date: 19, isOpen: false, imagePath: ''},
        {date: 20, isOpen: false, imagePath: ''},
        {date: 21, isOpen: false, imagePath: ''},
        {date: 22, isOpen: false, imagePath: ''},
        {date: 23, isOpen: false, imagePath: ''},
        {date: 24, isOpen: false, imagePath: ''},
    ])

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
                <div className={"calendar-title"}>
                    <span className={"calendar-title__highlighted"}>Tiny builds</span>
                    <span className={"calendar-title__highlighted"}>of</span>
                    <span className={"calendar-title__alternative-highlighted"}>Christmas</span>
                </div>
            </Calendar>
        </>
    )
}

export default App
