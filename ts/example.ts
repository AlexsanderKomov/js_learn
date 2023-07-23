// import { useState } from 'react';

const str = 'string'; /* typeof str -> 'string' */
const num = 2; /* typeof num -> 'number' */
const nan = NaN; /* typeof nan -> 'number' */
const obj = {}; /* typeof obj -> 'object' */
const arr = []; /* typeof arr -> 'object' */
const nul = null; /* typeof nul -> 'object' */
const sym = Symbol(); /* typeof sym -> 'symbol' */
const und = undefined; /* typeof und -> 'undefined' */
const _void = void 0; /* typeof _void -> 'undefined' */
const bool = true; /* typeof bool -> 'boolean' */
const fn = () => {}; /* typeof fn -> 'function' */

let tsStr = 'asdf';

// function sunJS(arr) {
//   if (arr instanceof Array) {
//     return arr.reduce((a, b) => a + b);
//   }
//   throw new Error('type mismatch');
// }

function sumTS(arr: number[]) {
  return arr.reduce((a, b) => a + b);
}

// 'some' + 2 // -> 'some2'
// 'some' - 2 // -> NaN
// '2' + 2 // -> '22'
// '2' - 2 // -> NaN

const tsNumber = 2;
const tsString = 'str';

const result3 = tsNumber + tsString;
const result4 = parseInt(tsString) - tsNumber;

if (typeof tsString === 'number') {
  const result2 = tsString - tsNumber;
}

// Union type
const strOrNumber: string | number = '2';

// Type alias
type StrOrNumber = string | number;

const strOrNumber1: StrOrNumber = '2';
const strOrNumber2: StrOrNumber = '2';
const strOrNumber3: StrOrNumber = '2';
const strOrNumber4: StrOrNumber = '2';

type AllJsSimpleTypes =
  | string
  | number
  | []
  | object
  | undefined
  | null
  | void
  | symbol;

// Array
const tsArray: number[] = [1, 2, 3];
const tsArrayGeneric: Array<number> = [];

const unionArray: (string | number)[] = [1, 2, 3, 'str'];
const unionArray2: Array<string | number> = [1, 2, 3, 'str'];

// Tuple
const myTuple: [number, string] = [1, 'str'];
const [val1, val2] = myTuple;

// const [state, setState] = useState();

// Object
type MyObjType = { a: number; b: string };
const myObj: MyObjType = { a: 1, b: '2' };

interface MyFirstInterface {
  readonly a: number;
  readonly b: string;
  c?: number[];
  e: number | undefined;
}

const myObj2: MyFirstInterface = {
  a: 2,
  b: 'ser',
  e: undefined,
};

// Object.keys(myObj2)

const ApiAnswer: IndexInterface = { key: 'stra', key2: 'asdf' };

interface IndexInterface {
  [n: string]: string;
}

enum Method {
  add,
  sub,
}

// calculate('add', 5, 5) // -> 10
function calculate(method: Method, left: number, right: number): number {
  switch (method) {
    case Method.add:
      return left + right;
    case Method.sub:
      return left - right;
  }
}

const sum = calculate(Method.add, 3, 5);

const ArrowFn: TypeFn = () => 2;

type TypeFn = () => number;

type StrangeTsTypes = any | unknown | never;

const some: any = '2';
some.reduce();

const un: unknown = '2'; // потом определим тип переменной

if (typeof un === 'string') {
  un.concat();
}

function neverFn(): never {
  throw new Error('me exception');
}

const someValue = neverFn();
