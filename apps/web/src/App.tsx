import { useState } from 'react'
import './App.css'

import { Button, GradientButton } from '@repo/ui';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
     <div className="bg-gray-900 h-screen">

     <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-100 sm:text-6xl">
              TurboRepo
            </h1>
            <div className="relative rounded-full px-3 py-1 text-lg leading-6 text-gray-300 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              Vite + React + Tailwind
            </div>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" onClick={() => setCount(prev => prev + 1)}>
                Increment
              </Button>
              <GradientButton onClick={() => setCount(prev => prev - 1)}>
                Decrement
              </GradientButton>
              <h4 className="text-sm font-semibold leading-6 text-gray-400">Count: {count}</h4>
            </div>
          </div>
        </div>
      </div>
     </div>
    </>
  )
}

export default App
