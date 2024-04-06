import { Polygon, Popup } from "react-leaflet";
import Rectangle from "./Rectangle";

export default function Rooms({ roomsArr, onClick }) {
  //TODO: test component
  roomsArr.map(
    (point, i) =>
      point.rooms &&
      point.rooms.map((room) => {
        if (rooms[room].length == 4)
          return (
            <>
              <Polygon
                key={i}
                id={point.id}
                point={point}
                pathOptions={{
                  color: "blue",
                }}
                positions={rooms[room]}
                eventHandlers={{
                  click: onClick,
                }}
              >
                {showInfo && (
                  <Tooltip
                    direction="right"
                    offset={[0, 0]}
                    opacity={1}
                    permanent
                  >
                    R{room}
                    <br />P{point.id}
                  </Tooltip>
                )}
              </Polygon>
            </>
          );
      })
  );
}
