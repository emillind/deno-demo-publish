import { emojify } from '@emoji';
import { fromRovarsprak, toRovarsprak } from './exports.ts';

if (import.meta.main) {
  if (!Deno.args[0]) {
    console.log(`Please provide a text to translate ${emojify(':heart:')}`);
    Deno.exit();
  }
  console.log(toRovarsprak(Deno.args[0]));
  console.log(fromRovarsprak(Deno.args[0]));
}
