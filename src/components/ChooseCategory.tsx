import React, { CSSProperties, useState, useContext } from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

import { UserContext } from "../game";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem, { MenuItemProps } from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function ChooseCategory() {
  const classes = useStyles();
  const { category, setCategory } = useContext(UserContext);

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Category</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={category}
          onChange={(e) => {
            setCategory(e.target.value);
          }}
        >
          <MenuItem value="any">Any Category</MenuItem>
          <MenuItem value={9}>General Knowledge</MenuItem>
          <MenuItem value={11}>Entertainment: Film</MenuItem>
          <MenuItem value={12}>Entertainment: Music</MenuItem>
          <MenuItem value={18}>Science: Computers</MenuItem>
          <MenuItem value={21}>Sports</MenuItem>
          <MenuItem value={22}>Geography</MenuItem>
          <MenuItem value={23}>History</MenuItem>
          <MenuItem value={26}>Celebrities</MenuItem>
          <MenuItem value={27}>Animals</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
