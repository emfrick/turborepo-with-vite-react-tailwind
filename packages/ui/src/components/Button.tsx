export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onClick: () => void;
}

export const Button = ({ onClick, children, ...props }: ButtonProps) => {
  return (
    <button onClick={onClick} {...props}>{children}</button>
  )
}

export const GradientButton = ({ onClick, children, ...props}: ButtonProps) => {
  const baseStyle = "text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2";

  return (
    <button onClick={onClick} className={baseStyle} {...props}>{children}</button>
  )
}
