"use client"
import Dashboard from '@/components/dashboard/dashboard';
import style from './style.module.scss'
import { FaUsers as IconCliente } from "react-icons/fa";
import { FaSearch as IconSearch } from "react-icons/fa";
import { MdGroupAdd as IconNewCliente } from "react-icons/md";
import Cliente from '@/components/cliente/cliente';
// import { Button } from "@nextui-org/react";


const Clientes = () => {


    let Clientes = [{
        id: '01',
        nome: "Luiz Eduardo",
        dtNas: "01/03/1996",
        tel: "(27)99881-7621",
        nvFide: "2",
        address: {
            street: "Rua dois de maio",
            umber: '106',
            neighborhood: "Jardins",
            city: "Vila Velha",
            uf: "ES"
        },
        serico: {
            dtUltimo: "01/11/2024",
            servicos: [{ id: "S1" }]
        }
    }, {
        id: '02',
        nome: "Natã",
        dtNas: "20/12/1996",
        tel: "(27)99881-7622",
        nvFide: "2",
        address: {
            street: "Rua três de maio",
            number: '106',
            neighborhood: "Jardins",
            city: "Vila Velha",
            uf: "ES"
        },
        serico: {
            dtUltimo: "11/12/2024",
            servicos: [{ id: "S1" }, { id: "S2" }, { id: "S3" }]
        }
    },
    ]














    return (
        <section className={style.Clientes}>
            <title>Agenda | Nome Barberia</title>
            <header>
                <div className={style.Text} >
                    <IconCliente />
                    <h4>Clientes</h4>
                </div>
                {<div className={style.Oper}>
                    <button>
                        <IconSearch />
                    </button>
                    <button>
                        <IconNewCliente />
                    </button>

                </div>}
            </header>

            <section className={style.Result}>
                <div className={style.Clientes}>

                    {
                        Clientes &&
                        Clientes.map((cliente, index) => {
                            return (
                                <Cliente dados={cliente} key={index} />
                            )
                        })
                    }

                </div>
                <div className={style.Dashboard}>
                    <Dashboard />
                </div>
            </section>


        </section>
    )
}

export default Clientes