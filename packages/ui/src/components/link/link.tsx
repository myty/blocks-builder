import * as React from "react";
import "./link.css";

export enum LinkStyle {
  Link = "",
  Button = "button",
  PrimaryButton = "button button-primary",
}

interface LinkProps
  extends Omit<
    React.DetailedHTMLProps<
      React.AnchorHTMLAttributes<HTMLAnchorElement>,
      HTMLAnchorElement
    >,
    "style"
  > {
  style?: LinkStyle;
}

export const Link: React.FC<LinkProps> = ({
  className,
  style = LinkStyle.Link,
  ...props
}) => {
  const linkClassName = className ? `${className} ${style}` : style;

  return <a className={linkClassName} {...props} />;
};
