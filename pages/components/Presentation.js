import styles from "../../styles/Presentation.module.css";

function Presentation() {
    return (
        <div id="home" className={styles.page1}>
        <h1 className={styles.h1}>
            <span className={styles.span1}>
              Andrés.
            </span>
            <span className={styles.span2}>
              Agudelo.
            </span>
            <span className={styles.span3}>
              FrontEnd.
            </span>
            <span className={styles.span4}>
              Developer.
            </span>
          </h1>
        </div>
    )
}

export default Presentation;
