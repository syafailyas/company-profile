import React from "react";

interface Props
{
  icon: any;
  bgColor: string;
  border?: boolean;
  className?: string;
  onClick?: ( event: React.MouseEvent<HTMLButtonElement, MouseEvent> ) => void;
}

const ButtonCircle: React.FC<Props> = (props) =>
{
  const { bgColor, icon, border, className, onClick } = props;
  return (
    <button
      type = "button"
      aria-label = "Circle"
      onClick = {onClick}
      className =
      {
        `flex justify-center items-center h-[44px] md:h-[50px] w-[44px] md:w-[50px] p-2 rounded-full text-white text-3xl ${bgColor} ${
          border ? `ring-1 ring-white` : "ring-1 ring-transparent"
        } ${ className ? className : "" }`
      }
    >
      <span>{icon}</span>
    </button>
  );
};

export default ButtonCircle;