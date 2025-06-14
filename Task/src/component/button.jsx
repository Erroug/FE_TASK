// ButtonGroup.jsx
import React from 'react';
import { Button } from "./ui/button";

const ButtonGroup = () => {
  return (
    <div className="space-x-2">
      <Button variant="outline">Not a Good Fit</Button>
      <Button className="bg-black text-white">Good Fit</Button>
    </div>
  );
};

export default ButtonGroup;