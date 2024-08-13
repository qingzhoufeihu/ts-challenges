type Pop<T extends any[]> = T extends [...infer A, infer _] ? A : [];
