import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const selectStyling = {
  borderBottomLeftRadius: "20px",
  borderTopLeftRadius: "20px",
  boxShadow: "0px 5px 5px #aaaaaa",
  m: "-8px",
};

export default function SelectCategory() {
  const [category, setCategory] = React.useState("");

  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <Select
          value={category}
          onChange={handleChange}
          displayEmpty
          disableUnderline
          inputProps={{ "aria-label": "Without label" }}
          sx={{ ...selectStyling }}
        >
          <MenuItem value="">
            <em>All Categories</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
