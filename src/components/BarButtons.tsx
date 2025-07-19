import '../index.css';
import type { ReactNode } from "react";

export const BarButtons = ({ text, svgIcon }: { text: string, svgIcon?: ReactNode }) => {
    return (
        <div className="bar-btn-outer ">
            <div className="bar-btn-inner flex items-center gap-2 text-[#bdbdbd] hover:text-white transition-colors duration-200 ">
                {svgIcon && <span>{svgIcon}</span>}
                {text}
            </div>
        </div>
    );
};
