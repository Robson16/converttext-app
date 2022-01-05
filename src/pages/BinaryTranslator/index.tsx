import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import Textarea from '../../components/Textarea';
import {
  convertBinaryToText,
  convertTextToBinary,
} from '../../utils/textConversion';
import { Container } from './styles';

const BinaryTranslator: React.FC = () => {
  const placeholder = 'Digite ou cole seu texto aqui';

  const [text, setText] = useState('');
  const [binary, setBinary] = useState('');

  useEffect(() => {
    if (text.length) {
      setBinary(convertTextToBinary(text));
    } else {
      setBinary(convertTextToBinary(placeholder));
    }
  }, [text]);

  useEffect(() => {
    if (!binary.length || binary === convertTextToBinary(placeholder)) {
      setText('');
    } else {
      setText(convertBinaryToText(binary));
    }
  }, [binary]);

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
        <form>
          <Textarea
            name="text"
            label="Texto"
            placeholder={placeholder}
            value={text}
            onChange={e => {
              setText(e.target.value);
            }}
          />
          <Textarea
            name="binary"
            label="Binário"
            value={binary}
            onChange={e => {
              setBinary(e.target.value);
            }}
          />
        </form>
      </main>
    </Container>
  );
};

export default BinaryTranslator;
