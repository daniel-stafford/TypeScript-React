import React from "react"

type Props = {
  // onClick(): string method returns string
  // onClick(): void method return nothings like a console.log
  // onClick(text: string): void method with parameters
  // onClick: () => void
  onClick: (text: string) => void //function with parameters
}

export const Button = ({ onClick }: Props) => {
  return <button onClick={() => onClick("Hello")}>Click me</button>
}
