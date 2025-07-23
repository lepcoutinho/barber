"use client"

import { GrPrevious, GrNext } from "react-icons/gr"
import style from './style.module.scss'
import { useState, useCallback} from "react"


const SelectDate = ({handlePer}:any) => {

    let meses = [
        'JAN', 'FEV', 'MAR',
        'ABR', 'MAI', 'JUN',
        'JUL', 'AGO', 'SET',
        'OUT', 'NOV', 'DEZ'
    ]

    const [dataSis, setDataSis] = useState(new Date())

    const formatDia = (dia: number) => String(dia).padStart(2, '0');


    const updateDate = useCallback(() => {
        const dia = formatDia(dataSis.getDate());
        const mes = meses[dataSis.getMonth()];
        const ano = dataSis.getFullYear();
        return { dia, mes, ano };
    }, [dataSis, meses]);

    const { dia, mes, ano } = updateDate();


    const handleData = (mod: string) => {
        const novaData = new Date(dataSis);
        switch (mod) {
            case '+':
                novaData.setDate(dataSis.getDate() + 1)
                break;
            case '-':
                novaData.setDate(dataSis.getDate() - 1)
                break;
        }

        setDataSis(novaData);
        handlePer(novaData)
    }





    return (
        <section className={style.Date}>
            <div className={style.SelectDate}>
                <div className={style.Buttons} ><button onClick={() => handleData('-')}>  <GrPrevious /></button></div>
                <div className={style.Periodo} id="periodo">
                    <p>{dia}</p>
                    <p>/</p>
                    <p>{mes}</p>
                    {/* <p>/</p>
                    <p>{ano}</p> */}
                </div>
                <div className={style.Buttons}><button onClick={() => handleData('+')}>  <GrNext /></button></div>
            </div>
        </section>

    )
}

export default SelectDate;