import React, { useState, useRef } from "react"

export const Input = () => {
  const [name, setName] = useState("") //inferred type as string
  // const [name, setName] = useState<string>("") //explicit type as string
  // const [name, setName] = useState<null | string>(null) // explicit type as string or null
  console.log("name is:", name)
  const ref = useRef<HTMLInputElement>(null!) //null! exclamation makes read-only, most typical
  // const ref = useRef<HTMLInputElement | null>(null) // mutable

  console.log("ref", ref?.current?.value) //optional chaining to check if variable exists

  return (
    <input ref={ref} value={name} onChange={e => setName(e.target.value)} />
  )
}
