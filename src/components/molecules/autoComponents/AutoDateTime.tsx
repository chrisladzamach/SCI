import { AutoInputDate } from "../../atoms/AutoInputDate"
import { AutoInputTime } from "../../atoms/AutoInputTime"

export const AutoDateTime = () => {
  return (
    <div className="flex items-center justify-between gap-4">
        <AutoInputDate id='fecha' name='fecha' />
        <AutoInputTime id='hora' name='hora' />
    </div>
  )
}
