import { useState } from "react";
import { Header } from "./Header";
import { AddItems } from "./AddItems";
import { List } from "./List";
import { Footer } from "./Footer";

var initialItems = [
];

export default function App() {
  const [items, setItems] = useState(initialItems);

  function add(item) {
    console.log(initialItems.filter((item) => (item.packed ? item : {})));
    setItems((items) => [...items, item]);
  }

  function del(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function togglePack(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  function clearItems() {
    const answer = window.confirm("Do you really want to clear the list?");
    if (answer) setItems([]);
  }

  return (
    <div className="app">
      <Header />
      <AddItems onAddItem={add} />
      <List
        items={items}
        onDeleteItem={del}
        onUpdateItem={togglePack}
        onClear={clearItems}
      />
      <Footer items={items} />
    </div>
  );
}
