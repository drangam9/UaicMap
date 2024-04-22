import { CircleMarker, Polygon, Polyline } from "react-leaflet";
import { findShortestPath } from "../etaj1/dijkstra";
import { roomsArr } from "../etaj1/paths";

export default function Destination({ start, end }) {
  const destination = findShortestPath(roomsArr, "" + start.id, "" + end.id);
  const color = "#FF1744";
  return (
    <>
      <CircleMarker center={destination[0]} radius={4} color={{ color }} />
      <CircleMarker
        center={destination[destination.length - 1]}
        radius={4}
        color={color}
      />

      {start.room && <Polygon positions={start.room} color={color} />}
      {end.room && <Polygon positions={end.room} color={color} />}
      {destination.map(
        (_, i) =>
          i > 0 && (
            <Polyline
              key={i}
              positions={[destination[i - 1], destination[i]]}
              color={color}
            />
          )
      )}
    </>
  );
}
