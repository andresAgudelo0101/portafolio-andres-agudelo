import styles from "../../styles/Projects.module.css";
import Link from "next/link";

function Projects(props) {
  const dataProject = props?.projects;
  let cont = 1;
  return (
    <>
      <div id="projects">
        <div className={styles.container}>
          <div className={styles.slider}>
            {dataProject?.projects?.map((projectId) => (
              <a key={projectId.id} href={"#" + projectId.id}>{cont++}</a>
            ))}

            <div className={styles.slides}>
              {dataProject?.projects?.map((project) => (
                <div  key={project.id} id={project.id}>
                  <div className={styles.containerImg}>
                    <img
                      src={project.img}
                      className={styles.img}
                      loading="lazy"
                    />
                  </div>
                  <div className={styles.containerText}>
                    <h3>{project.name}</h3>
                    <p className={styles.p}>{project.description}</p>
                    <p className={styles.p}>{project.info}</p>
                    <Link href={project.path}>
                      <a target="_blank" className={styles.btnProject}>
                        {project.btn}
                      </a>
                    </Link>
                  </div>
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
