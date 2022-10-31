import { useState } from "react"

const Counter = () => {
  const [count, setCount] = useState(1);

  const handleCount = () => {
    setCount(() =>count + 1);
  }

  const handleCountAsync = () => {
    setTimeout(() => {
      setCount((prev) => prev + 1);
    }, 2000);
  }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleCount} style={{ cursor: 'pointer', margin: '10px' }}>+</button>
      <button onClick={handleCountAsync} style={{cursor: 'pointer', margin: '10px'}}>+ 2s</button>
    </div>
  )
}

export default Counter;
