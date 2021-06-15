import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

export default function RadioButtonsGroup() {
  const [value, setValue] = React.useState('Easy');

  const handleChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setValue(event.target.value);
  };

  return (
    <FormControl component="fieldset" margin="dense">
      <RadioGroup aria-label="difficulty" name="difficulty1" value={value} onChange={handleChange}>
        <FormControlLabel value="Easy" control={<Radio />} label="Easy" />
        <FormControlLabel value="Medium" control={<Radio />} label="Medium" />
        <FormControlLabel value="Hard" control={<Radio />} label="Hard" />
      </RadioGroup>
    </FormControl>
  );
}