import "../css/app.sass"
import React from "react"
import ReactDOM from "react-dom"
import TodoApp from "./TodoApp"

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("TodoApp");
  console.log(container, 'container')
  if (!container) {
    return
  }
  ReactDOM.render(<TodoApp />, container)
})
