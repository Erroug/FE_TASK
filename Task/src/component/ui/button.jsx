// components/ui/button.jsx
export function Button({ children, className = "", variant = "default", ...props }) {
  const base = "px-4 py-2 rounded font-semibold";
  const variants = {
    default: "bg-blue-600 text-white    ",
    outline: "border border-gray-300 text-gray-700 bg-white hover:bg-gray-100",
  };
  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}
