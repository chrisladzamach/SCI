interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  classNameInput?: string;
}

export const InputComponent: React.FC<InputProps> = ({ classNameInput = "", ...props }) => {
  return (
    <input
      className={`border px-3 py-2 rounded-md outline-none focus:ring-2 focus:ring-blue-500 ${classNameInput}`}
      {...props}
    />
  );
};
