// FormField.tsx
import React from "react";
import { LabelComponent } from "../atoms/LabelComponent.tsx";
import { InputComponent } from "../atoms/InputComponents.tsx";

interface FormFieldProps {
  labelText?: string;
  labelClassName?: string;
  inputId?: string;
  inputName?: string;
  inputType?: React.HTMLInputTypeAttribute;
  inputRequired?: boolean;
  inputPlaceholder?: string;
  inputClassName?: string;
  [key: string]: any; // Permite pasar otras props al div contenedor si es necesario
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
      />
    </div>
  );
};