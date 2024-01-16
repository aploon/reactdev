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

    const [todos, manageTodo] = useReducer(reducer, InitTodos)

    return <>
        <div>
            <input type="checkbox" />
            Afficher les tâches à accomplies
        </div>

        <ul>
            {todos.map((todo) => {
                return <li key={todo.name}>
                    <input type="checkbox" />
                    {todo.name}
                    <button onClick={() => manageTodo({type: 'DELETE_TODO', payload: todo})}>Supprimer</button>
                </li>
            })}
        </ul>

        <button>Supprimer les tâches accomplies</button>
    </>
}

export default App
