import { Tooltip } from "react-bootstrap";
import { Marker, Polygon } from "react-leaflet";

export default function Room({ point, room, rooms, onClick }) {
  const r = rooms[room];
  return (
    <Polygon
      id={point.id}
      point={point}
      pathOptions={{ color: r.color, weight: 1 }}
      room={r.position}
      positions={r.position}
      eventHandlers={{ click: onClick }}
    />
  );
}
