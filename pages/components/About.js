import Link from "next/link";
import styles from "../../styles/About.module.css";

function About() {
  return (
    <div id="about" className={styles.container}>
      <div>
        <div>
          <h1 className={styles.h1}>Acerca de mi</h1>
        </div>
        <div className={styles.containerGrid}>
          <div>
            <h5 className={styles.subtitulo}>Quien soy</h5>
            <h2>Andrés Agudelo, Tecnólogo en sistemas.</h2>
            <p className={styles.p}>
                Desarrollador Front-end, apasionado por aprender y crear nuevas cosas.
            </p>
            <button className={styles.btnCv}>
              <Link href="/cv_andres_agudelo.pdf">
                <a target="_blank">Ver hoja de vida</a>
              </Link>
            </button>
          </div>
          <div>
            <h5 className={styles.subtitulo}>Habilidades</h5>
            <div className={styles.containerSkills}>
              <div className={styles.skill}>
                <div>
                  <img src="/react.png" className={styles.imgLogo} alt="logo" />
                </div>
                <h5>React</h5>
              </div>
              <div className={styles.skill}>
                <div>
                  <img src="/next.png" className={styles.imgLogo} alt="logo" />
                </div>
                <h5>Next.js</h5>
              </div>
              <div className={styles.skill}>
                <div>
                  <img src="/node.png" className={styles.imgLogo} alt="logo" />
                </div>
                <h5>Node.js</h5>
              </div>
              <div className={styles.skill}>
                <div>
                  <img src="/mysql.png" className={styles.imgLogo} alt="logo" />
                </div>
                <h5>MySQL</h5>
              </div>
              <div className={styles.skill}>
                <div>
                  <img src="/git.png" className={styles.imgLogo} alt="logo" />
                </div>
                <h5>Git</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
