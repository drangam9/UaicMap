import { Select } from "@mui/material";
import { MenuItem } from "@mui/material";
import { mapLevel } from "../mapLevel";

export default function SelectMapLevel({ level = 1, onChange }) {
  return (
    <Select value={level} onChange={onChange}>
      {mapLevel.map((level, i) => (
        <MenuItem key={i} value={i}>
          {level.name}
        </MenuItem>
      ))}
    </Select>
  );
}
