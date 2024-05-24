import etaj1 from "./assets/etaj1gol.svg";
import parter from "./parter/parter.webp";
import etaj2 from "./assets/etaj2gol.webp";

import { LatLngBounds } from "leaflet";

export const mapLevel = [
  {
    name: "Parter",
    bounds: new LatLngBounds([1130, 0], [1820, 1510]),
    url: parter,
  },
  {
    name: "Etaj 1",
    bounds: new LatLngBounds([0, 0], [3000, 1500]),
    url: etaj1,
  },
  {
    name: "Etaj 2",
    bounds: new LatLngBounds([750, -250], [2250, 1250]),
    url: etaj2,
  },
  // {
  //   name: "Etaj -1",
  //   bounds: new LatLngBounds([0, 0], [3060, 1530]),
  //   url: subsol1,
  // },
];
