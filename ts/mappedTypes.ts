const mistake = [] as Array<number>;
mistake.push(1);
// mistake.push('1');

const bigObj = {
  id: 123,
  name: 'sasha',
};

type TMyBigObject = typeof bigObj;

const typedBigObj: Readonly<TMyBigObject> = bigObj;

// typeBigObj.id = '123'

type TObjKeys = keyof TMyBigObject;
type TCommitType = TMyBigObject['id'];

type MyReadonly<T> = {
  readonly // mapped types
  [N in keyof T]: T[N];
};

const some3: MyReadonly<TMyBigObject> = {
  id: 123,
};

type MyPartial<T> = {
  [N in keyof T]?: T[N];
};

type MyPick<T, K extends keyof T> = {
  [N in K]: T[N];
};

type picked = Pick<TMyBigObject, 'name'>;

type MyReadonlyDeep<T> = {
  readonly [N in keyof T]: T[N] extends object ? MyReadonlyDeep<T[N]> : T[N];
};

type TSomeType = MyReadonlyDeep<TMyBigObject>;

// type inference
type RemoveReadonly<T> = T extends MyReadonlyDeep<infer E> ? E : T;

type TTest = RemoveReadonly<TSomeType>;

function greaterThenZero(a: number, b: string): boolean {
  return a > 0;
}

type FnReturnType<T> = T extends (...args: any[]) => infer R ? R : never;
type FnParameters<T> = T extends (...args: infer R) => any ? R : never;

type TReturnType = FnReturnType<typeof greaterThenZero>;

type TArgsType = FnParameters<typeof greaterThenZero>;
