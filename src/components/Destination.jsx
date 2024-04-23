import { CircleMarker, Polygon, Polyline } from "react-leaflet";
import { findShortestPath } from "../etaj1/dijkstra";
import { roomsArr } from "../etaj1/paths";
import { rooms } from "../etaj1/rooms";

export default function Destination({ start, end }) {
  const destination = findShortestPath(roomsArr, "" + start.id, "" + end.id);
  const color = "#FF1744";
  const startRoom = rooms.find((room) => room.pointId == start.id);
  const endRoom = rooms.find((room) => room.pointId == end.id);

  return (
    <>
      <CircleMarker center={destination[0]} radius={4} color={{ color }} />
      <CircleMarker
        center={destination[destination.length - 1]}
        radius={4}
        color={color}
      />
      {startRoom && <Polygon positions={startRoom.position} color={color} />}
      {endRoom && <Polygon positions={endRoom.position} color={color} />}
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
