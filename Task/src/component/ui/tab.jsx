// components/ui/tabs.jsx
import React, { useState } from "react";

export function Tabs({ defaultValue, children, className = "" }) {
  const [value, setValue] = useState(defaultValue);
  return (
    <div className={className}>
      {React.Children.map(children, child =>
        React.cloneElement(child, { value, setValue })
      )}
    </div>
  );
}

export function TabsList({ children }) {
  return <div className="flex gap-2 border-b mb-4 border-black/10 p-4">{children}</div>;
}

export function TabsTrigger({ children, value: tabValue, value, setValue }) {
  const isActive = value === tabValue;
  return (
    <button
      onClick={() => setValue(tabValue)}
       className={`
        px-4 py-2 text-sm transition-colors duration-200
        ${tabValue === "open" ? "text-black [background-color:#B6E777] rounded-full" : "text-gray-600 hover:bg-gray-100 rounded-md"}
      `}
    >
      {children}
    </button>
  );
}
