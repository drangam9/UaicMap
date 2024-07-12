import React from "react";
import { Polygon } from "react-leaflet";

export class MapElement extends React.Component {
  render() {
    const { room } = this.props;
    return (
      <Polygon
        id={room.pointId}
        point={room.pointId}
        pathOptions={{ color: room.color, weight: 1 }}
        room={room}
        positions={room.position}
      ></Polygon>
    );
  }
}
