import React from 'react'
import moment from 'moment'
import { CalendarGrid } from './Grid'
import { CalendarMonth } from './CalendarMonth'
import './calendar.scss'
import { useState } from 'react'
import ModalWindow from "./ModalWindow/index.jsx";

function Calendar() {

    moment.updateLocale('ru', { week: { dow: 1 } })
    const today = moment()
    const [itemday, setItemDay] = useState(today.clone())
    const [modalActive, setModalActive] = useState(false);
    function cellClick() {
        setModalActive(!modalActive)
    }

    //const startDay = today.clone().startOf('month').startOf('week')

    const startDay = itemday.clone().startOf('month').startOf('week')

    function monthSubtract() {
        setItemDay(itemday.clone().subtract(1, 'M'))
    }

    function monthAdd() {
        setItemDay(itemday.clone().add(1, 'M'))
    }

    return (
        <div onClick={cellClick}>
            <h2 className='calendar__text'>Выбрать дату и время для записи:</h2>
            <CalendarMonth itemday={itemday} monthSubtract={monthSubtract} monthAdd={monthAdd} />
            <CalendarGrid startDay={startDay} today={today} cellClick={cellClick} />
            <ModalWindow modalActive={modalActive} />
        </div>
    );
}

export default Calendar;