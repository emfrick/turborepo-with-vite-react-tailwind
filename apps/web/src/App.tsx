import { useState } from 'react'
import './App.css'

import { Button } from '@repo/ui';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
     <h1>Hello World</h1>
     <Button onClick={() => setCount(prev => prev + 1)}>
        I'm a button
      </Button>
     <h4>Count: {count}</h4>
    </>
  )
}

export default App
