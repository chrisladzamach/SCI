
interface TxtAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  classNameTextArea?: string;
  classNameLabel?: string;
}

export const TxtArea: React.FC<TxtAreaProps> = ({
  label,
  classNameTextArea = '',
  classNameLabel = '',
  ...props
}) => {
  return (
    <div className="flex flex-col">
      {label && (
        <label htmlFor={props.id} className={`block text-gray-700 text-sm font-bold mb-2 ${classNameLabel}`}>
          {label}
        </label>
      )}
      <textarea
        className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${classNameTextArea}`}
        {...props}
      />
    </div>
  );
};