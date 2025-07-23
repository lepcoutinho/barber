// 'use client';

import style from './style.module.scss'
import { FaMapMarkerAlt, FaFacebook } from "react-icons/fa";
import { RiWhatsappFill, RiInstagramFill } from "react-icons/ri";
import Image from 'next/image'
import imgBarber from '../../Img/Barber.png'


const Footer = () => {
    return (
        <footer className={style.footer}>

            <section className={style.InforBarber}>

                <div className={style.Img}>
                    <Image src={imgBarber}
                        alt={'Logomarca'}
                    />
                </div>

                <div className={style.Info}>
                    <h3>Nome Barbearia</h3>
                    <p>Av. Doze de Maio - Vila Velha / ES</p>
                    <p>(27)00000-0000</p>
                </div>
            </section>

            <section className={style.InfoSist}>
                <h5>ara.lab<span>©</span></h5>
            </section>
        </footer>
    )
}

export default Footer