import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import catAndHumanIllustration from "../images/logo.png";

function IndexPage() {
  return (
    <Layout>
      <SEO
        title="Home"
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
      />

      <div className="text-center">
        <img
          src={catAndHumanIllustration}
          className="block mx-auto w-1/2"
          alt="Cat and human sitting on a couch"
        />

        <h2 className="bg-yellow inline-block my-8 p-3">
          Projeto Engenharia Solidária - ComSoc - IEEE Belém.
        </h2>

        <p>
        Participe dos nossos eventos e contribua com doações de alimentos não perecíveis como forma de contribuição para instituições de caridade e campanhas de doações para grupos em vulnerabilidade social. Mais informações sobre os eventos organizados <a href="/contact" 
            className="font-bold no-underline text-grey-darkest"
        >
            aqui
        </a>
        </p>
      </div>
    </Layout>
  );
}

export default IndexPage;
