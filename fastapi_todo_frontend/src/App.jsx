import React from 'react'
import NavBar from './NavBar'
import Dashboard from './Dashboard'

const App = () => {
  return (
    <div className='h-screen bg-blue-100 flex flex-col gap-6'>
        <NavBar />
        <Dashboard />
    </div>
  )
}

export default App