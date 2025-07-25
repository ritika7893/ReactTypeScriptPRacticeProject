
import './App.css'
interface Props {
  title: string;
disbled: boolean;}
function Button(props: Props) {
  return (
    <button disabled={props.disbled}>
      {props.title}
    </button>
  )
}
function App() {
 

  return (
    <>
      <Button title="Click Me" disbled={false} />
      <Button title="Disabled" disbled={true} />
      <Button title="Submit" disbled={false} />
    </>
  )
}

export default App
