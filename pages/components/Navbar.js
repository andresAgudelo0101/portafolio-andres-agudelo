import styles from "../../styles/Navbar.module.css";

function Navbar(props) {
  const dataNav=props?.data?.nav;
  return (
    <nav className={styles.menu}>
      <div className={styles.links}>
        <a href="#home">{dataNav?.a1}</a>
        <a href="#about">{dataNav?.a2}</a>
        <a href="#projects">{dataNav?.a3}</a>
        <a href="#contact">{dataNav?.a4}</a>
      </div>
      <div className={styles.containerBtn}>
        <button className={styles.btnFlag} onClick={props.setLanguage}>
          <img src={dataNav?.icon} className={styles.flag}/>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
