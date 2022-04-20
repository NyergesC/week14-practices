import React, { useState } from 'react'


function ButtonWithHook() {
  const [key1, setKey1] = useState("this is the default state of a function component")
  const [key2, setKey2] = useState(0)
  return (
      <>
    <div>{key1}</div>
    <button onClick={() => setKey1("This is the NEW state of a function component")}>{key1}</button>
    <button onClick={() => setKey2(1)}>{key2}</button>
    </>
  )
}

export default ButtonWithHook