import React, { useState } from "react"

export const Input = () => {
  const [name, setName] = useState("") //inferred type as string
  console.log("name is:", name)
  return <input value={name} onChange={e => setName(e.target.value)} />
}
