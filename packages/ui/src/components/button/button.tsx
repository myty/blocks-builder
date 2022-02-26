import * as React from "react";
import "./button.css";

export enum ButtonStyle {
  Default = "button",
  Primary = "button button-primary",
}

interface ButtonProps
  extends Omit<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    "style" | "type"
  > {
  style?: ButtonStyle;
  type?: "button" | "submit" | "reset";
}

export const Button: React.FC<ButtonProps> = ({
  className,
  style = ButtonStyle.Default,
  type = "button",
  ...props
}) => {
  const buttonClassName = className ? `${className} ${style}` : style;

  return <button className={buttonClassName} type={type} {...props} />;
};
