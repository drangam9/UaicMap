import { Polygon, Popup } from "react-leaflet";

export default function Rectangle({ positions, onClick, roomIndex }) {
  return (
    <Polygon
      pathOptions={{ color: "blue" }}
      positions={positions}
      eventHandlers={{ click: onClick }}
    >
      <Popup>
        <p>Room {roomIndex}</p>
        <p>x: {positions[0]}</p>
        <p>y: {positions[1]}</p>
      </Popup>
    </Polygon>
  );
}
