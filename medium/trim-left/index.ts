type trimed = TrimLeft<"  Hello World  ">; // expected to be 'Hello World  '
import type { Equal, Expect } from "@type-challenges/utils";

type cases = [
  Expect<Equal<TrimLeft<"str">, "str">>,
  Expect<Equal<TrimLeft<" str">, "str">>,
  Expect<Equal<TrimLeft<"     str">, "str">>,
  Expect<Equal<TrimLeft<"     str     ">, "str     ">>,
  Expect<Equal<TrimLeft<"   \n\t foo bar ">, "foo bar ">>,
  Expect<Equal<TrimLeft<"">, "">>,
  Expect<Equal<TrimLeft<" \n\t">, "">>,
];

type empty = " " | "\n" | "\t";
type TrimLeft<S extends string> = S extends `${empty}${infer R}`
  ? TrimLeft<R>
  : S;
