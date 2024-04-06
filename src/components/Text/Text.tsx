/* eslint-disable react-refresh/only-export-components */
import classNames from 'classnames';
import React, { MutableRefObject } from 'react';
import "./text.css"

interface ITextProps {
  As?: 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'div';
  className?: string;
  children?: React.ReactNode;
  size: number;
  color?: string;
  weight?: 400 | 500 | 700;
  ref?: MutableRefObject<null>;
  id?: string;
  font?: "Lora" | "Lato";
  handleClick?: () => void;
}



export function Text(props: ITextProps) {
  const {
    As = 'span',
    color = '#000000',
    children,
    size,
    className,
    weight = 400,
    ref,
    id,
    font,
    handleClick
  } = props
  const classes = classNames(
    `s-${size}`,
    `text`,
    `color-${color}`, `fw-${weight}`, className
  )
  return (
    <As ref={ref} onClick={handleClick} id={id} className={classes} style={{color: color, fontFamily: font}}>
      {children}
    </As>
  );
}
