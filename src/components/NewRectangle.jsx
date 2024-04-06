import { useState } from "react";
import { Polygon, useMapEvent } from "react-leaflet";
import Rectangle from "./Rectangle";

const rectangles = [];

export default function NewRectangle() {
  const [clicks, setClicks] = useState(0);
  const [rectangle, setRectangle] = useState([]);

  useMapEvent("click", (e) => {
    if (clicks === 0) {
      setClicks(1);
      setRectangle([e.latlng]);
    } else {
      setClicks(0);
      setRectangle([
        [rectangle[0].lat, rectangle[0].lng],
        [e.latlng.lat, rectangle[0].lng],
        [e.latlng.lat, e.latlng.lng],
        [rectangle[0].lat, e.latlng.lng],
      ]);
      rectangles.push([
        [rectangle[0].lat, rectangle[0].lng],
        [e.latlng.lat, rectangle[0].lng],
        [e.latlng.lat, e.latlng.lng],
        [rectangle[0].lat, e.latlng.lng],
      ]);
      console.log(rectangles);
    }
  });

  return <Rectangle positions={rectangle} onClick={() => {}} roomIndex={0} />;
}
