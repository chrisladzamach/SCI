import { StaticInputConcentration } from "../../atoms/inputs/staticComponents/StaticInputConcentration"
import { StaticInputDivosan } from "../../atoms/inputs/staticComponents/StaticInputDivosan"

export const AutoProductConcentration = () => {
  return (
    <div className="flex items-center justify-between gap-4 pb-2 ">
        <StaticInputDivosan />
        <StaticInputConcentration />
    </div>
  )
}
