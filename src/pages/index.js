import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import logo from "../images/logo-3-bk.png";
import ufpa from "../images/ufpa-logo.png";
import comsoc from "../images/comsoc-logo.png";

function IndexPage() {
  return (
      <nav className="bg-meugrey">    
      <Layout>
      <SEO
        title="Inicio"
        keywords={[`engenharia`, `solidária`, `ufpa`, `ieee`]}
      />

      <div className="text-white text-center">
        <img
          src={logo}
          className="block mx-auto w-1/2"
          alt="Engenharia Solidária Logo"
        />

        <h2 className="text-black bg-white inline-block my-8 p-3">
          Projeto Engenharia Solidária - ComSoc - IEEE Belém.
        </h2>

        <p>
        Participe dos nossos eventos e contribua com doações de alimentos não perecíveis como forma de contribuição para instituições de caridade e campanhas de doações para grupos em vulnerabilidade social. Mais informações sobre os eventos organizados <a href="/events" 
            className="font-bold no-underline text-white"
        >
            aqui
        </a>
        </p>
        <br /><br /><br /><br />
        <h2>Organizadores:</h2>
          <img
            src={ufpa}
            className="mx-auto w-1/4 align-middle"
            alt="Engenharia Solidária Logo"
          />
          <img
            src={comsoc}
            className="mx-auto w-1/4 align-middle"
            alt="Engenharia Solidária Logo"
          />

      </div>
    </Layout>
    </nav>
  );
}

export default IndexPage;
