import React from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Textarea from '../../components/Textarea';
import { useTextConverter } from '../../hooks/useTextConverter';
import { Container, Form } from './styles';

const BinaryTranslator: React.FC = () => {
  const {
    placeholder,
    text,
    binary,
    countLetter,
    countWord,
    countLine,
    handleTextInput,
    handleBinaryInput,
  } = useTextConverter();

  return (
    <Container>
      <Header>
        <h1>Tradutor Binário</h1>
        <p>
          Quer saber como fica seu texto em binário? Ou converter um binário
          para texto?
        </p>
      </Header>
      <main>
        <Form>
          <Textarea
            name="text"
            label="Texto"
            placeholder={placeholder}
            value={text}
            onChange={event => {
              handleTextInput(event.target.value);
            }}
          />
          <Textarea
            name="binary"
            label="Binário"
            value={binary}
            onChange={event => {
              handleBinaryInput(event.target.value);
            }}
          />
        </Form>
        <p>
          {`
          Contagem de letras: ${countLetter} |
          Contagem de palavras: ${countWord} |
          Contagem de linhas: ${countLine}
          `}
        </p>
      </main>
      <Footer>

      </Footer>
    </Container>
  );
};

export default BinaryTranslator;
