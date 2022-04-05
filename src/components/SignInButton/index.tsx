import styles from './styles.module.scss'
import { FaGithub } from 'react-icons/fa'
import { FiX} from 'react-icons/fi'


export function SignInButton(){

    const session = true

    return session ? (
        
            <button
            type='button'
            className={styles.signInButton}
            onClick={()=>{}}            
            >
                <img className={styles.img} src='/images/user.jpg' alt='Foto do usuario' />
                Olá Vagner
                <FiX color='#737380' className={styles.closeIcon}
                />                
            </button>
        
    ) : (
            <button
            type='button'
            className={styles.signInButton}
            onClick={()=>{}}            
            >
                <FaGithub 
                    color='#FFB800'
                />
                Entrar com github
            </button>
    )
}