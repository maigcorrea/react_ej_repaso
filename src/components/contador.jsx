import React, { useState } from 'react'

const contador = () => {
    const [estado, setEstado] = useState("")
  return (
    <>
        <h1>Contador</h1>
        <button>Aumentar</button>
        <button>Decrementar</button>
    </>
  )
}

export default contador