// 'use client';

import style from './style.module.scss'
import { IoHome as IconHome } from "react-icons/io5";
import { RiCalendarScheduleLine as IconAgenda } from "react-icons/ri";
import { FaUsers as IconCliente } from "react-icons/fa";
import { GiTakeMyMoney as IconCaixa } from "react-icons/gi";
import User from '../user/user';
import Link from 'next/link'

const Header = () => {
    return (
   
         <header className={style.header}>
             <nav>
                <h2>Nome Barbearia</h2>
                <ul>
                    <li><Link href="/"><IconHome /> </Link></li>
                    <li><Link href="/agenda"><IconAgenda /> <p>Agenda </p></Link></li>
                    <li><Link href="/clientes"><IconCliente /><p>Clientes </p></Link></li>
                    <li><Link href="/caixa"><IconCaixa /> <p>Caixa </p></Link></li>
                </ul>
             </nav>
            <section>
                <User />
             </section>
         </header>
    )
}

export default Header