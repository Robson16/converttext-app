import React from 'react';
import Card from '../../components/Card';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Textarea from '../../components/Textarea';
import { useTextConverter } from '../../hooks/useTextConverter';
import { About, Container, Form, Main } from './styles';

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
      <Main>
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
        <About>
          <Card title="Gerador de Código Binário">
            <p>
              O código binário é uma das linguagens mais importantes no mundo da computação, desempenhando um papel fundamental na comunicação entre seres humanos e máquinas. Apesar de sua simplicidade aparente, o binário possui uma história rica e diversa, sendo essencial para que computadores interpretem e processem informações. Porém, traduzir textos diretamente para binário não é uma tarefa intuitiva – é aí que entra nossa ferramenta de tradução binária.
            </p>
          </Card>
          <Card title="Por que usar um tradutor de código binário?">
            <p>
              Converter texto para binário manualmente pode ser um desafio significativo. O processo de traduzir caracteres ASCII para sua representação binária exige atenção e tempo, e erros são comuns. Com nossa ferramenta, você elimina a complexidade desse processo, economizando tempo e esforço.
            </p>
            <p>
              Além disso, o uso de código binário pode trazer um ar de sofisticação a projetos criativos, como designs artísticos ou mensagens enigmáticas. Ele também pode ser usado em contextos técnicos, como codificação, onde o binário é essencial para a comunicação entre sistemas.
            </p>
          </Card>
          <Card title="Como funciona o tradutor?">
            <p>
              O uso da nossa ferramenta é simples e direto:
            </p>
            <ol>
              <li><strong>Digite o texto:</strong> No lado esquerdo da interface, insira o texto que deseja converter.</li>
              <li><strong>Veja a conversão:</strong> À medida que você digita, o texto é automaticamente traduzido para código binário e exibido no lado direito.</li>
              <li><strong>Copiar e colar:</strong> Após a conversão, você pode copiar o código gerado para utilizá-lo onde for necessário.</li>
              <li><strong>Reversão fácil:</strong> Caso você tenha um código binário e queira traduzi-lo de volta para texto, basta colá-lo no campo do lado direito e o texto original será restaurado.</li>
            </ol>
          </Card>
          <Card title="Exemplo prático">
            <p>
              Veja abaixo um exemplo de texto traduzido para código binário:
            </p>
            <p><strong>Entrada (Texto):</strong> "Tradutor Binário"</p>
            <p><strong>Saída (Binário):</strong> 01010100 01110010 01100001 01100100 01110101 01110100 01101111 01110010 00100000 01000010 01101001 01101110 01100001 01110010 01101001 01101111</p>
            <p>
              Esse processo rápido e preciso demonstra como o código binário pode ser utilizado para criar mensagens únicas e inovadoras.
            </p>
          </Card>
          <Card title="Benefícios da nossa ferramenta">
            <ul>
              <li><strong>Agilidade e eficiência:</strong> Reduza horas de trabalho manual para segundos com a automação do processo.</li>
              <li><strong>Evita erros:</strong> Garantimos uma conversão precisa, reduzindo o risco de problemas em mensagens ou códigos.</li>
              <li><strong>Versatilidade:</strong> Seja para uso técnico ou criativo, nossa ferramenta se adapta às suas necessidades.</li>
              <li><strong>Facilidade de uso:</strong> Não é necessário ter conhecimento avançado de binário – nossa interface intuitiva faz todo o trabalho para você.</li>
            </ul>
          </Card>
          <Card title="Por que o código binário é importante?">
            <p>
              O código binário é a base de toda comunicação digital. Ele transforma textos, imagens e comandos em dados que podem ser processados por computadores. Entender e utilizar binário pode ser uma forma poderosa de explorar o mundo da tecnologia e seus fundamentos.
            </p>
          </Card>
        </About>
      </Main>
      <Footer />
    </Container>
  );
};

export default BinaryTranslator;
