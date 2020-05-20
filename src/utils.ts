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
