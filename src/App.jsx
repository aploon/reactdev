import { useReducer, useState } from "react"

const InitTodos = [
    {name: "Faire les courses", completed: false},
    {name: "Ranger les courses", completed: false},
    {name: "Manger les courses", completed: false}
]

function reducer(todos, action) {
    if(action.type === 'DELETE_TODO') {
        return todos.filter((todo) => todo.name !== action.payload.name)
    }else {
        return todos
    }
}

function App() {
  const [count, setCount] = useState(3)

  let autoCount = () => {

    timer =  setInterval(() => {
        setCount(v => v - 1)
        if(count == 0){
            clearInterval(timer) 
        }
    }, 1000);
    
  }

  return (
    <div>
        <input type="number" onChange={e => {setCount()}}/>
        <h1>Compteur automatique : {count}</h1> 
    </div>
  );
}

export default App;
