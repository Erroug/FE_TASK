const Button = ({ children, variant = "default", size = "default", className }) => {
  let styles = "rounded px-3 py-1 text-sm";
  if (variant === "outline") styles += " bg-[#D4D3D3] text-black";
  if (variant === "default") styles += " bg-[#D4D3D3] text-black";
  if (size === "icon") styles += " p-2";
  return <button className={`${styles} ${className}`}>{children}</button>;
};
export default Button;