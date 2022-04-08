import { GetStaticProps } from "next";

import Head from "next/head"
import styles from '../styles/styles.module.scss'

export default function Home() {
  return (
    <>
      <Head>
        <title>Board - Organizando suas tarefas</title>
      </Head>
      <main className={styles.contentContainer}> 
        <img src='/images/board-user.svg' alt='Ferramenta board' />

        <section className={styles.callToAction}>
          <h1>Uma ferramenta para o seu dia a dia Escreva, Planeje e Organize-se...</h1>
          <p>
            <span>100% Gratuita</span> e online.
          </p>
        </section>

        <div className={styles.donaters}>
          
          <img src='/images/user.jpg' alt='Imagem apoiadores' />
          <img src='/images/user.jpg' alt='Imagem apoiadores' />
          <img src='/images/user.jpg' alt='Imagem apoiadores' />
          <img src='/images/user.jpg' alt='Imagem apoiadores' />
        </div>
        
      </main>
    
    </>
    
  )
}


//validação lado servidor

export const getStaticProps: GetStaticProps = async () =>{


  return{
    props: {

    },
    revalidate: 60 * 60 //Atualiza a cada 60 minutos.
  }
}