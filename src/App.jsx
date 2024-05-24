import { useMediaQuery } from "@mui/material";
import { CRS } from "leaflet";
import "leaflet/dist/leaflet.css";
import { useState } from "react";
import { ImageOverlay, MapContainer, ZoomControl } from "react-leaflet";
import { mapLevel } from "./mapLevel";
import MapOverlay from "./MapOverlay";
import "./styles.css";
import L from "leaflet";

function App() {
  const [w, h] = [3000, 1500];
  const [level, setLevel] = useState(1);
  const onPhone = useMediaQuery("(max-width:600px)");
  // const map = L.map("map", { rotate: true });
  return (
    <>
      <MapContainer
        center={[w / 2 - 50, h / 2]}
        zoom={onPhone ? -1 : 0}
        maxZoom={4}
        minZoom={onPhone ? -2 : -1}
        style={{ backgroundColor: "white" }}
        crs={CRS.Simple}
        maxBounds={mapLevel[0].bounds}
        zoomControl={false}
        rotate={true}
      >
        <ImageOverlay
          url={mapLevel[2].url}
          bounds={mapLevel[2].bounds}
          opacity={1}
          zIndex={-1}
        />
        <ZoomControl position="bottomright" />
        <MapOverlay />
      </MapContainer>
    </>
  );
}

export default App;
