import { ChangeEvent, useState } from "react";
import TextField from "@mui/material/TextField";
import { useCounterStore } from "../../../store";
import styles from "./NumberField.module.css";

interface PropsInterface {
  title?: string;
  maxValue?: number;
  minValue?: number;
  defaultValue?: number;
}

function NumberField({
  title,
  maxValue,
  minValue,
  defaultValue,
}: PropsInterface) {
  const [value, setValue] = useState(defaultValue);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    let inputValue = parseInt(event.target.value);
    if (maxValue && inputValue > maxValue) {
      inputValue = maxValue;
    }
    setValue(inputValue);
    useCounterStore.setState({
      pageInformation: { page: 1, pageSize: inputValue },
    });
  };

  return (
    <div className={styles["container"]}>
      <TextField
        label={title}
        type="number"
        value={value}
        onChange={handleInputChange}
        inputProps={{
          min: minValue,
          max: maxValue,
        }}
        InputLabelProps={{
          shrink: true,
        }}
        className={styles["number-field-input"]}
      />
    </div>
  );
}

export default NumberField;
