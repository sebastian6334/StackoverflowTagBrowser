import { ChangeEvent, useState } from "react";
import TextField from "@mui/material/TextField";
import { useCounterStore } from "../../../store";
import styles from "./NumberField.module.css";

interface PropsInterface {
  title: string;
  maxValue: number;
  defaultValue?: number;
}

function NumberField({ title, maxValue, defaultValue = 10 }: PropsInterface) {
  const [value, setValue] = useState(defaultValue);
  console.log(styles);
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    let inputValue = parseInt(event.target.value);
    if (inputValue > maxValue) {
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
          min: 1,
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
