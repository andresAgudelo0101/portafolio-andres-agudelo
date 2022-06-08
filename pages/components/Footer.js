import styles from "../../styles/Footer.module.css";
import Link from "next/link";

function Footer() {
    return (
        <div id="contact" className={styles.container} >
            <div>
            <div className={styles.containerLogos}>
                <Link href="https://github.com/andresAgudelo0101/">
                    <a target="_blank"><img src="/github.png" className={styles.img}/></a>
                </Link>
                <Link href="https://www.instagram.com/andres_agudelo_e/">
                    <a target="_blank"><img src="/instagram.png" className={styles.img}/></a>
                </Link>
                <Link href="https://www.linkedin.com/in/andres-agudelo-580895109">
                    <a target="_blank"><img src="/tuita.png" className={styles.img}/></a>
                </Link>
            </div>
            <h4>Mail: echeverry11298@gmail.com</h4>
            <h4>Cel: +57 3108415549</h4>
            </div>
        </div>
    )
}

export default Footer;
