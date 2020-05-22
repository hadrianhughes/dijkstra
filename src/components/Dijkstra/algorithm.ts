import { PathMap } from '../../types';

type Position = { x: number, y: number };

type Vertices = {
  [name: string]: Position;
};

export const getDistance = (from: Position) => (to: Position): number =>
  Math.sqrt(Math.pow(to.x - from.x, 2) + Math.pow(to.y - from.y, 2));

export const dijkstra = (
  vertices: Vertices,
  edges:    Array<{ from: string, to: string }>
): PathMap => {
  const vertexNames = Object.keys(vertices);

  const _dijkstra = (
    pathMap: PathMap,
    at: string,
    visited: Array<string>
  ): PathMap => {
    if (visited.length >= vertexNames.length) {
      return pathMap;
    }

    const neighbours =
      edges
        .filter(e => {
          if (e.from === at && visited.indexOf(e.to) < 0) {
            return true;
          }

          if (e.to === at && visited.indexOf(e.from) < 0) {
            return true;
          }

          return false;
        })
        .map(e => (e.to === at ? e.from : e.to));

    const distances =
      neighbours
        .reduce((acc, n) => ({
          ...acc,
          [n]: getDistance(vertices[at])(vertices[n])
        }), {});

    const newMap =
      Object.keys(distances)
        .reduce((acc, d) => {
          const fullDistance = acc[at][0] + distances[d];

          if (!acc[d] || fullDistance < acc[d][0]) {
            return ({
              ...acc,
              [d]: [fullDistance, at]
            } as PathMap);
          }

          return acc;
        }, pathMap);

    const leastDistant =
      Object.keys(distances)
        .reduce((acc, d) => (
          distances[d] < acc.delta ? { name: d, delta: distances[d] } : acc
        ), { name: '', delta: Infinity });

    return _dijkstra(newMap, leastDistant.name, [ ...visited, at ]);
  };

  return _dijkstra(
    { [vertexNames[0]]: [0, ''] },
    vertexNames[0],
    []
  );
};

export const getPath = (
  pathMap:     PathMap,
  to:          string,
  accumulator: string = ''
): string => {
  if (to === '')          return accumulator;
  if (accumulator === '') return getPath(pathMap, to, to);

  const nextStep = pathMap[to][1];
  return getPath(pathMap, nextStep, `${nextStep}${accumulator}`);
};
