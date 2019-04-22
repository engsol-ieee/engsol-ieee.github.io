import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

function ContactPage() {
  return (
    <nav className="bg-meugrey">
    <Layout>
      <SEO
        title="Eventos"
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
      />
      <div className="text-white">
      <h1>Próximos Eventos:</h1>
      <br /><br />
      <h2>XX/04/2019 - Git para Iniciantes: Conhecimentos básicos de Git para quem está começando</h2>
      <p>Minicurso sobre a ferramenta Git amplamente utilizada para versionamento de código de projetos. O conhecimento de Git é essencial para todos que trabalham na área de tecnologia por ser a ferramenta mais utilizada para gerenciamento de projetos.<br /><b>O minicurso é gratuito e pedimos a doação de alimentos não perecíveis.</b><br /><b>Quantidade de vagas</b>:  20 (para os 20 primeiros inscritos)<br />Inscrições no <a href="">Link</a></p>
      </div>
    </Layout>
    </nav>
  );
}

export default ContactPage;
