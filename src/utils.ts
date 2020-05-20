export const get = (path: Array<string>) => (obj: object, defaultVal?: any) => {
  if (!obj) return defaultVal;

  const val  = obj[path[0]];
  const rest = path.slice(1);

  if (rest.length > 0)   return get(rest)(val, defaultVal);
  return val;
};
