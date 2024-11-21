export default function CategoryChip({ children, size = "sm" }) {
    const sizeClasses = {
        sm: "py-1 px-2 text-xs",
        md: "py-1.5 px-3 text-sm",
        lg: "py-2 px-4 text-base",
    };

    return <div className={`bg-red-500 ${sizeClasses[size]} w-fit text-white rounded-full bg-opacity-75 font-light cursor-pointer`}>{children}</div>;
}
