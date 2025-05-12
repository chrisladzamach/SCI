import { StaticInputConcentration } from "../../atoms/inputs/static/StaticInputConcentration"
import { StaticInputDivosan } from "../../atoms/inputs/static/StaticInputDivosan"

export const AutoProductConcentration = () => {
  return (
    <div className="flex items-center justify-between gap-4 pb-2 border-b border-zinc-400">
        <StaticInputDivosan />
        <StaticInputConcentration />
    </div>
  )
}
