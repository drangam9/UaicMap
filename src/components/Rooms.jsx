import { Polygon, Popup } from "react-leaflet";
import Rectangle from "./Rectangle";
import Room from "./Room";
import { rooms } from "../etaj1/rooms";

export default function Rooms({ roomsArr, onClick }) {
  return (
    <>
      {roomsArr.map(
        (point, i) =>
          point.rooms &&
          point.rooms.map((room, i) => {
            if (rooms[i])
              return (
                <Room
                  key={rooms[room].id}
                  point={point}
                  room={room}
                  rooms={rooms}
                  onClick={onClick}
                />
              );
          })
      )}
    </>
  );
}
