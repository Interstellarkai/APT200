import React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { fontWeight } from "@mui/system";

const Selectbuttons = ({ filters }) => {
  const [option, setOption] = React.useState("");

  const handleFilterChange = (event) => {
    setOption(event.target.value);
  };

  return (
    <FormControl style={{ minWidth: "200px" }}>
      <InputLabel sx={{ fontWeight: "800" }}>{filters.title}</InputLabel>
      <Select
        value=""
        label={filters.title}
        onChange={handleFilterChange}
        sx={{ borderRadius: "20px" }}
      >
        {filters.options.map((filter) => (
          <MenuItem key={filter} value={filter}>
            {filter}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default Selectbuttons;
