import { Marker, Polygon, Tooltip } from "react-leaflet";

export default function Room({ room, onClick }) {
  return (
    <>
      <Polygon
        id={room.pointId}
        point={room.pointID}
        pathOptions={{ color: room.color, weight: 1 }}
        room={room}
        positions={room.position}
        eventHandlers={{ click: onClick }}
      ></Polygon>
      {/* <Marker position={room.position[0]} /> */}
    </>
  );
}
