export interface ITodo {
  id?: string,
  name: string,
  completed: boolean
}

export interface TodoProps {
  todo: ITodo,
  dispatch: React.Dispatch<any>
}
