
import { cn } from "../../lib/utils";
import PropTypes from "prop-types";

export const Button = ({
    children,
    variant = "primary",
    className = "",
    fullWidth = false,
    ...props
}) => {
    const baseStyles = "px-6 py-3 rounded-lg font-medium flex items-center justify-center gap-2 cursor-pointer";

    const variants = {
        primary: "bg-primary text-white",
        secondary: "bg-secondary text-white",
        outline: "border-2 border-primary text-primary",
        ghost: "text-gray-600",
    };

    const widthClass = fullWidth ? "w-full" : "";

    // Helper to combine classes simply
    const combinedClassName = cn(baseStyles, variants[variant], widthClass, className);

    return (
        <button className={combinedClassName} {...props}>
            {children}
        </button>
    );

};

Button.propTypes = {
    children: PropTypes.node.isRequired,
    variant: PropTypes.oneOf(["primary", "secondary", "outline", "ghost"]),
    className: PropTypes.string,
    fullWidth: PropTypes.bool,
};
