import React from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { Container, Paragraph, Section, Title } from "./styles";

const About: React.FC = () => {
  return (
    <Container>
      <Header>
        <Title>Sobre o Aplicativo</Title>
      </Header>
      <Section>
        <Paragraph>
          Nosso aplicativo foi desenvolvido para ser uma ferramenta online gratuita de manipulação de texto, ideal para quem busca eficiência e praticidade no dia a dia (e, em alguns casos, um pouco de diversão também). Seja para corrigir textos escritos acidentalmente em maiúsculas, ajustar rapidamente a capitalização de títulos ou explorar outras transformações, nossa ferramenta permite que você alcance resultados rápidos e variados com facilidade.
        </Paragraph>
        <Paragraph>
          Além disso, oferecemos conversores únicos, como o tradutor de código binário, que transforma texto em linguagem de máquina, ou ainda funcionalidades que permitem destacar seu texto de maneira criativa.
        </Paragraph>
        <Paragraph>
          Essas ferramentas são ideais tanto para fins profissionais, como em anúncios e projetos, quanto para uso em redes sociais, ajudando seu conteúdo a se destacar e chamar a atenção.
        </Paragraph>
        <Paragraph>
          Explore todas as funcionalidades disponíveis!
        </Paragraph>
        <Paragraph>
          Se você tiver sugestões de novas ferramentas que poderiam ser úteis, <a href='mailto:contato@converttext.app.br'>entre em contato conosco.</a> Ficaremos felizes em ouvir suas ideias e trabalhar para torná-las realidade!
        </Paragraph>
      </Section>
      <Footer />
    </Container>
  );
};

export default About;
