import React from 'react';
import { ApolloProvider } from "@apollo/react-hooks"
import client from "./client"
import TodoList from './TodoList';

const TodoApp = () => {
  return (
    <ApolloProvider client={client}>
      <TodoList />
    </ApolloProvider>

  )
}

export default TodoApp;
