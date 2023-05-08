interface Props {
  children: string;
  color?:
    | "secondary"
    | "primary"
    | "danger"
    | "warning"
    | "success"
    | "light"
    | "dark";
  onClick: () => void;
}
const Button = ({ children, color = "primary", onClick }: Props) => {
  return (
    <button className={"btn btn-" + color} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
