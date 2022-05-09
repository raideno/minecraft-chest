import { Link } from "react-router-dom";
import styles from "../styles/components/button.module.scss";

const Button = ({
  children,
  href,
}: {
  children: React.ReactNode;
  href?: string;
}) => {
  return (
    <Link to={href ? href : ""} className={styles.button}>
      {children}
    </Link>
  );
};

export default Button;
