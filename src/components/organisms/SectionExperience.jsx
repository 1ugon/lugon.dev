import React from "react";

import styles from "../../styles/SectionExperience.module.css";

function SectionExperience() {
  return (
    <div className={styles.container} id="SectionExperience">
      <div className={styles.formation}>
        <h1>FORMAÇÃO</h1>
        <h2>Sistemas da Informação</h2>
        <h3>Centro Universitário do Distrito Federal - UDF</h3>
        <h4>(Janeiro/2019 - atual)</h4>
        <p>
          Administração de fluxos de informação em qualquer rede de computadores
          é onde um profissional de sistemas da informação atua, ele desenvolve
          sistemas de armazenamento e recuperação de dados.
        </p>
        <h2>Ciência da Computação</h2>
        <h3>Centro Universitário de Brasília - CEUB</h3>
        <h4>(Janeiro/2018 - Dezembro/2018)</h4>
        <p>
          Ciência da Computação é a área do conhecimento que atua no
          desenvolvimento de programas para diferentes dispositivos, desse modo
          contém programação, banco de dados e sistemas operacionais.
        </p>
      </div>
      <div className={styles.experience}>
        <h1>EXPERIÊNCIA</h1>
        <h2>Freelancer</h2>
        <h3>Remoto</h3>
        <h4>(Janeiro/2021 - atual)</h4>
        <p>Freelancer trabalhando com desenvolvimento web e mobile.</p>

        <h2>Estágio na UDF</h2>
        <h3>Remoto</h3>
        <h4>(Abril/2020 - Junho/2020)</h4>
        <p>
          Estagiei no desenvolvimento de um sistema em PHP com o framework
          Laravel, em meio a um time de quinze pessoas utilizando o Slack na
          comunicação, Trello na organização das atividades e o Git para
          repositório e versionamento de código.
        </p>
      </div>
    </div>
  );
}

export default SectionExperience;
