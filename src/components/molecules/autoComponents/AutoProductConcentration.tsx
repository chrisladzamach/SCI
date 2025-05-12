import { StaticInputConcentration } from "../../atoms/inputs/static/StaticInputConcentration"
import { StaticInputDivosan } from "../../atoms/inputs/static/StaticInputDivosan"

export const AutoProductConcentration = () => {
  return (
    <div className="flex items-center justify-between gap-4 pb-2 ">
        <StaticInputDivosan />
        <StaticInputConcentration />
    </div>
  )
}
