import Link from "next/link";
import styles from './Button.module.scss';

const Button = ({ path, click, title, icon, className = '', target, onChange }) => {
  return (
    <Link
      target={target}
      type="submit"
      onChange={onChange}
      rel="noopener noreferrer"
      href={path}
      onClick={click}
      className={`${styles.button} ${className}`}
    >
      {title} {icon}
    </Link>
  );
};

export default Button;
