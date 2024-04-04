import { Button } from "@mui/material";
import { useState } from "react";
import styles from "./ToggleButton.module.css";

export interface PropsInterface {
  titleArr: Array<string>;
  onChange?: () => void;
  isDisabled?: boolean;
}

const ToggleButton = ({
  titleArr = ["Yes", "No"],
  onChange,
  isDisabled,
}: PropsInterface) => {
  const [isFirstTitle, setIsFirstTitle] = useState(true);

  const handleChange = () => {
    setIsFirstTitle(!isFirstTitle);
    if (onChange) {
      onChange();
    }
  };

  return (
    <Button
      variant="outlined"
      size="medium"
      onClick={handleChange}
      className={styles["container"]}
      disabled={isDisabled}
    >
      {isFirstTitle ? titleArr[0] : titleArr[1]}
    </Button>
  );
};
export default ToggleButton;
