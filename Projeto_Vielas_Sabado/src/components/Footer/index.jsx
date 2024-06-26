import styles from './styles.module.css';
import { CiFacebook} from "react-icons/ci";
import { FaInstagram } from "react-icons/fa6";
import { CiTwitter } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci"; 






    export const Footer = () => {
        return (
        
            <div className={styles.footer}>
                <div className={styles.vielasIcons}>
                    <h1>VIELAS</h1>
                    
                    <div className={styles.icones}>
                        <CiFacebook className={styles.redesIcons}/>
                        <FaInstagram className={styles.redesIcons}/>
                        <CiTwitter className={styles.redesIcons}/>
                        <FaWhatsapp className={styles.redesIcons}/>
                        <CiLinkedin className={styles.redesIcons}/>
                    </div>
                </div>
                <div className={styles.Mens}>
                    <ul>
                        <li>Quem somos</li>
                        <li>Equipe</li>
                        <li>Apoie</li>
                        <li>Fale Conosco</li>
                    </ul>
                    </div>
           </div>
        )
    }
