// reducers/counterReducer.ts
interface Action {
  type: "INCREMENT" | "RESET";
}

export function counterReducer(state: number, action: Action): number {
  if (action.type === "INCREMENT")
    return state + 1;
  if (action.type === "RESET")
    return 0;
  return state;
}
 