export function convertToSentenceCase(text: string): string {
  return text.replace(/.+?([.?!]\s|$)/g, txt => {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}

export function convertToCapitalizedCase(text: string): string {
  return text
    .toLocaleLowerCase()
    .split(' ')
    .map((word: string) => {
      return word.charAt(0).toUpperCase() + word.substring(1);
    })
    .join(' ');
}

export function convertToAlternatingCase(text: string): string {
  return text
    .split('')
    .map((character: string, index: number) => {
      return index % 2 === 0
        ? character.toLowerCase()
        : character.toUpperCase();
    })
    .join('');
}

export function convertToInverseCase(text: string): string {
  return text
    .split('')
    .map((character: string) => {
      if (character === character.toUpperCase()) {
        return character.toLowerCase();
      }
      return character.toUpperCase();
    })
    .join('');
}

export function convertToUrlCase(text: string): string {
  return text
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[.-]/g, ' ')
    .replace(/[&/\\#,+()$~%'":*?<>{}–’]/g, '')
    .replace(/\s\s+/g, ' ')
    .toLowerCase()
    .split(' ')
    .join('-');
}

export function convertTextToBinary(text: string): string {
  return text
    .split('')
    .map(character => {
      let result = '';
      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < character.length; i++) {
        const bin = character[i].charCodeAt(0).toString(2);
        result += Array(8 - bin.length + 1).join('0') + bin;
      }
      return result;
    })
    .join(' ');
}

export function convertBinaryToText(binary: string): string {
  return binary
    .split(' ')
    .map(bin => String.fromCharCode(parseInt(bin, 2)))
    .join('');
}
