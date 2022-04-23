import React from 'react';
import Button from '../../components/Button';
import Header from '../../components/Header';
import Textarea from '../../components/Textarea';
import { useTextConverter } from '../../hooks/useTextConverter';
import { Actions, Container, Form } from './styles';

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
          <Button onClick={handleUrlCase}>formato-url</Button>
          <Button onClick={handleSentenceCase}>Formato frase</Button>
          <Button onClick={handleCapitalizedCase}>Palavras Capitalizada</Button>
          <Button onClick={handleUpperCase}>MAIÚSCULAS</Button>
          <Button onClick={handleLowerCase}>minúsculas</Button>
          <Button onClick={handleAlternatingCase}>lEtRaS AlTeRnAdAs</Button>
          <Button onClick={handleInverseCase}>InVeRtEr lEtRaS</Button>
          <Button onClick={handleCopy}>Copiar</Button>
          <Button onClick={handleClear}>Limpar</Button>
        </Actions>
      </main>
    </Container>
  );
};

export default ConvertText;
