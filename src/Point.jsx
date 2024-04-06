/* eslint-disable react/prop-types */
import { CircleMarker, Tooltip } from "react-leaflet";

export default function Point({ point, id, onClick }) {
  return (
    <CircleMarker
      eventHandlers={{ click: onClick }}
      center={point}
      radius={3}
      color="blue"
      id={id}
      style={{ zIndex: 1000 }}
    >
      <Tooltip direction="right" offset={[0, 0]} opacity={1} permanent>
        {id}
      </Tooltip>
    </CircleMarker>
  );
}
