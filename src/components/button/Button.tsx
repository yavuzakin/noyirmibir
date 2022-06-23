import styles from "./Button.module.scss";

interface Props {
  children:
    | string
    | number
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>;
  onClick?: () => void;
  size?: string;
  type?: string;
  isDisabled?: boolean;
}

const Button = ({
  children,
  onClick,
  type = "primary",
  size = "small",
  isDisabled = false,
}: Props) => {
  const classNames = [styles["btn"]];
  classNames.push(styles[`btn--${type}`]);
  classNames.push(styles[`btn--${size}`]);

  const buttonClassName = classNames.join(" ");

  return (
    <button className={buttonClassName} onClick={onClick} disabled={isDisabled}>
      {children}
    </button>
  );
};

export default Button;
