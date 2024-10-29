import { isConsonant } from './utils.ts';

/**
 * Translates a text to Rövarspråk
 * @param text The text to translate
 * @returns The translated text
 */
const toRovarsprak = (text: string): string => {
  return text.split('').reduce((result, character) => {
    if (isConsonant(character)) return `${result}${character}o${character}`;
    return result + character;
  }, '');
};

/**
 * Translates a Rövarspråk text to its original text
 * @param text The Rövarspråk text
 * @returns The original text
 */
const fromRovarsprak = (text: string): string => {
  const chars = text.split('');
  const result = [];
  for (let i = 0; i < chars.length; i++) {
    const char = chars[i];
    if (isConsonant(char)) {
      i += 2;
    }
    result.push(char);
  }
  return result.join('');
};

export { toRovarsprak, fromRovarsprak };
