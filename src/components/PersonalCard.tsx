import React from "react";

export const PersonalCard = ({ svgIcon }: { svgIcon: React.ReactNode }) => {
    return <div>
        <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
                <div className="w-9 h-9  bg-zinc-800 flex justify-center items-center">
                    {svgIcon}
                </div>
                <div>
                    <div className="text-md">Kill Death Ratio</div>
                    <div className="text-[11px] text-zinc-400">All time</div>
                </div>
            </div>
            <div className="text-[11px]">
                32
            </div>
        </div>
    </div>
} 