import { assertEquals } from 'jsr:@std/assert';
import { fromRovarsprak, toRovarsprak } from './functions.ts';

const TEXT = 'A test, of might!';
const ROVARSPRAK_TEXT = 'A totesostot, ofof momigoghohtot!';

Deno.test(function translateToTest() {
  assertEquals(toRovarsprak(TEXT), ROVARSPRAK_TEXT);
});

Deno.test(function translateFromTest() {
  assertEquals(fromRovarsprak(ROVARSPRAK_TEXT), TEXT);
});
