export default function Item({ item, onDeleteItem, onToggleItem }) {
  return (
    <li>
      <input
        type="checkbox"
        checked={item.packed}
        onChange={() => onToggleItem(item.id)}
      />
      <span style={{ textDecoration: item.packed ? "line-through" : "" }}>
        {item.quantity} {item.description}
      </span>
      <button
        onClick={() => onDeleteItem(item.id)}
        style={{ backgroundColor: "red", color: "white", borderRadius: "100%" }}
      >
        X
      </button>
    </li>
  );
}
