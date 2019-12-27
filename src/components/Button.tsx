import React from "react"

type Props = {
  // onClick(): string method returns string
  // onClick(): void method return nothings like a console.log
  // onClick(text: string): void method with parameters
  // onClick: () => void
  // onClick: (e: React.MouseEvent) => void //basic mouse e
  // onChange?: (e: React.FormEvent<HTMLInputElement>) => void // basic input event
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void //more specific event type
}

export const Button: React.FC<Props> = ({ onClick, children }) => {
  return <button onClick={onClick}>{children}</button>
}

//if not using children use :Props
//if using children use React.FC<Props>
