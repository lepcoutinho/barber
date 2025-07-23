// 'use client';
import style from './style.module.scss'
import Image from 'next/image'
import imgBarbar from '../../Img/IconBarba.png'
import imgCorte from '../../Img/IconCorte.png'

const Service = ({horas}:any) => {
    return (
        <article className={style.Service}>
            
            <section className={style.bloco1}>
                <div>
                    <h3>
                        {horas}
                    </h3>
                </div>
                <div>
                    <h4>Luiz Eduardo</h4>
                    <p>(00)00000-0000</p>
                </div>
            </section>

            <section className={style.bloco2}>
                <div>
                    <Image src={imgBarbar}
                        alt={'Barba Completa'}
                    />
                    <p>Completo</p>
                </div>
                <div>
                    <Image src={imgCorte}
                        alt={'Corte '}
                    />
                    <p>Corte</p>
                </div>
            </section>
            <span />
        </article>
    )
}

export default Service