import { greater } from '../../utils';

type Position = { x: number, y: number };

type Vertices = {
  [name: string]: Position;
};

type PathMap = {
  [fromTo: string]: string;
};

export const getDistance = (from: Position) => (to: Position): number =>
  Math.sqrt(Math.pow(to.x - from.x, 2) + Math.pow(to.y - from.y, 2));

const dijkstra = (
  vertices: Vertices,
  edges:    Array<{ from: string, to: string }>
): PathMap => {
  const _dijkstra = (
    at:      string,
    visited: Array<string>
  ): PathMap => {
    const neighbours =
      edges
        .filter(e => visited.indexOf(e.to) < 0 && e.from === at)
        .map(e => e.to);

    const distances =
      neighbours
        .reduce((acc, n) => ({
          ...acc,
          [n]: getDistance(vertices[at])(vertices[n])
        }), {});

    const nextDistances =
      neighbours
        .reduce((acc, n) => ({
          ...acc,
          ..._dijkstra(
                n,
                visited.filter(x => x !== at))
        }), {});

    return {
      ...nextDistances,
      ...Object.keys(distances)
        .reduce((acc, d) => {
          if (!nextDistances[at + d]) {
            return { ...acc, [at + d]: distances[d] };
          }

          return {
            ...acc,
            [at + d]: greater(distances[d], nextDistances[at + d])
          };
        }, {})
    };
  };

  return _dijkstra(Object.keys(vertices)[0], []);
};

export default dijkstra;
