import { Stack, Autocomplete, TextField, useMediaQuery } from "@mui/material";
import { points1Graph, roomsArr } from "../etaj1/paths";

export default function DestinationSelect({
  start = "",
  end = "",
  handleChange,
}) {
  const onPhone = useMediaQuery("(max-width:600px)");
  const generalStyle = {
    backgroundColor: "white",
    marginTop: "10px",

    width: "200px",
    zIndex: 1000,
  };
  const phoneStyle = {
    width: "70%",
  };
  const style = onPhone ? { ...generalStyle, ...phoneStyle } : generalStyle;

  return (
    <Stack
      direction={onPhone ? "column" : "row"}
      sx={onPhone && { justifyContent: "center", alignItems: "center" }}
      marginLeft={7}
    >
      <Autocomplete
        renderInput={(params) => (
          <TextField {...params} label="Start" value={start.name ?? start.id} />
        )}
        options={roomsArr}
        onChange={handleChange}
        sx={style}
        label="Starting point..."
        variant="outlined"
        name="start"
        value={start}
      />
      <Autocomplete
        renderInput={(params) => <TextField {...params} label="End" />}
        options={roomsArr}
        onChange={handleChange}
        sx={style}
        label="Destination"
        variant="outlined"
        name="end"
        value={end}
      />
    </Stack>
  );
}
