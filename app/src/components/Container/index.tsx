import React, { DetailedHTMLProps, HTMLAttributes, ReactElement } from 'react';

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>  {
  children: React.ReactNode
}

export default function Container({children, ...rest}: Props): ReactElement {
  return (
    <div {...rest}>
      {children} 
    </div>
  )
}
