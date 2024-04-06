import { useMediaQuery } from "@mui/material";
import { CRS } from "leaflet";
import "leaflet/dist/leaflet.css";
import { useState } from "react";
import { ImageOverlay, MapContainer } from "react-leaflet";
import { mapLevel } from "./mapLevel";
import MapOverlay from "./MapOverlay";
import "./styles.css";

function App() {
  const [w, h] = [3000, 1500];
  const [level, setLevel] = useState(1);
  const onPhone = useMediaQuery("(max-width:600px)");

  return (
    <>
      <MapContainer
        center={[w / 2 - 50, h / 2]}
        zoom={onPhone ? -1 : 0}
        maxZoom={4}
        minZoom={onPhone ? -2 : -1}
        style={{ height: "100vh", width: "100%" }}
        crs={CRS.Simple}
        maxBounds={mapLevel[0].bounds}
      >
        <ImageOverlay
          url={mapLevel[0].url}
          bounds={mapLevel[0].bounds}
          opacity={1}
        />
        <MapOverlay />
      </MapContainer>
    </>
  );
}

export default App;
