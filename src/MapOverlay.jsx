import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Polygon, Tooltip } from "react-leaflet";
import CurrentPosition from "./components/CurrentPosition";
import Destination from "./components/Destination";
import DestinationSelect from "./components/DestinationSelect";
import { findShortestPath } from "./etaj1/dijkstra";
import { roomsArr } from "./etaj1/paths";
import NewRectangle from "./components/NewRectangle";
import Paths from "./Paths";
import { rooms } from "./etaj1/rooms";
import Room from "./components/Room";
import Rooms from "./components/Rooms";
import { Chip, Drawer, MenuItem, Select, useMediaQuery } from "@mui/material";
import { selectByType } from "./utils/selectByType";
import Chips from "./components/Chips";
import WcIcon from "@mui/icons-material/Wc";
import StairsIcon from "@mui/icons-material/Stairs";
import DrawerList from "./components/DrawerList";
import TemporaryDrawer from "./components/DrawerList";
import MobileDrawer from "./components/MobileDrawer";

export default function MapOverlay() {
  // const [destination, setDestination] = useState(null);
  // const [showAllRooms, setShowAllRooms] = useState(false);
  // const [showConnectedRooms, setShowConnectedRooms] = useState(true);
  // const [showInfo, setShowInfo] = useState(false);
  // const [showPaths, setShowPaths] = useState(false);
  // const [clicks, setClicks] = useState(0);
  const roomId = location.pathname.split("/")[1];
  const [start, setStart] = useState(null);
  const [end, setEnd] = useState(null);
  const [roomsToShow, setRoomsToShow] = useState(selectByType(["basic"]));
  // const [type, setType] = useState(["basic"]);
  const onMobile = useMediaQuery("(max-width:600px)");

  const [chipData, setChipData] = useState([
    {
      key: 1,
      icon: <WcIcon />,
      label: "Toilets",
      value: "restroom",
      active: false,
    },
    {
      key: 2,
      icon: <StairsIcon />,
      label: "Stairs",
      value: "stairs",
      active: false,
    },
  ]);
  const handleClick = (data) => {
    const chipTypes = chipData
      .filter((item) => item.active)
      .map((item) => item.value);
    const typesSelected = data.active
      ? [...chipTypes.filter((item) => item !== data.value)]
      : [...chipTypes, data.value];
    setRoomsToShow(selectByType([...typesSelected, "basic"]));

    setChipData((prev) =>
      prev.map((item) =>
        item.key === data.key ? { ...item, active: !item.active } : item
      )
    );
  };

  useEffect(() => {
    if (roomId) {
      const currentPos = rooms.find((room) => room.id == roomId);
      setStart(currentPos);
    }
  }, [roomId, roomsToShow]);

  const onClick = (e) => {
    const { room, point } = e.target.options;
    console.log(e.target);
    if (roomId) {
      setEnd(room);
    } else {
      if (start) {
        setEnd(room);
      } else {
        setStart(room);
      }
    }
  };

  // const LinkRoomToPoint = (e) => {
  //   if (clicks === 0) {
  //     console.log("Room clicked");
  //     setClicks(1);
  //     localStorage.setItem("roomId", e.target.options.id);
  //   } else {
  //     console.log("Point clicked");
  //     setClicks(0);
  //     if (!roomsArr[e.target.options.id].rooms)
  //       roomsArr[e.target.options.id].rooms = [];

  //     roomsArr[e.target.options.id].rooms.push(
  //       parseInt(localStorage.getItem("roomId"))
  //     );
  //   }
  // };

  return (
    <>
      <DestinationSelect
        start={start ?? ""}
        end={end ?? ""}
        handleStart={(e, value) => setStart(value)}
        handleEnd={(e, value) => setEnd(value)}
      />
      <Chips chipData={chipData} handleClick={handleClick} />
      {start && (onMobile ? <MobileDrawer /> : <DrawerList />)}
      {start && !end && <Polygon positions={start.position} color={"red"} />}
      {/* <Button onClick={() => (window.location.href = "/")}>Home</Button> */}
      {/* <NewRectangle /> */}
      {/* {rooms.map(
        (room, i) =>
          room.length == 4 && (
            <Polygon
            key={i}
            id={i}
            pathOptions={{ color: "blue" }}
              positions={room}
              eventHandlers={{ click: LinkRoomToPoint }}
            >
              <Tooltip direction="right" offset={[0, 0]} opacity={1} permanent>
                R{i}
              </Tooltip>
            </Polygon>
          )
      )} */}
      <Rooms rooms={roomsToShow} onClick={onClick} />
      <Paths graph={roomsArr} />
      {roomId && <CurrentPosition roomId={roomId} />}
      {start && end && <Destination start={start} end={end} />}
    </>
  );
}
