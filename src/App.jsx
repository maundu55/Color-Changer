import Square from "./Square"
import Input from "./Input"
import { useState } from "react"

function App() {
const [colorValue, setColorValue] = useState('')
 
  return (
    <div className="App">
      <Square colorValue={colorValue} />
      <Input colorValue={colorValue}
             setColorValue={setColorValue}
             onChange={onchange}
      />
    </div>
  )
}

export default App
