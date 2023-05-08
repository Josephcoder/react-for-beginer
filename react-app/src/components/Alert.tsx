import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  color?:
    | "secondary"
    | "primary"
    | "danger"
    | "warning"
    | "success"
    | "light"
    | "dark";
  onClose: () => void;
}
const Alert = ({ children, color = "primary", onClose }: Props) => {
  return (
    <div className={"alert alert-dismissible alert-" + color}>
      {children}
      <button
        type="button"
        className="btn-close"
        onClick={onClose}
        data-bs-dismiss="alert"
        aria-label="Close"
      ></button>
    </div>
  );
};

export default Alert;
