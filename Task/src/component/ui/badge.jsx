const  Badge = ({ children, variant = "default" }) => {
  const base = "px-2 py-0.5 rounded-full text-xs";
  const style =
  variant === "secondary"
  ? "bg-black text-white"
  : variant === "outline"
  ? "border border-gray-300 text-gray-600"
  : "bg-gray-200 text-gray-700";
  return <span className={`${base} ${style}`}>{children}</span>;
};
export default Badge;