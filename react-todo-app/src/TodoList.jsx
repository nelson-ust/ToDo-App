import { TodoItem } from "./TodoItem";

export function TodoList({ todos, toggleTodo, deleteTodo }) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Completed</th>
          <th>Title of Todo</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {todos.length === 0 && (
          <tr>
            <td colSpan="4">No Todos Found</td>
          </tr>
        )}
        {todos.map(todo => (
          <TodoItem
            {...todo}
            key={todo.id}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        ))}
      </tbody>
    </table>
  );
}
