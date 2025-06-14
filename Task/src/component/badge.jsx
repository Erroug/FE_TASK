// Badge.jsx
import React from 'react';
import { Badge as UiBadge } from "@/components/ui/badge";

const Badge = ({ children }) => {
  return <UiBadge className="text-sm px-3 py-1 bg-blue-100 text-blue-700 rounded-full">{children}</UiBadge>;
};

export default Badge;