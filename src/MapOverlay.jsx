import { useEffect, useState } from "react";
import { CircleMarker, Polygon, Polyline, Tooltip } from "react-leaflet";
import Paths from "./Paths";
import Point from "./Point";
import DestinationSelect from "./components/DestinationSelect";
import { findShortestPath } from "./etaj1/dijkstra";
import { points1Graph, rooms, roomsArr } from "./etaj1/paths";
import Rooms from "./components/Rooms";
import CurrentPosition from "./components/CurrentPosition";

export default function MapOverlay() {
  const [pathPoints, setPathPoints] = useState([]);
  const [destination, setDestination] = useState(null);
  const [showAllRooms, setShowAllRooms] = useState(false);
  const [showConnectedRooms, setShowConnectedRooms] = useState(true);
  const [showInfo, setShowInfo] = useState(false);
  const [showPaths, setShowPaths] = useState(false);
  const [clicks, setClicks] = useState(0);
  const [fromTo, setFromTo] = useState([]);
  const [navRooms, setNavRooms] = useState([]);

  const onClick = (e) => {
    console.log(e.target.options.room);
    setNavRooms([...navRooms, e.target.options.room]);
    setPathPoints([...pathPoints, e.target.options.point]);
    setDestination(null);
    setFromTo([]);
  };

  const handleSelectChange = (e) => {
    setLevel(e.target.value);
  };

  if (pathPoints.length === 2) {
    setDestination(
      findShortestPath(
        points1Graph,
        "" + pathPoints[0].id,
        "" + pathPoints[1].id
      )
    );
    setFromTo([pathPoints[0], pathPoints[1]]);
    setPathPoints([]);
    setNavRooms([]);
  }

  const LinkRoomToPoint = (e) => {
    if (clicks === 0) {
      console.log("Room clicked");
      setClicks(1);
      localStorage.setItem("roomId", e.target.options.id);
    } else {
      console.log("Point clicked");
      setClicks(0);
      if (!points1Graph[e.target.options.id].rooms)
        points1Graph[e.target.options.id].rooms = [];

      points1Graph[e.target.options.id].rooms.push(
        parseInt(localStorage.getItem("roomId"))
      );
      console.log(points1Graph);
    }
  };
  return (
    <>
      <DestinationSelect
        start={fromTo[0] ?? pathPoints[0] ?? ""}
        end={fromTo[1]}
        handleChange={(e, value) => {
          if (e.target.name === "start") {
            if (pathPoints[1]) {
              setPathPoints([value, pathPoints[1]]);
            } else {
              setPathPoints([value]);
            }
          } else {
            if (pathPoints[0]) {
              setPathPoints([pathPoints[0], value]);
            } else {
              setPathPoints([value]);
            }
          }
        }}
      />
      {/* <NewRectangle /> */}

      {roomsArr.map(
        (point, i) =>
          point.rooms &&
          point.rooms.map((room) => {
            if (rooms[room].length == 4)
              return (
                <>
                  <Polygon
                    key={i}
                    id={point.id}
                    point={point}
                    pathOptions={{ color: "blue" }}
                    room={rooms[room]}
                    positions={rooms[room]}
                    eventHandlers={{ click: onClick }}
                  >
                    {showInfo && (
                      <Tooltip
                        direction="right"
                        offset={[0, 0]}
                        opacity={1}
                        permanent
                      >
                        R{room}
                        <br />P{point.id}
                      </Tooltip>
                    )}
                  </Polygon>
                </>
              );
          })
      )}
      {showAllRooms &&
        rooms.map(
          (room, i) =>
            room.length == 4 && (
              <Polygon
                key={i}
                id={i}
                pathOptions={{ color: "blue" }}
                positions={room}
                eventHandlers={{ click: LinkRoomToPoint }}
              >
                {showInfo && (
                  <Tooltip
                    direction="right"
                    offset={[0, 0]}
                    opacity={1}
                    permanent
                  >
                    R{i}
                  </Tooltip>
                )}
              </Polygon>
            )
        )}
      {showPaths && <Paths graph={points1Graph} onClick={LinkRoomToPoint} />}
      {destination && <DestinationMarkers destination={destination} />}
      {destination && <DestinationPath destination={destination} />}
      {navRooms[0] && <Polygon positions={navRooms[0]} color="red" />}
      {navRooms[1] && <Polygon positions={navRooms[1]} color="red" />}
      <CurrentPosition />
    </>
  );
}

function DestinationMarkers({ destination }) {
  return (
    <>
      <CircleMarker center={destination[0]} radius={4} color="red" />
      <CircleMarker
        center={destination[destination.length - 1]}
        radius={4}
        color="red"
      />
    </>
  );
}

function DestinationPath({ destination }) {
  return destination.map(
    (_, i) =>
      i > 0 && (
        <Polyline
          key={i}
          positions={[destination[i - 1], destination[i]]}
          color="red"
        />
      )
  );
}
