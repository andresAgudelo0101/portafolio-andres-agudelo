import Link from "next/link";
import styles from "../../styles/About.module.css";

function About(props) {
  const dataAbout=props?.data?.about;
  return (
    <div id="about" className={styles.container}>
      <div>
        <div>
          <h1 className={styles.titulo}>{dataAbout?.title}</h1>
        </div>
        <div className={styles.containerGrid}>
          <div>
            <h5 className={styles.subtitulo}>{dataAbout?.subtitle1}</h5>
            <h2>{dataAbout?.p1}</h2>
            <p className={styles.p}>
              {dataAbout.p2}
            </p>
            <button className={styles.btnCv}>
              <Link href="/cv_andres_agudelo.pdf">
                <a target="_blank">{dataAbout?.btn}</a>
              </Link>
            </button>
          </div>
          <div>
            <h5 className={styles.subtitulo}>{dataAbout.subtitle2}</h5>
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
