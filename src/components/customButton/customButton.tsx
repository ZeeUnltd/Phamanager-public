import { useState } from "react";
import "./index.css";

interface buttonComp {
  input: string;
}
const CustomButton: React.FC<buttonComp> = ({ input }) => {
  const [active, setActive] = useState(false);

  const toggle = () => {
    setActive((prev) => !prev);
  };

  return (
    <div>
      <button className={active ? "opt-button-active" : "opt-button"} onClick={toggle}>
        {input}
      </button>
    </div>
  );
};
export default CustomButton;
