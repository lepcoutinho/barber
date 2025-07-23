"use client"
import { RiCalendarScheduleLine as IconAgenda } from "react-icons/ri";
import style from './style.module.scss'
import SelectDate from '../../components/selectDate/SelectDate';
import Service from '../../components/service/service';

import { useEffect, useState, } from "react"

const Agenda = () => {

    const [data, setData] = useState()

    useEffect(() => {
        console.log(data)
    }, [data])


    return (
        <section className={style.Agenda}>
            <title>Agenda | Nome Barberia</title>
            <header>
                <div className={style.Text} >
                    <IconAgenda />
                    <h4>Agenda</h4>
                </div>
                
                <div className={style.Date}>
                    <SelectDate handlePer={setData} />
                </div>

            </header>



            <section className={style.Servicos}>
                <Service horas={'09:00'} />
                <Service horas={'10:00'} />
                <Service horas={'11:00'} />
                <Service horas={'12:00'} />
                <Service horas={'13:00'} />
                <Service horas={'14:00'} />
                <Service horas={'15:00'} />
                <Service horas={'16:00'} />
                <Service horas={'17:00'} />
                <Service horas={'18:00'} />
            </section>


        </section>
    )
}

export default Agenda