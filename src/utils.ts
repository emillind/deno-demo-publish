import { CONSONANTS } from './constants.ts';

export const isConsonant = (character: string) => {
  return CONSONANTS.includes(character.toLowerCase());
};
