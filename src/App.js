import React from 'react'
import { useGlobalContext } from './Context';
import Navbar from './Navbar';
import PizzaContainer from './PizzaContainer';

function App() {
  const loading= useGlobalContext()
  if (loading) {
    return (
      <div className='loading'>
        <h1>Loading...</h1>
      </div>
    )
  }
  return (
    <main>
      <Navbar />
      <PizzaContainer />
    </main>
  )
}

export default App