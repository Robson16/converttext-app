import React, { useEffect, useState } from 'react';
import PageHeader from '../../components/PageHeader';
import Textarea from '../../components/Textarea';
import {
  convertBinaryToText,
  convertTextToBinary,
} from '../../utils/textConversion';
import './styles.css';

const BinaryTranslater: React.FC = () => {
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
    <div id="page-convert-binary" className="container">
      <PageHeader
        title="Tradutor Binário"
        description="Quer saber como fica seu texto em binário? Ou converter um binário para texto?"
      />

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
    </div>
  );
};

export default BinaryTranslater;
