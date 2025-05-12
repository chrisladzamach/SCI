import { AutoInputDate } from "../../atoms/inputs/automatic/AutoInputDate"
import { AutoInputTime } from "../../atoms/inputs/automatic/AutoInputTime"

export const AutoDateTime = () => {
  return (
    <div className="flex justify-between gap-4 min-w-full">
        <AutoInputDate id='fecha' name='fecha' />
        <AutoInputTime id='hora' name='hora' />
    </div>
  )
}
