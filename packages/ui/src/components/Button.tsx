import { ReactNode } from "react";

export type ButtonProps = {
  onClick: () => void;
  children: ReactNode;
}

export const Button = ({ onClick, children }: ButtonProps) => {
  return (
    <button onClick={onClick}>{children} - Click Me</button>
  )
}
