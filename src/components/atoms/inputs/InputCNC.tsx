import { LabelComponent } from '../LabelComponent';

interface InputCNCProps {
  nombreCriterio: string;
  value: string;
  onChange: (value: string) => void;
  name: string; 
}

export const InputCNC: React.FC<InputCNCProps> = ({
  nombreCriterio,
  value,
  onChange,
  name,
}) => {
  return (
    <div className="mb-4">
      {/* <label className="block text-gray-700 text-sm font-bold mb-2">{nombreCriterio}</label> */}
      <LabelComponent htmlFor={name} text={nombreCriterio} />
      <div className="flex items-center space-x-4">
        <label className="inline-flex items-center">
          <input
            type="radio"
            className="form-radio h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
            name={name}
            value="C"
            checked={value === 'C'}
            onChange={() => onChange('C')}
          />
          <span className="ml-2 text-gray-700">C</span>
        </label>
        <label className="inline-flex items-center">
          <input
            type="radio"
            className="form-radio h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
            name={name}
            value="NC"
            checked={value === 'NC'}
            onChange={() => onChange('NC')}
          />
          <span className="ml-2 text-gray-700">NC</span>
        </label>
      </div>
    </div>
  );
};
