
import './App.css'
import { Button, message } from 'antd';

function App() {
  
  return (
    <>
      <Button type="primary" onClick={() => message.success('Button clicked!')}>
        Click Me</Button>
    </>
  )
}

export default App
