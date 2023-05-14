import React from "react";
import type { ButtonHTMLAttributes } from "react";
import clsx from "clsx";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "primary" | "secondary";
  children: string | React.ReactNode;
}

const baseClass =
  "inline-block rounded border border-red-600 bg-red-600 px-12 py-3 text-sm font-medium";

const Button: React.FC<ButtonProps> = (props) => {
  const { variant, children, ...restProps } = props;

  const variantClasses = () =>
    clsx(
      {
        "text-white hover:bg-transparent hover:text-red-600 focus:outline-none focus:ring active:text-red-500":
          variant === "primary",
      },
      {
        "bg-white text-red-600 hover:bg-red-600 hover:text-white focus:outline-none focus:ring active:bg-red-500":
          variant === "secondary",
      }
    );

  return (
    <button className={`${baseClass} ${variantClasses()}`} {...restProps}>
      {children}
    </button>
  );
};

export default Button;
