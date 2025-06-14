const Card = ({ children }) => (
  <div className="border rounded-xl p-4 shadow-sm bg-white">{children}</div>
);

const CardHeader = ({ children, className }) => (
  <div className={`p-4 border-b ${className}`}>{children}</div>
);

const CardContent = ({ children, className }) => (
  <div className={` bg-red hover:bg-red-500 p-4 rounded shadow p-4 ${className}`}>{children}</div>
);

const CardTitle = ({ children, className }) => (
  <div className={`font-semibold text-base ${className}`}>{children}</div>
);
export {Card, CardHeader, CardContent, CardTitle};