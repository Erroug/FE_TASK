// components/ui/avatar.jsx
export function Avatar({ children, className = "" }) {
  return <div className={`rounded-full bg-gray-200 overflow-hidden ${className}`}>{children}</div>;
}

export function AvatarFallback({ children }) {
  return <div className="flex items-center justify-center h-full w-full text-xs">{children}</div>;
}

export function AvatarImage({ src, alt = "" }) {
  return <img src={src} alt={alt} className="h-full w-full object-cover" />;
}
