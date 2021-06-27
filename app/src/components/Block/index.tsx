import React, { DetailedHTMLProps, HTMLAttributes, LegacyRef, ReactElement } from 'react'

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  innerRef: LegacyRef<HTMLDivElement>;  
}


export default function Block({innerRef, ...rest}: Props): ReactElement {
  return (
    <div ref={innerRef} {...rest} />
  )
}
