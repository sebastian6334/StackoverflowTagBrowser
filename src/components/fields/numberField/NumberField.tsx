import { ChangeEvent, useState } from "react";
import TextField from "@mui/material/TextField";
import { useStore } from "../../../store";
import styles from "./NumberField.module.css";

interface PropsInterface {
  title?: string;
  maxValue?: number;
  minValue?: number;
  defaultValue?: number;
  isDisabled?: boolean;
}

function NumberField({
  title,
  maxValue,
  minValue,
  defaultValue,
  isDisabled,
}: PropsInterface) {
  const [value, setValue] = useState(defaultValue);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    let inputValue = parseInt(event.target.value);
    if (maxValue && inputValue > maxValue) {
      inputValue = maxValue;
    }
    setValue(inputValue);
    useStore.setState({
      pageInformation: { page: 1, pageSize: inputValue },
    });
  };

  return (
    <TextField
      label={title}
      type="number"
      value={value}
      variant="filled"
      onChange={handleInputChange}
      disabled={isDisabled}
      inputProps={{
        min: minValue,
        max: maxValue,
      }}
      InputLabelProps={{
        shrink: true,
      }}
      className={styles["container"]}
    />
  );
}

export default NumberField;
