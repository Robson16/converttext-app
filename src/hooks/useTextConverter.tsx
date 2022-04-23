import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import { toast } from 'react-toastify';
import {
  convertBinaryToText,
  convertTextToBinary,
  convertToAlternatingCase,
  convertToCapitalizedCase,
  convertToInverseCase,
  convertToSentenceCase,
  convertToUrlCase,
} from '../utils/textConversion';

interface TextConverterContextData {
  placeholder: string;
  text: string;
  binary: string;
  countLetter: number;
  countWord: number;
  countLine: number;
  handleTextInput(input: string): void;
  handleBinaryInput(input: string): void;
  handleSentenceCase(): void;
  handleCapitalizedCase(): void;
  handleUpperCase(): void;
  handleLowerCase(): void;
  handleAlternatingCase(): void;
  handleInverseCase(): void;
  handleUrlCase(): void;
  handleCopy(): void;
  handleClear(): void;
}

const TextConverterContext = createContext<TextConverterContextData>(
  {} as TextConverterContextData,
);

const TextConverterProvider: React.FC = ({ children }) => {
  const initialPlaceholder = 'Digite ou cole seu texto aqui';

  const [placeholder, setPlaceholder] = useState(initialPlaceholder);
  const [text, setText] = useState('');
  const [binary, setBinary] = useState('');
  const [countLetter, setCountLetter] = useState(0);
  const [countWord, setCountWord] = useState(0);
  const [countLine, setCountLine] = useState(0);

  const handleTextInput = useCallback((input: string) => {
    setText(input);
  }, []);

  const handleBinaryInput = useCallback((input: string) => {
    setBinary(input);
  }, []);

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

  useEffect(() => {
    setCountLetter(text.length);
    setCountWord(
      text
        .trim()
        .split(/\s+/)
        .filter(word => word !== '').length,
    );
    setCountLine(text.length ? text.split(/\r\n|\r|\n/).length : 0);

    if (text.length) {
      setBinary(convertTextToBinary(text));
    } else {
      setBinary(convertTextToBinary(initialPlaceholder));
    }
  }, [text]);

  useEffect(() => {
    if (!binary.length || binary === convertTextToBinary(initialPlaceholder)) {
      setText('');
    } else {
      setText(convertBinaryToText(binary));
    }
  }, [binary]);

  return (
    <TextConverterContext.Provider
      value={{
        placeholder,
        text,
        binary,
        countLetter,
        countWord,
        countLine,
        handleTextInput,
        handleBinaryInput,
        handleSentenceCase,
        handleCapitalizedCase,
        handleUpperCase,
        handleLowerCase,
        handleAlternatingCase,
        handleInverseCase,
        handleUrlCase,
        handleCopy,
        handleClear,
      }}
    >
      {children}
    </TextConverterContext.Provider>
  );
};

function useTextConverter(): TextConverterContextData {
  const context = useContext(TextConverterContext);

  return context;
}

export { TextConverterProvider, useTextConverter };
