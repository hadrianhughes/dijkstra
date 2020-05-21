type Position = { x: number, y: number };

type Vertices = {
  [name: string]: Position;
};

type PathMap = {
  [vertex: string]: [number, string];
};

export const getDistance = (from: Position) => (to: Position): number =>
  Math.sqrt(Math.pow(to.x - from.x, 2) + Math.pow(to.y - from.y, 2));

const dijkstra = (
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
        .filter(e => visited.indexOf(e.to) < 0 && e.from === at)
        .map(e => e.to);

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
          distances[d] < acc.delta ? { name: d, delta: Infinity } : acc
        ), { name: '', delta: Infinity });

    visited.push(at);
    at = leastDistant.name;
  }

  return pathMap;
};

export default dijkstra;
