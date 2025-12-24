import React, { useCallback, useState } from 'react';

// 1. The main component holding the state
function TodoAPP() {
    const [todos, setTodos] = useState([]); // Array of todo objects
    const [count, setCount] = useState(0); // Simple counter state

 //call back function re-render when we click or call addTodo
    const addTodo = useCallback((text) => {
        setTodos(prev => [...prev, { id: Date.now(), text }]);
       console.log(new Date(Date.now()).toLocaleString());
    }, []);

    return (
        <div >
            
            <button onClick={() => setCount(count + 1)}>
                Count: {count} (Click to re-render parent)
            </button>
          
            <p>Todos: {todos.length}</p>

            <hr />

            <TodoList todos={todos} onAdd={addTodo} />
        </div>
    );
}



//list render(after fetch)
const TodoList = React.memo(({ todos, onAdd }) => {
    console.log('Todo list render');



    return (
        <div >
            <button onClick={() => onAdd(`New todo #${todos.length + 1}`)}>
                
                Add New Todo
            </button>
            
            <ul>
                {todos.map(todo => (
                    <li key={todo.id}>{todo.text}</li>
                    
                    
                ))}
            </ul>
        </div>
    );

});




//root component
const UseCallBackHook = () => {
    return (
        <div>
            <TodoAPP />
        </div>
    );
};

export default UseCallBackHook;