import { Stack } from "@mui/material";
import SelectMapLevel from "./SelectMapLevel";
import { Checkbox } from "@mui/material";

export default function DevMenu() {
  // TODO - add variables

  return (
    <Stack
      direction={"row"}
      sx={{
        position: "relative",
        top: "50px",
        zIndex: 999,
        backgroundColor: "white",
      }}
    >
      <SelectMapLevel level={level} onChange={handleSelectChange} />
      <Stack direction={"row"} alignItems={"center"}>
        <Checkbox onChange={() => setShowAllRooms(!showAllRooms)} />
        <label>Show all rooms</label>
      </Stack>
      <Stack direction={"row"} alignItems={"center"}>
        <Checkbox onChange={() => setShowConnectedRooms(!showConnectedRooms)} />
        <label>Show connected rooms</label>
      </Stack>
      <Stack direction={"row"} alignItems={"center"}>
        <Checkbox onChange={() => setShowInfo(!showInfo)} />
        <label>Show info</label>
      </Stack>
      <Stack direction={"row"} alignItems={"center"}>
        <Checkbox onChange={() => setShowPaths(!showPaths)} />
        <label>Show paths</label>
      </Stack>
    </Stack>
  );
}
