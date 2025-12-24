import { useMemo, useState } from "react";

const TODOExample = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  // Expensive calculation (memoized)
  const calculation = useMemo(
    () => expensiveCalCulation(count),
    [count]
  );

  // ✅ Add todo function
  const addTodo = () => {
    setTodos((t) => [...t, "NEW Todo"]);
  };

  // ✅ Correct increment function
  const increment = () => {
    setCount((c) => c + 1);
  };

  return (
    <div>
      <div>
        <h2>MY Todos</h2>

        {todos.map((todo, index) => (
          <p key={index}>{todo}</p>
        ))}

        <button onClick={addTodo}>ADD TODO</button>
      </div>

      <hr />

      <div>
        Count: {count}
        <button onClick={increment}>+</button>

        <h2>Expensive Calculation</h2>
        {calculation}

        <p>
          Note: This example executes the expensive function only
          when you click the increment button, not when you add a todo.
        </p>
      </div>
    </div>
  );
};

const expensiveCalCulation = (num) => {
  console.log("Calculating...");
  for (let i = 0; i < 1000; i++) {
    num += 1;
  }
  return num;
};

export default TODOExample;
