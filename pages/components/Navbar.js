import styles from "../../styles/Navbar.module.css";

function Navbar() {
  return (
    <nav className={styles.menu}>
      <div className={styles.links}>
        <a href="#home">Inicio</a>
        <a href="#about">acerca</a>
        <a href="#projects">proyectos</a>
      </div>
      <div className={styles.containerBtn}>
        <button>Engl</button>
      </div>
    </nav>
  );
}

export default Navbar;
