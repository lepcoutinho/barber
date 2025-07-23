// 'use client';
import Image from 'next/image'
import { RiDashboardLine as IconDashboard } from "react-icons/ri";
import imgBarbar from '../../Img/IconBarba.png'
import style from './style.module.scss'



const Dashboard = () => {
    return (
        <section className={style.Dashboard}>
            <section className={style.Title}>
                <div>
                    <IconDashboard />
                    <h4>Dashboard</h4>
                </div>
            </section>

            <section className={style.Infos}>
                <div>
                    <article>
                        <div>
                            <h3>50</h3>
                        </div>
                        <div>
                            <h4>Serviços</h4>
                            <p>Hoje</p>
                        </div>
                    </article>

                    <article>
                        <div>
                            <h3>35</h3>
                        </div>
                        <div>
                            <h4>Serviços</h4>
                            <p>Amanhã</p>
                        </div>
                    </article>
                </div>
            </section>

            <section className={style.Contator}>
                <div>
                    <h4>Contator de Serviços</h4>
                </div>
                <div>
                    <article>
                        <Image src={imgBarbar}
                            alt={'Barba Completa'}
                        />
                        <p>Completo</p>
                        <div><p>00</p></div>
                    </article>
                    <article>
                        <Image src={imgBarbar}
                            alt={'Barba Completa'}
                        />
                        <p>Completo</p>
                        <div><p>10</p></div>
                    </article>
                </div>
            </section>

        </section>
    )
}

export default Dashboard