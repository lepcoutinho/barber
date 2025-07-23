"use client"

import Icons from '../../components/icons';
import style from "./style.module.scss";

import { useState } from "react";
import Image from "next/image";
import ModalDisplay from "react-modal";


import imgBarbar from "../../Img/IconBarba.png";

const Fidelidade = (total: number) => {
    const elements: JSX.Element[] = [];
    for (let i = 0; i < 8; i++) {
        elements.push(
            <div>
                {total > i && <Icons.Estrela />}
            </div>
        );
    }
    return elements;
}

const convertData = (mode: string, date: any) => {

    const parts = mode === "input" ? date.split("/") : date.split("-");
    return mode === "input"
        ? `${parts[2]}-${parts[1]}-${parts[0]}`
        : `${parts[2]}/${parts[1]}/${parts[0]}`;

}

const defineIdade = (data: any) => {
    const dataSis = new Date();
    const dataAniver = new Date(data);
    const idade = dataSis.getFullYear() - dataAniver.getFullYear() -
        (dataSis < new Date(dataSis.getFullYear(), dataAniver.getMonth(), dataAniver.getDate()) ? 1 : 0);
    const [dia, mes, ano] = data.split("-");
    return `${dia}/${mes} (${idade} anos)`;

}


const Cliente = ({ dados }: { dados: any }) => {

    
    const [nome, setNome]   = useState(dados.nome);
    const [tel, setTel]       = useState(dados.tel);
    const [dtNas, setdtNas]   = useState(convertData('input', dados.dtNas));
    const [street, setStreet] = useState(dados.address.street);
    const [neighborhood, setNeighborhood] = useState(dados.address.neighborhood);
    const [city, setCity] = useState(dados.address.city);
    const [number, setNumber] = useState(dados.address.number);
    const [uf, setUf] = useState(dados.address.uf);
    const nvFide = dados.nvFide;
    const Aniv = defineIdade(dtNas);
    const [modalIsOpen, setIsOpen] = useState(false);
    const [edit, setEdit] = useState(false);
    const [visibility, setVisibility] = useState("initial");

    const handleKeyDown = (e: undefined) => {
        if (e.code === 'Space') {
            e.preventDefault()
            setNome((prevText) => prevText + "\n");
        }
    }

    const handleChange = (e: undefined) => {
        setNome(e.target.value); // Atualiza o texto com os demais caracteres
    };

    const changeModal = () => {

        setIsOpen(modalIsOpen ? false : true);
        setEdit(false)
        setVisibility("initial")
    }

    const toggleEdit = () => {
        setEdit(edit ? false : true)
        toggleVisibility()
    }

    const toggleVisibility = () => {
        setVisibility(visibility == "initial" ? "hidden" : "initial")
    }

    const Save = () => {
        toggleEdit()
    }


    return (
        <>
            <article className={style.Cliente} onClick={changeModal}>
                <div className={style.Dados}>
                    <h3>{nome}</h3>
                    <p>{tel}</p>
                </div>
                <div className={style.Fidelidade}>

                    <div className={style.Ponto}>
                        {Fidelidade(nvFide)}
                    </div>
                </div>


            </article>

            <ModalDisplay
                isOpen={modalIsOpen}
                onRequestClose={changeModal}
                ariaHideApp={false}
                className={style.Modal}
                overlayClassName={style.modal_overlay}>

                <div className={style.ModalWindow}>


                    <div className={style.Actions}>

                        <button style={{ visibility: visibility }} className={style.Edit} onClick={toggleEdit}><Icons.Edit /> Editar</button>
                        <button onClick={changeModal}
                            className={style.Close}>
                            <Icons.Close />
                        </button>
                    </div>

                    <section className={style.Dados}>

                        <div>
                            {edit ? (
                                <textarea
                                    placeholder='Nome'
                                    className={style.Nome}
                                    onKeyDown={handleKeyDown}
                                    onChange={handleChange}
                                    value={nome}>

                                </textarea>) : (<h3>{nome}</h3>)}
                        </div>

                        <div>
                            <Icons.Tel />
                            {edit ? (<input type='text' value={tel} placeholder='Contato'></input>) : (<p>{tel}</p>)}
                        </div>

                        <div>
                            <Icons.Aniver />
                            {edit ? (
                                <input type='date'
                                    value={dtNas}
                                    placeholder='Nascimento' >

                                </input>) : (<p> {Aniv}</p>)}
                        </div>

                        <div>
                            <Icons.Ende />

                            {edit ? (<div className={style.Endereco}>
                                <input value={street} onChange={(e) => setStreet(e.target.value)} type='text' placeholder='Endereço'></input>
                                <input value={neighborhood} onChange={(e) => setNeighborhood(e.target.value)} type='text' placeholder='Bairro'></input>
                                <input value={city} onChange={(e) => setCity(e.target.value)} type='text' placeholder='Cidade'></input>
                                <select name="" id="" value={uf} onChange={(e) => setUf(e.target.value)}>
                                    <option>MG</option>
                                    <option>ES</option>
                                </select>
                            </div>) : (<p> {street} <br></br> {neighborhood} / {city} - {uf} </p>)}

                        </div>
                    </section>

                    <section className={style.Servicos}>
                        <h4> últimos Serviços </h4>

                        <div>
                            <article>
                                <Image src={imgBarbar}
                                    alt={'Barba Completa'}
                                />
                                {/* <p>Completo</p> */}
                            </article>
                            <article>
                                <Image src={imgBarbar}
                                    alt={'Barba Completa'}
                                />
                                {/* <p>Completo</p> */}
                            </article>
                            <article>
                                <Image src={imgBarbar}
                                    alt={'Barba Completa'}
                                />
                                {/* <p>Completo</p> */}
                            </article>
                            <article>
                                <Image src={imgBarbar}
                                    alt={'Barba Completa'}
                                />
                                {/* <p>Completo</p> */}
                            </article>
                        </div>

                    </section>

                    <section className={style.Fidelidade}>
                        <h4> Fidelidade </h4>

                        <div className={style.Fidelidade}>
                            <div className={style.Ponto}>
                                {Fidelidade(nvFide)}
                            </div>
                        </div>
                    </section>

                    {edit && <button className={style.Save} onClick={Save}><Icons.Save /> Salvar</button>}

                </div>


            </ModalDisplay>
        </>

    )

}

export default Cliente