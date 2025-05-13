interface StaticInputConcentrationProps {
  id?: string;
  name?: string;
  className?: string;
}

export const StaticInputConcentration: React.FC<StaticInputConcentrationProps> = ({ id, name, className }) => {
  const staticValue = '0.20%';

  return (
    <input
      type="text"
      id={id}
      name={name}
      className={`shadow cursor-not-allowed appearance-none border rounded w-full py-2 px-3 bg-gray-200 text-gray-500 leading-tight focus:outline-none focus:shadow-outline ${className}`}
      value={staticValue}
      readOnly
    />
  );
};