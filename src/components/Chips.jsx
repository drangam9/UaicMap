import { Chip, Stack, useMediaQuery } from "@mui/material";
import { useState } from "react";

export default function Chips({ chipData, handleClick }) {
  const onPhone = useMediaQuery("(max-width:600px)");
  return (
    <Stack
      direction={"row"}
      gap={1}
      sx={{ marginTop: 1 }}
      marginLeft={onPhone ? 5 : 7}
    >
      {chipData.map((data) => (
        <Chip
          sx={{ zIndex: 1000, opacity: 1 }}
          key={data.key}
          label={data.label}
          value={data.value}
          icon={data.icon}
          color={data.active ? "primary" : "default"}
          onClick={() => handleClick(data)}
        />
      ))}
    </Stack>
  );
}
