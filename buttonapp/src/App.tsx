
import './App.css'

function MyButton({ title }: { title: string }) {
  return (
    <button style={{ backgroundColor: 'pink' }}>{title}</button>
  )
}
function App() {


  return (
    <>
      <MyButton title={'Button Primary'} />
      <MyButton title={'Button Danger'} />
      <MyButton title={'Button Cute'} />
      <MyButton title={'Button'} />
    </>
  )
}

export default App
