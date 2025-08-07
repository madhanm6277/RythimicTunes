import { useState } from 'react'
import Header from './components/Header'
import SideMenu from './components/SideMenu'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex h-full'>
      <SideMenu></SideMenu>
      <Header></Header>
    </div>
  )
}

export default App
