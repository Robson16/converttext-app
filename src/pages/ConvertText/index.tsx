import React from 'react';
import Button from '../../components/Button';
import Header from '../../components/Header';
import Textarea from '../../components/Textarea';
import { useTextConverter } from '../../hooks/useTextConverter';
import { trackEvent } from '../../services/google-analytics/googleAnalytics';
import { About, Actions, Container, Form } from './styles';
import Card from '../../components/Card';

const ConvertText: React.FC = () => {
  const {
    text,
    placeholder,
    countLetter,
    countWord,
    countLine,
    handleTextInput,
    handleSentenceCase,
    handleCapitalizedCase,
    handleUpperCase,
    handleLowerCase,
    handleAlternatingCase,
    handleInverseCase,
    handleUrlCase,
    handleCopy,
    handleClear,
  } = useTextConverter();

  return (
    <Container>
      <Header>
        <h1>Conversor de texto</h1>
        <p>
          Você já digitou um texto e só então percebeu que estava todo em
          MAIÚSCULAS? Não se preocupe, você não precisa digitar tudo novamente!
        </p>
      </Header>
      <main>
        <Form>
          <Textarea
            name="text"
            label="Digite seu texto e escolha o tipo de formato que deseja converter."
            placeholder={placeholder}
            value={text}
            onChange={event => {
              handleTextInput(event.target.value);
            }}
            autoFocus
          />
        </Form>
        <p>
          {`
          Contagem de letras: ${countLetter} |
          Contagem de palavras: ${countWord} |
          Contagem de linhas: ${countLine}
          `}
        </p>
        <Actions>
          <Button
            onClick={() => {
              trackEvent("Conversor de Texto", "Clique", "Formato URL");
              handleUrlCase();
            }}
          >
            formato-url
          </Button>
          <Button
            onClick={() => {
              trackEvent("Conversor de Texto", "Clique", "Formato Frase");
              handleSentenceCase();
            }}
          >
            Formato frase
          </Button>
          <Button
            onClick={() => {
              trackEvent("Conversor de Texto", "Clique", "Palavras Capitalizada");
              handleCapitalizedCase();
            }}
          >
            Palavras Capitalizada
          </Button>
          <Button
            onClick={() => {
              trackEvent("Conversor de Texto", "Clique", "MAIÚSCULAS");
              handleUpperCase();
            }}
          >
            MAIÚSCULAS
          </Button>
          <Button
            onClick={() => {
              trackEvent("Conversor de Texto", "Clique", "minúsculas");
              handleLowerCase();
            }}
          >
            minúsculas
          </Button>
          <Button
            onClick={() => {
              trackEvent("Conversor de Texto", "Clique", "lEtRaS AlTeRnAdAs");
              handleAlternatingCase();
            }}
          >
            lEtRaS AlTeRnAdAs
          </Button>
          <Button
            onClick={() => {
              trackEvent("Conversor de Texto", "Clique", "InVeRtEr lEtRaS");
              handleInverseCase();
            }}
          >
            InVeRtEr lEtRaS
          </Button>
          <Button
            onClick={() => {
              trackEvent("Conversor de Texto", "Clique", "Copiar");
              handleCopy();
            }}
          >
            Copiar
          </Button>
          <Button
            onClick={() => {
              trackEvent("Conversor de Texto", "Clique", "Limpar");
              handleClear();
            }}
          >
            Limpar
          </Button>
        </Actions>
        <About>
          <Card title="Bem-vindo ao Conversor de Texto">
            <p>Uma ferramenta online prática e intuitiva onde você pode alternar entre letras maiúsculas e minúsculas, capitalizar, decapitalizar, converter para estilos alternados e transformar seu texto de várias formas. Explore as opções abaixo e descubra tudo o que você pode fazer!</p>
          </Card>
          <Card title="Formato Frase">
            <p>Converte o texto para o formato de frase, onde a primeira letra de cada sentença é maiúscula.</p>
            <p><strong>Exemplo:</strong></p>
            <p><em>Entrada:</em> o céu está azul. que dia lindo!</p>
            <p><em>Saída:</em> O céu está azul. Que dia lindo!</p>
          </Card>
          <Card title="Palavras Capitalizadas">
            <p>Torna maiúscula a primeira letra de cada palavra no texto.</p>
            <p><strong>Exemplo:</strong></p>
            <p><em>Entrada:</em> bom dia, mundo</p>
            <p><em>Saída:</em> Bom Dia, Mundo</p>
          </Card>
          <Card title="MAIÚSCULAS">
            <p>Converte todo o texto para letras maiúsculas.</p>
            <p><strong>Exemplo:</strong></p>
            <p><em>Entrada:</em> bom dia</p>
            <p><em>Saída:</em> BOM DIA</p>
          </Card>
          <Card title="minúsculas">
            <p>Converte todo o texto para letras minúsculas.</p>
            <p><strong>Exemplo:</strong></p>
            <p><em>Entrada:</em> BOM DIA</p>
            <p><em>Saída:</em> bom dia</p>
          </Card>
          <Card title="lEtRaS AlTeRnAdAs">
            <p>Alterna entre maiúsculas e minúsculas em cada caracter do texto.</p>
            <p><strong>Exemplo:</strong></p>
            <p><em>Entrada:</em> bom dia</p>
            <p><em>Saída:</em> BoM DiA</p>
          </Card>
          <Card title="Inverter Letras">
            <p>Inverte o caso de cada letra, tornando maiúsculas em minúsculas e vice-versa.</p>
            <p><strong>Exemplo:</strong></p>
            <p><em>Entrada:</em> BoM DiA</p>
            <p><em>Saída:</em> bOm dIa</p>
          </Card>
          <Card title="Formato URL">
            <p>Converte o texto para um formato amigável para URLs, removendo espaços e caracteres especiais.</p>
            <p><strong>Exemplo:</strong></p>
            <p><em>Entrada:</em> Olá Mundo!</p>
            <p><em>Saída:</em> ola-mundo</p>
          </Card>
          <Card title="Copiar para a Área de Transferência">
            <p>Copia o texto processado para a área de transferência do sistema, facilitando o uso em outros aplicativos.</p>
          </Card>
          <Card title="Limpar Texto">
            <p>Remove todo o conteúdo do campo de texto, permitindo que o usuário comece do zero.</p>
          </Card>
        </About>
      </main>
    </Container>
  );
};

export default ConvertText;
