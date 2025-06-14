// components/ui/input.jsx
export function Input({ className = "", ...props }) {
  return (
    <input
      className={`border rounded px-3 py-2 w-full text-sm focus:outline-none focus:ring focus:border-blue-300 ${className}`}
      {...props}
    />
  );
}
