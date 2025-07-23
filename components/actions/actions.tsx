"use client"

import Icons from '../../components/icons';
import style from './style.module.scss'

import { useState } from "react";
import ModalDisplay from "react-modal";
import React from "react";

import IconServico from '../iconServico/iconServico';

import { Select, SelectItem } from "@nextui-org/select";


import { Fidelidade } from '@/utils/functions';





const Actions = () => {
    const [modalIsOpen, setIsOpen] = useState(false);
    const [id_cliente, setIdCliente] = useState(0);

    const [servicos, setServicos] = useState();
    const [serValor, setSerValor] = useState('');
    const [serFidel, setSerFidel] = useState(0);


    const clientes = [
        {
            id: 1,
            dados: {
                name: "Luiz Eduardo",
                horas: "15:30",
                fidelidade: 5,
                servicos: [
                    {
                        title: 'title',
                        label: 'label',
                        valor: 25.50
                    }, {
                        title: 'title2',
                        label: 'label2',
                        valor: 22.15
                    }
                ]
            }
        }, {

            id: 2,
            dados: {
                name: "Natã",
                horas: "18:30",
                fidelidade: 7,
                servicos: [
                    {
                        title: 'title1',
                        label: 'label1',
                        valor: 30.50
                    }, {
                        title: 'title2',
                        label: 'label2',
                        valor: 22.15
                    }
                ]
            }
        }
    ]

    const changeModal = () => {

        setIsOpen(modalIsOpen ? false : true);
        setIdCliente(0)
    }


    const defCliente = (id: React.SetStateAction<number>) => {

        if (id == id_cliente) {
            setIdCliente(0)
        } else {
            setIdCliente(id)
        }

        let ValorTotal
        const Cliente = clientes.find((cliente) => cliente.id == id)
        const Servicos = Cliente?.dados.servicos


        ValorTotal = Servicos.reduce((acc, servico) => acc + servico.valor, 0);
        ValorTotal = ValorTotal.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })

        setServicos(Servicos)

        setSerFidel(Cliente?.dados.fidelidade)
        setSerValor(ValorTotal)


    }


    const Lancar = () =>{

        if(serFidel < 8){
            setSerFidel((prev)=> prev + 1 )
        }

        setIsOpen(false)

    }

    return (
        <>
            <section className={style.actions}>
                <div className={style.frame}>
                    <article className={style.Person}>
                        <div>
                            <h4> Olá <span> Eduardo</span>, </h4>
                            <h4>Bem Vindo!</h4>
                        </div>

                        <div>
                            <button title="Lançar Serviço" onClick={changeModal}>
                                <Icons.Money />
                            </button>
                        </div>
                    </article>

                    <article className={style.Equipe}>
                        <div>
                            <h4> Minha equipe</h4>
                        </div>

                        <div>

                            <button>
                                {/* <Icons.User_2 /> */}
                                <p>User1</p>
                            </button>
                            <button>
                                {/* <Icons.User_2 /> */}
                                <p>User2</p>
                            </button>
                            <button>
                                {/* <Icons.User_2 /> */}
                                <p>User3</p>
                            </button>
                            <button>
                                {/* <Icons.User_2 /> */}
                                <p>User3</p>
                            </button>

                        </div>
                    </article>
                </div>
            </section >

            <ModalDisplay
                isOpen={modalIsOpen}
                onRequestClose={changeModal}
                ariaHideApp={false}
                className={style.Modal}
                overlayClassName={style.modal_overlay}>

                <section className={style.ModalWindow}>

                    <header>
                        <div className={style.Title}>
                            <Icons.Money />
                            <h2>Lançar Serviço</h2>
                        </div>

                        <div className={style.Action}>
                            <button onClick={changeModal} className={style.Close}>
                                <Icons.Close />
                            </button>
                        </div>
                    </header>

                    <section className={style.SelCliente}>
                        <Select
                            className={style.Select}
                            classNames={{
                                label: "group-data-[filled=true]:-translate-y-5",
                                trigger: "min-h-16",
                                listboxWrapper: "max-h-[400px]",
                            }}
                            items={clientes}
                            label="Selecionar Cliente"


                            renderValue={(items) => {

                                return items.map((item) => (

                                    <div key={item.key} className={style.Item}>
                                        <div id={"campo_t"}>
                                            <span>{item.data?.dados.name}</span>
                                        </div>
                                    </div>
                                ));


                            }}
                            variant="bordered"
                        >
                            {(user) => (
                                <SelectItem key={user.id} textValue={user.dados.name} className={style.SelectItem} >
                                    <div className={style.Item} onClick={(e) => { defCliente(user.id) }}>
                                        <p>{user.dados.name}</p>
                                        <p>{user.dados.horas}</p>
                                    </div>
                                </SelectItem>
                            )}
                        </Select>
                    </section>

                    {

                        id_cliente ?

                            <>

                                <section className={style.SelServico}>
                                    <h3>Serviços Selecionados</h3>
                                    <div className={style.Servico}>


                                        {
                                            servicos.map((servico, key) => {
                                                return (
                                                    <IconServico key={key}
                                                        servico={servico} />
                                                )
                                            })

                                        }
                                    </div>

                                    <p> {serValor}</p>
                                </section>
                                <section className={style.Fidelidade}>
                                    <h3>Fidelidade</h3>
                                    <div className={style.Fidelidade}>
                                        <div className={style.Ponto}>
                                            {Fidelidade(serFidel)}
                                        </div>
                                    </div>
                                </section>
                                <footer>
                                    <button onClick={Lancar}>Lançar</button>
                                </footer>
                            </>
                            : <></>

                    }
                </section>

            </ModalDisplay>
        </>

    )
}

export default Actions