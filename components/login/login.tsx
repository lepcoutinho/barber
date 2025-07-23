'use client';

import style from './style.module.scss'
import Image from 'next/image'
import Logomarca from '../../Img/Logomarca.png'
import IconGoogle from '../../Img/Icon_Google.png'
import IconFacebook from '../../Img/Icon_facebook.png'
import { useSession, signIn, signOut, getSession, GetSessionParams } from 'next-auth/react';
import Script from 'next/script'
import { GetServerSideProps } from 'next';


<Script src="https://accounts.google.com/gsi/client" async />

const Login = () => {


    const login_google = () => {
        signIn('google')
    }


    return (
        <section className={style.login}>





            <Image src={Logomarca}
                alt={'Logomarca'}
            />

            <div className={style.Form}>
                <h4>fazer login</h4>
                <input type="text" placeholder="USER" />
                <input type="Password" placeholder="Senha" />

                <div className={style.Actions}>
                    <button>Esqueci a minha senha</button>
                    <button>Logar</button>
                </div>

                <div className={style.Outros}>
                    <h4>Entrar Com</h4>
                    <button ><Image src={IconGoogle} alt={'Google'} onClick={(e) => login_google()} /></button>
                    <button><Image src={IconFacebook} alt={'Google'} /></button>


                </div>

            </div>

            <footer>
                dev
            </footer>

        </section>
    )
}

export const getServerSideProps: GetServerSideProps = async (context) => {

    const session = await getSession(context)
    console.log(session)

    return {
        props: {
            users: 'luiz'
        }
    }

}

export default Login