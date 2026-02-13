import React from "react";
import { cn } from "../../lib/utils"; // Assuming you might add utility class merger later, but for now we'll stick to standard props

export const Button = ({
    children,
    variant = "primary",
    className = "",
    fullWidth = false,
    ...props
}) => {
    const baseStyles = "px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer";

    const variants = {
        primary: "bg-primary text-white hover:bg-accent hover:shadow-lg hover:-translate-y-0.5",
        secondary: "bg-secondary text-white hover:bg-gray-800",
        outline: "border-2 border-primary text-primary hover:bg-primary/5",
        ghost: "text-gray-600 hover:text-primary hover:bg-gray-50",
    };

    const widthClass = fullWidth ? "w-full" : "";

    // Helper to combine classes simply
    const combinedClassName = `${baseStyles} ${variants[variant]} ${widthClass} ${className}`;

    return (
        <button className={combinedClassName} {...props}>
            {children}
        </button>
    );
};
