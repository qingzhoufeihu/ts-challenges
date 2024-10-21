import type { Equal, Expect } from "@type-challenges/utils";

type cases = [
  Expect<Equal<TupleToNestedObject<["a"], string>, { a: string }>>,
  Expect<Equal<TupleToNestedObject<["a", "b"], number>, { a: { b: number } }>>,
  Expect<
    Equal<
      TupleToNestedObject<["a", "b", "c"], boolean>,
      { a: { b: { c: boolean } } }
    >
  >,
  Expect<Equal<TupleToNestedObject<[], boolean>, boolean>>,
];

type TupleToNestedObject<
  T extends any[],
  U extends string | number | boolean,
> = T extends [infer A extends PropertyKey, ...infer Rest]
  ? {
      [K in A]: TupleToNestedObject<Rest, U>;
    }
  : U;
