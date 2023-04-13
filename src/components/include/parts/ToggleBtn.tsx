import { FC, MouseEventHandler } from "react";

type Props = {
  open: boolean;
  onClick: MouseEventHandler;
  controls: string;
  label: string;
};

export const ToggleBtn: FC<Props> = ({ open, controls, label, onClick }) => {
  return (
    <button
      type="button"
      aria-controls={controls}
      aria-expanded={open}
      aria-label={label}
      onClick={onClick}
      className="toggleButon"
    >
      <span className="line01"></span>
      <span className="line02"></span>
      <span className="line03"></span>
    </button>
  );
};