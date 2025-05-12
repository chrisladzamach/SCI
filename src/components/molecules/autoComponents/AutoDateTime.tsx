import { AutoInputDate } from "../../atoms/inputs/automatic/AutoInputDate"
import { AutoInputTime } from "../../atoms/inputs/automatic/AutoInputTime"

export const AutoDateTime = () => {
  return (
    <div className="flex items-center justify-between gap-4 pb-2 border-b border-zinc-400">
        <AutoInputDate id='fecha' name='fecha' />
        <AutoInputTime id='hora' name='hora' />
    </div>
  )
}
