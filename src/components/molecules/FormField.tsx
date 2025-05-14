import React from "react";

import { InputComponent } from "../atoms/inputs/InputComponents.tsx";
import { LabelComponent } from "../atoms/LabelComponent.tsx";

interface FormFieldProps {
  labelText?: string;
  labelClassName?: string;
  inputId?: string;
  inputName?: string;
  inputType?: React.HTMLInputTypeAttribute;
  inputRequired?: boolean;
  inputPlaceholder?: string;
  inputClassName?: string;
  inputValue?: string | number;
  onChange?: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>; 
  [key: string]: any;
}

export const FormField: React.FC<FormFieldProps> = ({
  labelText = "",
  labelClassName = "",
  inputId = "",
  inputName = "",
  inputType = "text",
  inputRequired = false,
  inputPlaceholder = "",
  inputClassName = "",
  inputValue,
  onChange,
  ...rest
}) => {
  return (
    <div className="flex flex-col gap-1" {...rest}>
      <LabelComponent htmlFor={inputId} text={labelText} classNameLabel={labelClassName} />
      <InputComponent
        id={inputId}
        name={inputName}
        type={inputType}
        required={inputRequired}
        placeholder={inputPlaceholder}
        classNameInput={inputClassName}
        value={inputValue}
        onChange={onChange}
      />
    </div>
  );
};