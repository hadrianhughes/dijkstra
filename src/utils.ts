export const get = (path: Array<string>) => (obj: object, defaultVal?: any) => {
  if (!obj) return defaultVal;

  const val  = obj[path[0]];
  const rest = path.slice(1);

  if (rest.length > 0)   return get(rest)(val, defaultVal);
  return val;
};

export const greater = (x: number, y: number): number => {
  if (x > y) return x;
  return y;
};

export const lesser = (x: number, y: number): number => {
  if (x < y) return x;
  return y;
};

export const xor = (pred1: boolean, pred2: boolean): boolean => {
  if (pred1 && pred2) return false;
  if (pred1 || pred2) return true;
  return false;
};

export const zip = (xs: Array<any>, ys: Array<any>): Array<[any, any]> => {
  const [shorter, longer] = (() => {
    if (xs.length < ys.length) return [xs, ys];
    return [ys, xs];
  })();

  return shorter.map((x, i) => [x, longer[i]]);
};

export const pairWith = (x: any) => (list: Array<any>): Array<[any, any]> =>
  list.map(e => [x, e]);

export const flatten = (xs: Array<Array<any>>): Array<any> =>
  xs.reduce((acc, x) => [...acc, ...x], []);

export const allCombinations = (chars: Array<string>): Array<[string, string]> =>
  flatten(
    chars.map(c => pairWith(c)(chars)));
