import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import comsocLogo from "../images/comsoc-logo.png";

function AboutPage() {
  return (
    <nav className="bg-meugrey">    
    <Layout>
      <SEO
        title="Sobre"
        keywords={[`engenharia`, `solidária`, `ufpa`, `ieee`]}
      />

      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-2/3 md:mr-8 text-white">
          <p className="border-l-4 border-grey-darkest font-serif leading-loose pl-4 text-justify">
          O projeto Engenharia Solidária é uma iniciativa do IEEE ComSoc Belém, na qual serão promovidas palestras e minicursos voltados para às áreas de engenharia e afins com o intuito de contribuir com a formação dos participantes. O intuito do projeto sem fins lucrativos é ir além da contribuição na formação dos alunos de Engenharia, de forma a contribuir também com as instituições de caridade do município de Belém e se tornar o movimento estudantil mais próximo da realidade externa ao ambiente acadêmico e industrial.
          <br />A participação nos eventos serão gratuitas e limitadas ao número de vagas anunciados. Serão sugeridas as doações de alimentos não perecíveis por parte dos participantes em cada evento, de forma que todos os alimentos doados sejam encaminhados para instituições de caridade ou grupos em vulnerabilidade social da cidade de Belém do Pará. Ao final de cada mês serão anunciada(s) a(s) instituição(ões) de caridade ou grupo(s) de pessoas em vulnerabilidade social que serão ajudados.

          </p>
        </div>

        <div className="w-2/3 md:w-1/3">
          <img src={comsocLogo} alt="ComSoc IEEE Logo" />
        </div>
      </div>
    </Layout>
    </nav>
  );
}

export default AboutPage;
