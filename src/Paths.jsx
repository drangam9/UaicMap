import { Polyline } from "react-leaflet";
import Point from "./Point";

export default function Paths({ graph, onClick }) {
  const polylines = [];
  const points = [];
  for (const point in graph) {
    graph[point].id = point;
    graph[point].neighbors.forEach((neighbor) => {
      polylines.push([graph[point].position, graph[neighbor].position]);
    });
    points.push(graph[point].position);
  }
  return (
    <>
      {polylines.map((positions, idx) => (
        <Polyline key={idx} positions={positions} />
      ))}
      {points.map((point, i) => (
        <Point key={i} point={point} id={graph[i].id} i={i} onClick={onClick} />
      ))}
    </>
  );
}
