import { useEffect } from "react";
import { Polygon, Tooltip, useMap } from "react-leaflet";
import { rooms } from "../data/rooms";
import { MapElement } from "./MapElement";

export default class CurrentPosition extends MapElement{
  render() {
    const { roomId } = this.props;
    return (
      <>
        {roomId && (
          <Polygon positions={rooms[roomId].position} color="green">
            <Tooltip direction="top" offset={[0, 0]} opacity={1} permanent>
              You are here
            </Tooltip>
          </Polygon>
        )}
      </>
    );
  }
}

// export default function CurrentPosition({ roomId }) {
//   const map = useMap();
//   useEffect(() => {
//     if (roomId) {
//       map.setView(rooms[roomId].position[0], 0, {
//         animate: true,
//         duration: 1,
//         noMoveStart: true,
//       });
//     }
//   }, []);
//   return (
//     <>
//       {roomId && (
//         <Polygon positions={rooms[roomId].position} color="green">
//           <Tooltip direction="top" offset={[0, 0]} opacity={1} permanent>
//             You are here
//           </Tooltip>
//         </Polygon>
//       )}
//     </>
//   );
// }
