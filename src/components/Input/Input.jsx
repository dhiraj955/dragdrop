import React, { useState } from 'react'
import "./Input.css"

function Input({onSubmit}) {
    const[input, setInput] = useState("");

    const handleSubmit = () => {
        if(!input) return ;

        onSubmit(input);
        setInput("");
    }
  return (
    <div className='container'>
      <input type="text" className='input' value={input} onChange={e => setInput(e.target.value)} />
      <button onClick={handleSubmit} className='button'>Add</button>
    </div>
  )
}

export default Input
