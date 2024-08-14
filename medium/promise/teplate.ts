
type MyAwait<T> = T extends Promise<infer K>?K:T 

declare function PromiseAll<T extends any[]>(values: [...T]):Promise<{[K in keyof T]:MyAwait<T[K]>}>
// Promise<{[K in keyof T]:Awaited<T[K]>}> 