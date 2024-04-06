import { ImageOverlay } from "leaflet";
import { mapLevel } from "../mapLevel";

export default function MapLevel({ level }) {
  return (
    <ImageOverlay
      url={mapLevel[level].url}
      bounds={mapLevel[level].bounds}
      opacity={1}
    />
  );
}
