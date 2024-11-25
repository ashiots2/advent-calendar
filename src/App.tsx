import {useEffect, useState} from 'react'

import './App.css'
import {CalendarDateProperties} from "./types/CalendarDateProperties.ts";
import {Calendar} from "./components/Calendar.tsx";
import {initialData} from "./data/InitialData.ts";

function App() {
    const [calendarDates, setCalendarDates] = useState<CalendarDateProperties[]>(initialData);

    const resetCalendarDates = () => {
        setCalendarDates(prevCalendarDates => {
                const updatedDates = prevCalendarDates.map(item =>
                    Object.assign(item, {isOpen: false})
                )
                localStorage.removeItem('openedDates')
                return updatedDates;
            }
        );
    };

    const toggleDate = (date: number) => {
        setCalendarDates(prevCalendarDates => {
            const updatedDates = prevCalendarDates.map(item =>
                item.date === date
                    ? {...item, isOpen: true}
                    : item
            );
            // Save updated state to localStorage
            localStorage.setItem('openedDates', JSON.stringify(updatedDates));
            return updatedDates;
        });
    };

    useEffect(() => {
        // Load persisted data from localStorage on component mount
        const savedDates = localStorage.getItem('openedDates');
        if (savedDates) {
            setCalendarDates(JSON.parse(savedDates));
        } else {
            // Initialize with default data if no data in localStorage
            setCalendarDates(initialData);
        }
    }, []);

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
