import './App.css'

import { Navbar, Hero, Analytics, Newsletter, Cards } from '@repo/ui';

function App() {
  return (
    <>
     <div className="bg-gray-900">
      <Navbar />
      <Hero />
      <Analytics />
      <Newsletter />
      <Cards />
     </div>
    </>
  )
}

export default App
