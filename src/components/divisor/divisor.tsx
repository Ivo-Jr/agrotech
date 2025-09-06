import { DivisorProps } from "../../interfaces"

export const Divisor = ({
  width = 'w-full',
  marginTop = 'mt-0',
  marginBottom = 'mb-0',
}: DivisorProps) => {
  return (
    <div className="flex justify-center w-full">
      <div className={`h-[1px] bg-gray-200 ${width} ${marginTop} ${marginBottom}`} />
    </div>
  )
}