'use client';
import style from './style.module.scss'
import Image from 'next/image'

import imgBarbar from '../../Img/IconBarba.png'
import imgCorte from '../../Img/IconCorte.png'
import { useState } from 'react';


type Servico = {
    title: String;
    label: String,
    valor: GLfloat
}

const IconServico = ({servico} : {servico: Servico}) => {

    

    return (
        <article className={style.iconServico}>
            <Image src={imgCorte}
                alt={`${servico.label}`}
            />
            <h4 className={style.Title}>{servico.title && servico.title}</h4>
        </article>

    )
}

export default IconServico