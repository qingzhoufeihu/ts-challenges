type MyReturnType<T> = T extends (...params: any) => infer R ? R : never;
