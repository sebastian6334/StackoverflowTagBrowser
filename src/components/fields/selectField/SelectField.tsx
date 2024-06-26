import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import styles from "./SelectField.module.css";

interface PropsInterface {
  title?: string;
  handleChange: (event: any) => void;
  menuItems: Array<string> | Array<number>;
  defaultValue: string | number;
  isDisabled?: boolean;
}

const SelectField = ({
  title,
  handleChange,
  menuItems,
  defaultValue,
  isDisabled,
}: PropsInterface) => {
  return (
    <div className={styles["container"]}>
      <FormControl fullWidth variant="filled" disabled={isDisabled}>
        <InputLabel>{title}</InputLabel>
        <Select value={defaultValue} label={title} onChange={handleChange}>
          {menuItems.map((item: string | number, index: number) => (
            <MenuItem key={index} value={item}>
              {item}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default SelectField;
