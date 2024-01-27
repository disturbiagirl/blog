import { useState } from "react";

const Button = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <button onClick={() => setIsOpen(!isOpen)}>
      {isOpen ? "read less..." : "read more..."}
    </button>
  );
};

export default Button;
