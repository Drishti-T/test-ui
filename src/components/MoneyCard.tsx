import type { ReactNode } from "react"

export const MoneyCard = ({ text, svgIcon }: { text: string, svgIcon?: ReactNode }) => {
    return <div className="flex justify-center items-center gap-2">
     <div className="p-[1px] rounded-full bg-gradient-to-b from-zinc-700 to-zinc-900">
  <div className="h-9 w-9 bg-gradient-to-t from-[#1f1829] to-[#281e37] flex justify-center items-center rounded-full text-white">
    {svgIcon ? svgIcon : 'I'}
  </div>
</div>
        <div>
            <div className="text-[10px] text-[#cf7bff]">
                {text}
            </div>
            <div className="text-[16px]">
                $100,000
            </div>
        </div>
    </div>
}