import { useEffect } from "react";
import { Polygon, Tooltip, useMap } from "react-leaflet";
import { rooms } from "../etaj1/paths";

export default function CurrentPosition({ roomId }) {
  const map = useMap();
  useEffect(() => {
    if (roomId) {
      setTimeout(() => {
        map.setView(rooms[roomId][0], 1, {
          animate: true,
          duration: 3,
          noMoveStart: true,
        });
      }, 500);
    }
  }, []);
  return (
    <>
      {roomId && (
        <Polygon positions={rooms[roomId]} color="green">
          <Tooltip direction="top" offset={[0, 0]} opacity={1} permanent>
            You are here
          </Tooltip>
        </Polygon>
      )}
    </>
  );
}
