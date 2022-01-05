import React, { useCallback, useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Button from '../../components/Button';
import Header from '../../components/Header';
import Textarea from '../../components/Textarea';
import {
  convertToAlternatingCase,
  convertToCapitalizedCase,
  convertToInverseCase,
  convertToSentenceCase,
  convertToUrlCase,
} from '../../utils/textConversion';
import { Container, Actions } from './styles';

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
    setText(text.trim().toUpperCase());
    setPlaceholder(placeholder.trim().toUpperCase());
  }, [text, placeholder]);

  const handleLowerCase = useCallback(() => {
    setText(text.trim().toLowerCase());
    setPlaceholder(placeholder.trim().toLowerCase());
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
        toast.success('Copiado para sua área de transferência');
      },
      error => {
        toast.error(error);
      },
    );
  }, [text]);

  const handleClear = useCallback(() => {
    setText('');
  }, []);

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
