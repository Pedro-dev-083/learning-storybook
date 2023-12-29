import React from "react";

interface TextProps{
  disabled?: boolean;
  Component: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'p';
  children: React.ReactNode;
}
export default function Text({children, Component, ...props}: TextProps) {
  return(
    <Component {...props}>
      {children}
    </Component>
  )
}

Text.defaultProps = {
  disabled: false,
  Component: 'p'
}
