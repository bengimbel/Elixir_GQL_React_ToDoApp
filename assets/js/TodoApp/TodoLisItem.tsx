import React, { ChangeEvent, useCallback, useState } from 'react';
import { useMutation, gql } from '@apollo/client';
import { TodoItem } from './types/TodoItem';

const TOGGLE_TODO_ITEM = gql`
mutation($id: ID!) {
	toggleTodoItem(id: $id) {
		id
    isCompleted
  }
}
`

const UPDATE_TODO_ITEM = gql`
  mutation updateTodoItem($id: ID!, $content: String!) {
    updateTodoItem(content: $content, id: $id) {
      id
      content
      isCompleted
    }
  }
`

const TodoListItem = ({ id, content, isCompleted }: TodoItem) => {
  const [toggleItem] = useMutation(TOGGLE_TODO_ITEM)
  const [updateItem] = useMutation(UPDATE_TODO_ITEM)
  const [text, setText] = useState(content)

  const onChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const newText = e.target.value
      setText(newText)
    }, [setText])

  const handleToggle = useCallback(() => {
    toggleItem({ variables: { id } })
  }, [id, toggleItem])

  const onBlur = useCallback(() => {
      updateItem({variables: {id, content: text}})
    }, [text, updateItem])

  return (
    <div className="todo_item">
      <button className={`todo_item__toggle ${isCompleted && `todo_item__toggle--completed`}`} onClick={handleToggle} />
      <input className="todo_item__content" value={text} onChange={onChange} onBlur={onBlur} />
    </div>
  )
}
export default TodoListItem;
