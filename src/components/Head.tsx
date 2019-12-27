import React from "react"

//Title
//isActive

type User = {
  name: string
}

type Props = {
  title: string //required
  isActive?: boolean //optional
  thing?: number
  thing2?: string[] //array of strings
  status?: "loading" | "loaded" //union type
  thing3?: {} //empty object
  thing4?: {
    name: string
  }
  func?: () => void
  user?: User
}

export const Head = ({ title, isActive = true }: Props) => {
  return (
    <div>
      <h1>{title}</h1>
      {isActive && <h3>Active</h3>}
    </div>
  )
}
