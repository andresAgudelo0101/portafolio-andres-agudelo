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
      <div>
        <div className={styles.container}>
        
          <h1 className={styles.titulo}>Proyectos Realizados</h1>
          <div className={styles.x}>
          <div className={styles.containerLista}>
            {proyectos.map((proyecto) => (
              <div className={styles.card} to={proyecto.path} key={proyecto.id}>
                <p className={styles.tituloCard}>{proyecto.name}</p>
                <img
                  src={proyecto.img}
                  className={styles.img1}
                  alt={proyecto.alt}
                />
              </div>
            ))}
          </div>
        </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
