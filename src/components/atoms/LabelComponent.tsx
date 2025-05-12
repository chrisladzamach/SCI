import React from "react";

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  text: string;
  classNameLabel?: string;
}

export const LabelComponent: React.FC<LabelProps> = ({ text, classNameLabel = "", ...props }) => {
  return (
    <label className={`font-medium ${classNameLabel}`} {...props}>
      {text}
    </label>
  );
};
