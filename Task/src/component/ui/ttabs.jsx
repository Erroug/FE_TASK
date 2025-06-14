const Tabs = ({ children }) => <div>{children}</div>;

const TabsList = ({ children, className }) => (
  <div className={className}>{children}</div>
);

const TabsTrigger = ({ children }) => (
  <button className="px-3 py-1 rounded text-sm text-gray-600 hover:bg-white">
    {children}
  </button>
);
export {Tabs, TabsList, TabsTrigger};