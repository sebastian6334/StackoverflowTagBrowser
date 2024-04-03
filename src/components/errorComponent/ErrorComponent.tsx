import ErrorIcon from "./errorIcon.png";

import styles from "./ErrorComponent.module.css";

interface PropsInterface {
  error?: string;
}

const ErrorComponent = ({ error }: PropsInterface) => {
  return (
    <div className={styles["container"]}>
      <img src={ErrorIcon} alt="Error Icon" className={styles["icon"]} />
      <p className={styles["text"]}>Oops! Something Went Wrong: {error}</p>
    </div>
  );
};
export default ErrorComponent;
