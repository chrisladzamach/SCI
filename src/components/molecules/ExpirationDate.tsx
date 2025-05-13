import { useEffect, useState } from 'react';
import { LabelComponent } from '../atoms/LabelComponent';

interface Props {
  productType: 'UHT' | 'ESSI' | 'ProductoFermentado' | null;
  onDateCalculated?: (date: string) => void;
}

export const ExpirationDate: React.FC<Props> = ({ productType, onDateCalculated }) => {
  const [dueDate, setDueDate] = useState<Date | null>(null);

  useEffect(() => {
    if (productType) {
      const currentDate = new Date();
      let daysToAdd = 0;

      switch (productType) {
        case 'UHT':
          daysToAdd = 120;
          break;
        case 'ESSI':
          daysToAdd = 90;
          break;
        case 'ProductoFermentado':
          daysToAdd = 60;
          break;
        default:
          setDueDate(null);
          return;
      }

      const futureDate = new Date(currentDate);
      futureDate.setDate(currentDate.getDate() + daysToAdd);
      setDueDate(futureDate);
      
      if (onDateCalculated) {
        onDateCalculated(futureDate.toLocaleDateString());
      }
    } else {
      setDueDate(null);
      if (onDateCalculated) {
        onDateCalculated('');
      }
    }
  }, [productType, onDateCalculated]);

  return (
    <div className="flex flex-col mb-4">
      <LabelComponent htmlFor="dueDate" text="Fecha de vencimiento: " />
      <input
        type="text"
        id="dueDate"
        className="shadow cursor-not-allowed max-w-full flex-1 appearance-none border rounded p-2 bg-zinc-200 text-gray-500 leading-tight focus:outline-none focus:shadow-outline"
        value={dueDate ? dueDate.toLocaleDateString() : 'Seleccione un producto'}
        readOnly
      />
    </div>
  );
};