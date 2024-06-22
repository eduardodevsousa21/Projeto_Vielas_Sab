import styles from './styles.module.css'
import { IoCloseSharp } from "react-icons/io5";

export const Login = () => {
  return (
        <main>
        <div className={styles.container}>
        <div className={styles.close}>

        <IoCloseSharp className={styles.Iconfechar} />
        </div>
        <div className={styles.mensage}>
        <p>Bem Vindo ;)</p>
        <div className={styles.containerInput}>
        <form action="">
            <input type="email" placeholder='Email' />
            <br />
            <input type="password" placeholder='Senha'/>
          
            <br />
            <input type="checkbox" id={styles.matenhaconectado} />
            <label htmlFor="mantenhaConectado">Me mantenha conectado</label>
            <br />
            <button type="submit">ENTRAR</button>
            <p>
            <a href="#">Esqueceu a senha?</a>
            </p>
        </form>
        </div>
        </div>
    </div>
</main>
  )
}
