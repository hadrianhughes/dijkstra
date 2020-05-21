# Dijkstra's Algorithm with Recoil

An app built with React's new Recoil library. It calculates the most efficient route between two points using Dijkstra's algorithm.

Recoil allows this app to be significantly more efficient than if it were using Redux or a plain stateful component, as the edges and vertices are stored in a graph structure rather than a list, meaning an update to one vertex is not an update to the entire list. This means only one vertex at a time needs to re-render.

[Recoil](https://recoiljs.org/)
