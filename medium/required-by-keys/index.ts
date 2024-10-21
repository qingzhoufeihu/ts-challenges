import type { Equal, Expect } from "@type-challenges/utils";

interface User {
  name?: string;
  age?: number;
  address?: string;
}

interface UserRequiredName {
  name: string;
  age?: number;
  address?: string;
}

interface UserRequiredNameAndAge {
  name: string;
  age: number;
  address?: string;
}

type cases = [
  Expect<Equal<RequiredByKeys<User, "name">, UserRequiredName>>,
  Expect<Equal<RequiredByKeys<User, "name" | "age">, UserRequiredNameAndAge>>,
  Expect<Equal<RequiredByKeys<User>, Required<User>>>,
  // @ts-expect-error
  Expect<Equal<RequiredByKeys<User, "name" | "unknown">, UserRequiredName>>,
];

type A<T, U> = {
  [K in keyof T as K extends U ? K : never]-?: T[K];
};
type B<T, U> = {
  [K in Exclude<keyof T, U>]?: T[K];
};
type RequiredByKeys<T, U = any> = Omit<A<T, U> & B<T, U>, never>;
