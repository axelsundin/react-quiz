import React, { useContext } from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";


import { UserContext } from "../game";

export default function ChooseDifficulty() {
  const { difficulty, setDifficulty } = useContext(UserContext);

  const handleChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setDifficulty(event.target.value);
  };

  return (
    <FormControl component="fieldset" margin="dense">
      <RadioGroup
        aria-label="difficulty"
        name="difficulty1"
        value={difficulty}
        onChange={handleChange}
      >
        <FormControlLabel value="easy" control={<Radio />} label="Easy" />
        <FormControlLabel value="medium" control={<Radio />} label="Medium" />
        <FormControlLabel value="hard" control={<Radio />} label="Hard" />
      </RadioGroup>
    </FormControl>
  );
}
