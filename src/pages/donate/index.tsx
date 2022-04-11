import styles from './styles.module.scss'
import Head from 'next/head'
import { useState } from 'react'
import firebase from '../../services/firebaseConnection'

import { GetServerSideProps } from "next";
import { getSession } from 'next-auth/client';

import { PayPalButtons } from '@paypal/react-paypal-js'

import Image from 'next/image'
import imgRocket from '../../../public/images/rocket.svg'


interface DonateProps {
    user: {
        nome: string
        id: string
        image: string
    }    
}

export default function Donate({user}: DonateProps){

    const [vip, setVip] = useState(false)

    async function handleSaveDonate(){
        await firebase.firestore().collection('users')
        .doc(user.id)
        .set({
            donate: true,
            lastDonate: new Date(),
            image: user.image
        })
        .then(() =>{
            setVip(true)
        })
        .catch((err) =>{
            console.log(err)
        })

    }
    return(
        <>
            <Head>
                <title>
                    Ajude a plataforma board ficar online!
                </title>
            </Head>
            <main className={styles.container}>
                <Image src={imgRocket} alt='Seja Apoiador' />
                {vip && (
                    <div className={styles.vip}>
                        <Image width={50} height={50} src={user.image} alt='Imagem apoiador' />
                        <span>Parabens voce é um apoiador!</span>
                    </div>
                )}

                <h1>Seja um apoiador deste projeto 🏆</h1>
                <h3>Contribua com apenas <span>R$ 1,00</span></h3>
                <strong>Apareça na nossa home, tenha funcionalidades exclusivas.</strong>

                <PayPalButtons 
                    createOrder={(data, actions) => {
                        return actions.order.create({
                            purchase_units: [{
                                amount:{
                                    value: '1'
                                }
                            }]
                        })
                    }}

                    onApprove={(data, actions)=>{
                        return actions.order.capture().then(function(details){
                            console.log('Compra aprovada: ' + details.payer.name.given_name)
                            handleSaveDonate()
                        })
                    }}
                />
            </main>

        </>
    )
}


//Verificação lado servidor

export const getServerSideProps: GetServerSideProps = async({ req }) =>{

    const session = await getSession({ req })

    if(!session?.id){
        //Se o user nao tiver logado vamos redirecionar para home
        return{
            redirect:{
                destination: '/',
                permanent: false
            }
        }
    }

    
    const user = {
        nome: session?.user.name,
        id: session?.id,
        image: session?.user.image
    }
    
    return{
        props:{
            user,            

        }
    }
}
