type ExampleType = Promise<string>;

type Result = MyAwaited<ExampleType>; // string

type MyAwaited<T> =
  T extends PromiseLike<infer K>
    ? K extends PromiseLike<any>
      ? MyAwaited<K>
      : K
    : never;
