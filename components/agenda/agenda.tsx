"use client"
import { Metadata } from 'next';
import SelectDate from '../selectDate/SelectDate';
import Service from '../service/service';
import style from './style.module.scss'
import { RiCalendarScheduleLine as IconAgenda } from "react-icons/ri";
import { useEffect, useState, } from "react"




const Agenda = () => {

    const [data, setData] = useState()

    useEffect(() => {
        console.log(data)
    }, [data])





    return (
        <article className={style.Agenda}>
            <section className={style.Title}>

                <div className={style.Text} >
                    <IconAgenda />
                    <h4>Agenda</h4>
                </div>

                <div className={style.Date}><SelectDate handlePer={setData} /></div>

            </section>

            <section className={style.Infos}>
                <Service />
                <Service />
                <Service />

            </section>

        </article>
    )
}

export default Agenda