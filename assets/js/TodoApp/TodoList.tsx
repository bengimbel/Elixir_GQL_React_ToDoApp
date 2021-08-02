import React from "react"
import { useQuery, gql } from "@apollo/client"
import { TodoItem } from "./types/TodoItem"
import TodoListItem from "./TodoLisItem"


interface TodoItemsQueryResult {
  todoItems: TodoItem[];
}

const TodoList = () => {
  const { data, loading } = useQuery<TodoItemsQueryResult>(gql`
    {
    todoItems {
      id
      content
      isCompleted
    }
  }
  `)

  return (
    <div className="todo_list">
      <h3 className="todo_list__header">
        To Do Items
      </h3>
      <div className="todo_list__list">
        {data?.todoItems?.map((item: TodoItem) => (
          <TodoListItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  )
}

export default TodoList;
