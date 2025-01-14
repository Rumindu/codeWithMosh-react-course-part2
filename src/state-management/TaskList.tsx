import { useReducer } from "react";
import { tasksReducer, Task } from "./reducers/tasksReducer";

const TaskList = () => {
  const [tasks, dispatch] = useReducer(tasksReducer, []);

  const addTask = () => {
    const newTask: Task = { id: Date.now(), title: `Task ${Date.now()}` };
    dispatch({ type: "ADD", task: newTask });
  };

  const deleteTask = (taskId: number) => {
    dispatch({ type: "DELETE", taskId: taskId });
  };

  return (
    <>
      <button onClick={addTask} className="btn btn-primary my-3">
        Add Task
      </button>
      <ul className="list-group">
        {tasks.map((task) => (
          <li
            className="list-group-item d-flex justify-content-between align-items-center"
            key={task.id}
          >
            {task.title}
            <button
              className="btn btn-outline-danger"
              onClick={() => deleteTask(task.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};
export default TaskList;
