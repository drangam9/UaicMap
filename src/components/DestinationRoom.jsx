import { Polygon, Tooltip } from "react-leaflet";
import { MapElement } from "./MapElement";

export default class DestinationRoom extends MapElement {
  render() {
    const { start, end, isStart, color } = this.props;
    if (isStart == true) {
      return (
        <>
          <Polygon positions={start.position} color={color}>
            <Tooltip direction="top" offset={[0, 0]} opacity={1}>
              Start
            </Tooltip>
          </Polygon>
        </>
      );
    } else {
      return (
        <>
          <Polygon positions={end.position} color={color}>
            <Tooltip direction="top" offset={[0, 0]} opacity={1}>
              End
            </Tooltip>
          </Polygon>
        </>
      );
    }
  }
}
