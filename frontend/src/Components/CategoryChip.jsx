export default function CategoryChip({ children, size = "sm" }) {
    const sizeClasses = {
        sm: "py-1 px-2 text-xs",
        md: "py-1.5 px-3 text-sm",
        lg: "py-2 px-4 text-base",
    };

    const categoryColors = {
        Food: "bg-green-800",
        Technology: "bg-blue-500",
        Gaming: "bg-purple-500",
        Travel: "bg-yellow-500",
        Lifestyle: "bg-pink-500",
        Education: "bg-pink-500",
    };

    const bgColor = categoryColors[children] || categoryColors.Default;

    return <div className={`${bgColor} ${sizeClasses[size]} w-fit text-white rounded-full bg-opacity-75 font-light cursor-pointer`}>{children}</div>;
}
