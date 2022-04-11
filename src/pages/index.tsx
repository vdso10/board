import { GetStaticProps } from "next";

import Head from "next/head"
import styles from '../styles/styles.module.scss'

import firebase from '../services/firebaseConnection'
import { useState } from "react";

import Image from 'next/image'
import userBoard from '../../public/images/board-user.svg'


type Data = {
  id: string
  donate: boolean
  lasDonate: Date
  image: string
}

interface HomeProps{
  data: string
}


export default function Home({ data }: HomeProps) {

  const [donaters, setDonaters] = useState<Data[]>(JSON.parse(data))

  return (
    <>
      <Head>
        <title>Board - Organizando suas tarefas</title>
      </Head>
      <main className={styles.contentContainer}> 
        <Image src={userBoard} alt='Ferramenta board' />

        <section className={styles.callToAction}>
          <h1>Uma ferramenta para o seu dia a dia Escreva, Planeje e Organize-se...</h1>
          <p>
            <span>100% Gratuita</span> e online.
          </p>
        </section>

        {donaters.length !== 0 && <h3>Apoiadores:</h3>}
        
        <div className={styles.donaters}>
          {donaters.map(item => (
            <Image width={65} height={65} key={item.image} src={item.image} alt='Imagem Apoiador' />
          ))}
                    
        </div>
        
      </main>
    
    </>
    
  )
}


//validação lado servidor

export const getStaticProps: GetStaticProps = async () =>{

  const donaters = await firebase.firestore().collection('users').get()

  const data = JSON.stringify(donaters.docs.map(item => {
    return{
      id: item.id,
      ...item.data(),
    }
  }))


  return{
    props: {
      data
    },
    revalidate: 60 * 60 //Atualiza a cada 60 minutos.
  }
}