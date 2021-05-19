import React, { useState } from "react";

import PageHeader from "../../components/PageHeader";
import Textarea from "../../components/Textarea";
import ButtonDefault from "../../components/ButtonDefault";

import "./styles.css";

function ConvertText() {
  const [placeholder, setPlaceholder] = useState(
    "Digite ou cole seu texto aqui"
  );
  const [text, setText] = useState("");

  function convertToSentenceCase(text: string) {
    return text.replace(/.+?([.?!]\s|$)/g, (txt) => {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  }

  function convertToCapitalizedCase(text: string) {
    return text
      .toLocaleLowerCase()
      .split(" ")
      .map((word: string) => {
        return word.charAt(0).toUpperCase() + word.substring(1);
      })
      .join(" ");
  }

  function convertToAlternatingCase(text: string) {
    return text
      .split("")
      .map((character: string, index: number) => {
        return index % 2 === 0
          ? character.toLowerCase()
          : character.toUpperCase();
      })
      .join("");
  }

  function convertToInverseCase(text: string) {
    return text
      .split("")
      .map((character: string, index: number) => {
        if (character === character.toUpperCase()) {
          return character.toLowerCase();
        } else {
          return character.toUpperCase();
        }
      })
      .join("");
  }

  function convertToUrlCase(text: string) {
    return text
      .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
      .replace(/[.-]/g, ' ')
      .replace(/[&\/\\#,+()$~%'":*?<>{}–’]/g, '')
      .replace(/\s\s+/g, ' ')
      .toLowerCase()
      .split(" ")
      .join("-");
  }

  function handleSentenceCase() {
    setText(convertToSentenceCase(text));
    setPlaceholder(convertToSentenceCase(placeholder));
  }

  function handleCapitalizedCase() {
    setText(convertToCapitalizedCase(text));
    setPlaceholder(convertToCapitalizedCase(placeholder));
  }

  function handleUpperCase() {
    setText(text.toUpperCase());
    setPlaceholder(placeholder.toUpperCase());
  }

  function handleLowerCase() {
    setText(text.toLowerCase());
    setPlaceholder(placeholder.toLowerCase());
  }

  function handleAlternatingCase() {
    setText(convertToAlternatingCase(text));
    setPlaceholder(convertToAlternatingCase(placeholder));
  }

  function handleInverseCase() {
    setText(convertToInverseCase(text));
    setPlaceholder(convertToInverseCase(placeholder));
  }

  function handleUrlCase() {
    setText(convertToUrlCase(text));
    setPlaceholder(convertToUrlCase(placeholder));
  }

  function handleCopy() {
    navigator.clipboard.writeText(text).then(
      () => {
        console.log("copy success");
      },
      (error) => {
        console.log(error);
      }
    );
  }

  function handleClear() {
    setText("");
  }

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
            onChange={(e) => {
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
}

export default ConvertText;
