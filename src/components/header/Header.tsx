import styles from "./Header.module.css";
import StackOverflowIcon from "./StackOverflowIcon";

const Header = () => {
  return (
    <div className={styles["header-container"]}>
      <StackOverflowIcon /> Tag Browser
    </div>
  );
};
export default Header;
