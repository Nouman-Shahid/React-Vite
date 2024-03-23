import AddTodo from './Components/Add/addTodo.jsx'
import ShowTodo from './Components/Display/ShowTodo.jsx'
import './App.css'

function App() {

  let lists = [
    {
      text: 'Home Work',
      date: '20/03/2024'
    },
    {
      text: 'Do twenty push ups',
      date: '22/03/2024'
    },
  ]

  return (
    <center>
      <h1>Todo App</h1>
      <AddTodo />
      <ShowTodo list={lists} />
    </center>
  )
}

export default App
