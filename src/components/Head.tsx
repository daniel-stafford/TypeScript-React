import React from "react"

//Title
//isActive

type Props = {
  title: string //required
  isActive?: boolean //optional
}

export const Head = ({ title, isActive = true }: Props) => {
  return (
    <div>
      <h1>{title}</h1>
      {isActive && <h3>Active</h3>}
    </div>
  )
}
