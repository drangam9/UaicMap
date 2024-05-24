import { CircleMarker, Polygon, Polyline } from "react-leaflet";
import { findShortestPath } from "../etaj1/dijkstra";
import { roomsArr } from "../etaj1/paths";
import { rooms } from "../etaj1/rooms";

export default function Destination({ start, end }) {
  const destination = findShortestPath(
    roomsArr,
    "" + start.pointId,
    "" + end.pointId
  );
  const color = "#FF1744";

  return (
    <>
      <CircleMarker
        center={destination[0].position}
        radius={4}
        color={{ color }}
      />
      <CircleMarker
        center={destination[destination.length - 1].position}
        radius={4}
        color={color}
      />
      <Polygon positions={start.position} color={color} />
      <Polygon positions={end.position} color={color} />
      {destination.map(
        (_, i) =>
          i > 0 && (
            <Polyline
              key={i}
              positions={[destination[i - 1].position, destination[i].position]}
              color={color}
            />
          )
      )}
    </>
  );
}
