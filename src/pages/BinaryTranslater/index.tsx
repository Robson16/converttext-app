import React, { useState, useEffect } from "react";

import PageHeader from "../../components/PageHeader";
import Textarea from "../../components/Textarea";

import "./styles.css";

function BinaryTranslater() {
  const placeholder = "Digite ou cole seu texto aqui";

  const [text, setText] = useState("");
  const [binary, setBinary] = useState("");

  function convertTextToBinary(text: string) {
    return text
      .split("")
      .map((character) => {
        let result = "";
        for (let i = 0; i < character.length; i++) {
          let bin = character[i].charCodeAt(0).toString(2);
          result += Array(8 - bin.length + 1).join("0") + bin;
        }
        return result;
      })
      .join(" ");
  }

  function convertBinaryToText(binary: string) {
    return binary
      .split(" ")
      .map((bin) => String.fromCharCode(parseInt(bin, 2)))
      .join("");
  }

  useEffect(() => {
    if (text.length) {
      setBinary(convertTextToBinary(text));
    } else {
      setBinary(convertTextToBinary(placeholder));
    }
  }, [text]);

  useEffect(() => {
    if (!binary.length || binary === convertTextToBinary(placeholder)) {
      setText("");
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
            onChange={(e) => {
              setText(e.target.value);
            }}
          />
          <Textarea
            name="binary"
            label="Binário"
            value={binary}
            onChange={(e) => {
              setBinary(e.target.value);
            }}
          />
        </form>
      </main>
    </div>
  );
}

export default BinaryTranslater;
