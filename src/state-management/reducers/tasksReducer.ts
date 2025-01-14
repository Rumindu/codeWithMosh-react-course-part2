// reducers/tasksReducer.ts
export interface Task {
  id: number;
  title: string;
}

interface AddTaskAction {
  type: "ADD";
  task: Task;
}

interface DeleteTaskAction {
  type: "DELETE";
  taskId: number;
}
// TaskAction can be AddTaskAction or DeleteTaskAction
type TaskAction = AddTaskAction | DeleteTaskAction;

export function tasksReducer(tasks: Task[], action: TaskAction): Task[] {
  // we can also use if statements
  switch (action.type) {
    case "ADD":
      return [action.task, ...tasks];
    case "DELETE":
      return tasks.filter(task => task.id !== action.taskId);
    default:
      return tasks;
  }
}
