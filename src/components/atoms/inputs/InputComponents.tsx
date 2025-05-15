interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  classNameInput?: string;
}

export const InputComponent: React.FC<InputProps> = ({ classNameInput = "", ...props }) => {
  return (
    <input
      className={`bg-zinc-100 px-3 py-2 rounded-md outline-none  ${classNameInput}`}
      {...props}
    />
  );
};
