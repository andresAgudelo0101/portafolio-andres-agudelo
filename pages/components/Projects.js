import styles from "../../styles/Projects.module.css";
function Projects() {
  const proyectos = [
    {
      id: "cuevana3",
      path: "/Cuevana3",
      name: "Agudelo Films",
      img: "/as",
      alt: "imagen agudelo films",
    },
    {
      id: "shopping",
      path: "/shopping",
      name: "Tienda Tenis",
      img: "/as",
      alt: "imagen shopping",
    },
    {
      id: "pokemon",
      path: "/pokemon",
      name: "Random Pokemon",
      img: "/as",
      alt: "imagen pokemon",
    },
    {
      id: "contactame",
      path: "/PruebaIdata",
      name: "Contactame",
      img: "/as",
      alt: "imagen contactame",
    },
  ];

  return (
    <>
      <div id="projects">
        <div className={styles.container}>
          <div class={styles.slider}>
            <a href="#slide-1">1</a>
            <a href="#slide-2">2</a>
            <a href="#slide-3">3</a>
            <a href="#slide-4">4</a>
            <a href="#slide-5">5</a>

            <div class={styles.slides}>
              <div id="slide-1">1</div>
              <div id="slide-2">2</div>
              <div id="slide-3">3</div>
              <div id="slide-4">4</div>
              <div id="slide-5">5</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
