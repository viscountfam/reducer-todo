import React, { useState, useReducer } from "react";
import { initialState, todoReducer } from "./reducers/reducer";
import Task from "./components/task";
import "./App.css";

function App() {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  console.log("state after initialization", state.data);
  // const [toDoList, setToDoList] = useState([...state.data]);
  // console.log("toDOList after initialiazion", toDoList);
  const [toDoText, setToDoText] = useState("");

  // const toggleCompleted = id => {
  //   const updatedToDoList = toDoList.map(task => {
  //     if (task.id === id) {
  //       console.log("Verifying task completion", task);
  //       return {
  //         ...task,
  //         completed: !task.completed
  //       };
  //     } else {
  //       return task;
  //     }
  //   });
  //   return setToDoList(updatedToDoList);
  // };

  // const clearCompleted = tasks => {
  //   const clearedToDoList = toDoList.filter(task => task.completed === false);
  //   return setToDoList(clearedToDoList);
  // };

  const handleChanges = e => {
    setToDoText(e.target.value);
  };

  // useEffect(() => {
  //   setToDoList([...state.data]);
  // }, [state.data]);

  return (
    <>
      <div className="App">
        <h1>To Do List</h1>
        <input
          className="todo-input"
          type="text"
          name="todoText"
          value={toDoText}
          onChange={handleChanges}
        />
        <button
          onClick={() => dispatch({ type: "NEW_TO_DO", payload: toDoText })}
        >
          Add New To Do
        </button>
        {state.data.map(todo => (
          <Task
            key={todo.id}
            todo={todo}
            // toggleCompleted={toggleCompleted}
            dispatch={dispatch}
          />
        ))}
        <button onClick={() => dispatch({ type: "FILTER_TO_DO" })}>
          Clear Completed Tasks
        </button>
      </div>
    </>
  );
}

export default App;
