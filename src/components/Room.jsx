import React from "react";
import { Polygon } from "react-leaflet";
import { MapElement } from "./MapElement";

export default class Room extends MapElement {
  constructor(props) {
    super(props);
    this.state = {
      isHovering: false,
    };
  }

  handleMouseOver = () => {
    this.setState({ isHovering: true });
  };

  handleMouseOut = () => {
    this.setState({ isHovering: false });
  };

  render() {
    const { room, onClick } = this.props;
    const { isHovering } = this.state;

    return (
      <>
        <Polygon
          id={room.pointId}
          point={room.pointId}
          pathOptions={{ color: isHovering ? "red" : room.color, weight: 1 }}
          room={room}
          positions={room.position}
          eventHandlers={{
            click: onClick,
            mouseover: this.handleMouseOver,
            mouseout: this.handleMouseOut,
          }}
        ></Polygon>
      </>
    );
  }
}
