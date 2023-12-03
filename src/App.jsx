import { Fragment, useLayoutEffect, useState } from "react"
import TodoListElement from "./TodoList.jsx"


function App() {
 
    let DefaultTodoList = [
        {
            id: 1,
            title: "1 todo list item"
        },
        {
            id: 2,
            title: "2 todo list item"
        },
        {
            id: 3,
            title: "3 todo list item"
        },
        {
            id: 4,
            title: "4 todo list item"
        },
        {
            id: 5,
            title: "5 todo list item"
        }
    ]

    let [todoList, setTodoList] = useState(DefaultTodoList)

    function AddTodoListItem() {
        setTodoList(
            [
                ...todoList, 
                {
                    id: todoList.length + 1, 
                    title: (todoList.length + 1) + ' todo list item'
                }
            ]
        )
    }
    
    function RemoveTodoListItem() {
        todoList.pop()
        setTodoList([...todoList])
    }

    let [isAccepted, setIsAccepted] = useState(false)

    return <Fragment>

        {/* Affichage du title de notre application */}
        <h1>TodoList App</h1>

        {/* Affichage du todolist */}     
        <button onClick={AddTodoListItem}>Ajouter</button>
        <button onClick={RemoveTodoListItem}>Retirer</button>
        <TodoListElement todoList={todoList}></TodoListElement><br/>


        {/* Conditions d'utilisations */}
        <AcceptedCheck checked={isAccepted} onCheck={setIsAccepted}></AcceptedCheck> <br/><br/>
        <button disabled={!isAccepted}>Soumettre le formulaire</button>
        
    </Fragment>

}

function AcceptedCheck({checked, onCheck}) {

    return <Fragment>
        <label>
            <input type="checkbox" name="accepted" defaultChecked={checked} onChange={e => onCheck(e.target.checked)} />
            Accepter les conditions d'utilisations !
        </label>
    </Fragment>

}

export default App
