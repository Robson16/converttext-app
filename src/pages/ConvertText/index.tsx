import React, { useCallback, useState } from 'react';
import ButtonDefault from '../../components/ButtonDefault';
import PageHeader from '../../components/PageHeader';
import Textarea from '../../components/Textarea';
import {
  convertToAlternatingCase,
  convertToCapitalizedCase,
  convertToInverseCase,
  convertToSentenceCase,
  convertToUrlCase,
} from '../../utils/textConversion';
import './styles.css';

const ConvertText: React.FC = () => {
  const [placeholder, setPlaceholder] = useState(
    'Digite ou cole seu texto aqui',
  );
  const [text, setText] = useState('');

  const handleSentenceCase = useCallback(() => {
    setText(convertToSentenceCase(text));
    setPlaceholder(convertToSentenceCase(placeholder));
  }, [text, placeholder]);

  const handleCapitalizedCase = useCallback(() => {
    setText(convertToCapitalizedCase(text));
    setPlaceholder(convertToCapitalizedCase(placeholder));
  }, [text, placeholder]);

  const handleUpperCase = useCallback(() => {
    setText(text.toUpperCase());
    setPlaceholder(placeholder.toUpperCase());
  }, [text, placeholder]);

  const handleLowerCase = useCallback(() => {
    setText(text.toLowerCase());
    setPlaceholder(placeholder.toLowerCase());
  }, [text, placeholder]);

  const handleAlternatingCase = useCallback(() => {
    setText(convertToAlternatingCase(text));
    setPlaceholder(convertToAlternatingCase(placeholder));
  }, [text, placeholder]);

  const handleInverseCase = useCallback(() => {
    setText(convertToInverseCase(text));
    setPlaceholder(convertToInverseCase(placeholder));
  }, [text, placeholder]);

  const handleUrlCase = useCallback(() => {
    setText(convertToUrlCase(text));
    setPlaceholder(convertToUrlCase(placeholder));
  }, [text, placeholder]);

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(text).then(
      () => {
        console.log('copy success');
      },
      error => {
        console.log(error);
      },
    );
  }, [text]);

  const handleClear = useCallback(() => {
    setText('');
  }, []);

  return (
    <div id="page-convert-text" className="container">
      <PageHeader
        title="Conversor de texto"
        description="Você já digitou um texto e só então percebeu que estava todo em MAIÚSCULAS? Não se preocupe, você não precisa digitar tudo novamente!"
      />

      <main>
        <form>
          <Textarea
            name="text"
            label="Digite seu texto e escolha o tipo de formato que deseja converter."
            placeholder={placeholder}
            value={text}
            onChange={e => {
              setText(e.target.value);
            }}
            autoFocus
          />
        </form>
        <div className="actions">
          <ButtonDefault text="formato-url" onClick={handleUrlCase} />
          <ButtonDefault text="Formato frase" onClick={handleSentenceCase} />
          <ButtonDefault
            text="Palavras Capitalizada"
            onClick={handleCapitalizedCase}
          />
          <ButtonDefault text="MAIÚSCULAS" onClick={handleUpperCase} />
          <ButtonDefault text="minúsculas" onClick={handleLowerCase} />
          <ButtonDefault
            text="lEtRaS AlTeRnAdAs"
            onClick={handleAlternatingCase}
          />
          <ButtonDefault text="InVeRtEr lEtRaS" onClick={handleInverseCase} />
          <ButtonDefault text="Copiar" onClick={handleCopy} />
          <ButtonDefault text="Limpar" onClick={handleClear} />
        </div>
      </main>
    </div>
  );
};

export default ConvertText;
