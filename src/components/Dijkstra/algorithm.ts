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

  let pathMap: PathMap       = { [vertexNames[0]]: [0, ''] };
  let at: string             = vertexNames[0];
  let visited: Array<string> = [];

  while (visited.length < vertexNames.length) {
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

    Object.keys(distances)
      .forEach(d => {
        const fullDistance = pathMap[at][0] + distances[d];

        if (!pathMap[d] || fullDistance < pathMap[d][0]) {
          pathMap[d] = [fullDistance, at];
        }
      });

    const leastDistant =
      Object.keys(distances)
        .reduce((acc, d) => (
          distances[d] < acc.delta ? { name: d, delta: distances[d] } : acc
        ), { name: '', delta: Infinity });

    visited.push(at);
    at = leastDistant.name;
  }

  return pathMap;
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
