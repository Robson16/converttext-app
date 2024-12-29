import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { Container, Paragraph, Section, Title } from "./styles";

const PrivacyPolicy: React.FC = () => {
  return (
    <Container>
      <Header>
        <Title>Política de Privacidade e Transparência</Title>
        <Paragraph>
          Bem-vindo ao nosso site! Sua privacidade é uma prioridade para nós.
          Aqui, explicamos como coletamos, usamos e protegemos suas informações,
          bem como o papel dos anúncios exibidos em nosso site.
        </Paragraph>
      </Header>
      <Section>
        <Title as="h2">1. Coleta de Informações</Title>
        <Paragraph>
          Nosso site pode coletar algumas informações automaticamente, como:
        </Paragraph>
        <ul>
          <li>Dados sobre o dispositivo que você usa para acessar o site (como tipo de navegador, sistema operacional e resolução da tela).</li>
          <li>Endereço IP e localização aproximada, utilizados para melhorar a personalização do conteúdo.</li>
          <li>Informações sobre como você interage com o site (páginas visitadas, tempo de permanência e cliques).</li>
        </ul>
      </Section>
      <Section>
        <Title as="h2">2. Uso de Cookies</Title>
        <Paragraph>
          Utilizamos cookies e tecnologias semelhantes para:
        </Paragraph>
        <ul>
          <li>Melhorar a experiência do usuário, lembrando preferências e configurações.</li>
          <li>Analisar o desempenho do site, ajudando-nos a melhorar continuamente.</li>
          <li>Personalizar anúncios exibidos, com base em suas interações anteriores.</li>
        </ul>
        <Paragraph>
          Você pode controlar ou desativar os cookies nas configurações do seu navegador. No entanto, isso pode afetar algumas funcionalidades do site.
        </Paragraph>
      </Section>
      <Section>
        <Title as="h2">3. Anúncios e Google AdSense</Title>
        <Paragraph>
          Este site utiliza o programa Google AdSense para exibir anúncios. O
          AdSense usa cookies para personalizar os anúncios com base nos
          interesses dos usuários e em suas interações anteriores na web.
        </Paragraph>
        <Paragraph>
          Os anúncios são selecionados automaticamente pelo Google e são
          adaptados ao conteúdo do site e ao perfil do visitante. Não temos
          controle direto sobre os anúncios exibidos, mas seguimos todas as
          diretrizes do Google para garantir a conformidade.
        </Paragraph>
        <Paragraph>
          Para mais informações sobre como o Google utiliza seus dados, acesse
          a{" "}
          <a
            href="https://policies.google.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
          >
            Política de Privacidade do Google
          </a>
          .
        </Paragraph>
      </Section>
      <Section>
        <Title as="h2">4. Compartilhamento de Informações</Title>
        <Paragraph>
          Não compartilhamos informações pessoais identificáveis com terceiros.
          Dados agregados e anônimos podem ser utilizados para melhorar os
          serviços e personalizar sua experiência no site.
        </Paragraph>
      </Section>
      <Section>
        <Title as="h2">5. Segurança</Title>
        <Paragraph>
          Adotamos medidas técnicas e organizacionais para proteger suas
          informações contra acesso não autorizado, uso indevido ou divulgação.
          No entanto, nenhum sistema de segurança é infalível, e recomendamos
          que você sempre tome cuidado ao navegar na internet.
        </Paragraph>
      </Section>
      <Section>
        <Title as="h2">6. Direitos do Usuário</Title>
        <Paragraph>
          Você tem o direito de:
        </Paragraph>
        <ul>
          <li>Saber quais informações coletamos e como elas são usadas.</li>
          <li>Solicitar a exclusão de dados pessoais, quando aplicável.</li>
          <li>Optar por não participar da coleta de dados para personalização de anúncios.</li>
        </ul>
        <Paragraph>
          Para exercer seus direitos ou esclarecer dúvidas, entre em contato
          conosco por meio da seção <strong>Fale Conosco</strong>.
        </Paragraph>
      </Section>
      <Section>
        <Title as="h2">7. Alterações na Política</Title>
        <Paragraph>
          Esta política pode ser atualizada periodicamente para refletir
          mudanças em nossos serviços ou nas exigências legais. Recomendamos
          que você revisite esta página regularmente para se manter informado.
        </Paragraph>
      </Section>
      <Section>
        <Title as="h2">Fale Conosco</Title>
        <Paragraph>
          Se você tiver dúvidas sobre esta política ou sobre o uso de suas
          informações, entre em contato conosco pelo e-mail{" "}
          <a href="mailto:contato@converttext.app.br">contato@converttext.app.br</a>.
        </Paragraph>
      </Section>
      <Footer>
      </Footer>
    </Container>
  );
};

export default PrivacyPolicy;
