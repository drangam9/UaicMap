import etaj1 from "./assets/etaj1gol.svg";

import { LatLngBounds } from "leaflet";

export const mapLevel = [
  // {
  //   name: "Parter",
  //   bounds: new LatLngBounds([0, 0], [2950, 1510]),
  //   url: parter,
  // },
  {
    name: "Etaj 1",
    bounds: new LatLngBounds([0, 0], [3000, 1500]),
    url: etaj1,
  },
  // {
  //   name: "Etaj 2",
  //   bounds: new LatLngBounds([5, 235], [3000, 1735]),
  //   url: etaj2,
  // },
  // {
  //   name: "Etaj -1",
  //   bounds: new LatLngBounds([0, 0], [3060, 1530]),
  //   url: subsol1,
  // },
];
