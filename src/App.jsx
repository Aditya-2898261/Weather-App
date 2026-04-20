import { useState } from 'react'
import SearchBox from './SearchBox.jsx'
import InfoBox from './InfoBox.jsx'
import Wheather from './Wheather.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
   <Wheather/>
  )
}

export default App
