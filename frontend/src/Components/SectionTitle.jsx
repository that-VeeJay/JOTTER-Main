import { RightArrowIcon } from "../icons/RightArrowIcon";

export default function SectionTitle({ children, showArrow = false, subtitle = null }) {
    return (
        <>
            {subtitle && <p className="text-sm text-zinc-400 font-medium">{subtitle}</p>}
            <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-semibold ">{children}</h3>
                {showArrow && <RightArrowIcon color="#ef4444" />}
            </div>
        </>
    );
}
