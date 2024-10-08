export function findShortestPath(graph, start, end) {
  let distances = {};
  let prev = {};
  let unvisitedNodes = new Set(Object.keys(graph));

  for (let node in graph) {
    distances[node] = Infinity;
  }
  distances[start] = 0;

  while (unvisitedNodes.size > 0) {
    let closestNode = getClosestNode(distances, unvisitedNodes);
    unvisitedNodes.delete(closestNode);

    if (closestNode === end) {
      return constructPath(prev, start, end, graph);
    }

    for (let neighbor of graph[closestNode].neighbors) {
      let altDistance = distances[closestNode] + 1;
      if (altDistance < distances[neighbor]) {
        distances[neighbor] = altDistance;
        prev[neighbor] = closestNode;
      }
    }
  }

  return null;
}

function getClosestNode(distances, unvisitedNodes) {
  return Array.from(unvisitedNodes).reduce((closestNode, node) => {
    return distances[node] < distances[closestNode] ? node : closestNode;
  });
}

function constructPath(prev, start, end, graph) {
  let path = [];
  for (let node = end; node !== start; node = prev[node]) {
    path.unshift({ position: graph[node].position, rooms: graph[node].rooms });
  }
  path.unshift({ position: graph[start].position, rooms: graph[start].rooms });
  return path;
}
