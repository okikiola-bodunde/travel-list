import { useState } from "react";
import Logo from "./logo";
import Form from "./form";
import ParkingList from "./parkingList";
import Stats from "./stats";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: true },
  { id: 3, description: "Toothbrush", quantity: 1, packed: false },
];

export default function App() {
  const [items, setItems] = useState(initialItems);

  function handleAddItems(newItem) {
    setItems((items) => [...items, newItem]);
  }

  function handleDeleteitem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item,
      ),
    );
  }

  function handleClearList() {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items?",
    );
    if (confirmed) {
      setItems([]);
    }
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <ParkingList
        items={items}
        onDeleteItem={handleDeleteitem}
        onToggleItem={handleToggleItem}
        onClearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}
