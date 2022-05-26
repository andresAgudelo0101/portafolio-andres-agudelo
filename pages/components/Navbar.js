import styles from "../../styles/Navbar.module.css";

function Navbar() {
    return (
    <nav className={styles.menu}>
      <a href="#home">Inicio</a>
      <a href="#about">acerca</a>
    </nav>
    )
}

export default Navbar;
