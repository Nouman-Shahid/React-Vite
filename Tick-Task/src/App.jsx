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
    {
      text: 'Do Shopping',
      date: '23/03/2024'
    },
  ]

  return (
    <main>
      <h1>Tick Task</h1>
      <AddTodo />
      <ShowTodo list={lists} />
    </main>
  )
}

export default App
