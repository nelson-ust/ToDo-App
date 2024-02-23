export function TodoItem({ completed, id, title, toggleTodo, deleteTodo }) {
  let count = 1;
  return (
    <tr>
      <td>{id}</td>
      <td>
        <input
          type="checkbox"
          checked={completed}
          onChange={(e) => toggleTodo(id, e.target.checked)}
        />
      </td>
      <td>{title}</td>
      <td>
        <button onClick={() => deleteTodo(id)} className="btn btn-danger">
          Delete
        </button>
      </td>
    </tr>
  );
}
