"use client";
import { useState } from "react";

const Button = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <button onClick={() => setIsOpen(!isOpen)}>
      {isOpen ? "read less..." : "read more..."}
    </button>
  );
  // return isOpen;
};

export default Button;
