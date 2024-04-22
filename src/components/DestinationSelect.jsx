import { Autocomplete, Stack, TextField, useMediaQuery } from "@mui/material";
import { roomsArr } from "../etaj1/paths";

export default function DestinationSelect({
  start = "",
  end = "",
  handleStart,
  handleEnd,
}) {
  const onPhone = useMediaQuery("(max-width:600px)");
  const generalStyle = {
    backgroundColor: "white",
    marginTop: "10px",

    width: "200px",
    zIndex: 1000,
  };
  const phoneStyle = {
    width: "80%",
  };
  const style = onPhone ? { ...generalStyle, ...phoneStyle } : generalStyle;

  return (
    <Stack
      direction={onPhone ? "column" : "row"}
      gap={!onPhone && 2}
      sx={onPhone && { justifyContent: "center", alignItems: "center" }}
      marginLeft={!onPhone && 7}
    >
      <Autocomplete
        renderInput={(params) => <TextField {...params} label="Start" />}
        options={roomsArr}
        onChange={handleStart}
        sx={style}
        label="Starting point..."
        variant="outlined"
        value={start}
      />
      {((onPhone && start) || !onPhone) && (
        <Autocomplete
          renderInput={(params) => <TextField {...params} label="End" />}
          options={roomsArr}
          onChange={handleEnd}
          sx={style}
          label="Destination"
          variant="outlined"
          name="end"
          value={end}
        />
      )}
    </Stack>
  );
}
