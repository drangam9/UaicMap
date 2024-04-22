import { Polyline } from "react-leaflet";
import Point from "./Point";

export default function Paths({ graph, onClick }) {
  const polylines = [];
  const points = [];
  // graph.map((point, i) =>
  //   point.neighbors?.map((neighborId) => {
  //     console.log(point);
  //     polylines.push([point.position, graph[neighborId].position]);
  //   })
  // );
  // console.log(polylines);
  graph.forEach((_, point) => {
    graph[point].id = point;
    graph[point].neighbors.forEach((neighbor) => {
      polylines.push([graph[point].position, graph[neighbor].position]);
    });
    points.push(graph[point].position);
  });
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
