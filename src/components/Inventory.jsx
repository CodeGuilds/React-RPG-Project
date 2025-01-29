import { useState } from "react";

const Inventory = ({ inventory }) => {
  const [items, setItems] = useState(inventory);

  const removeItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  return (
    <div className="inventory">
      <h3>🎒 Inventár</h3>
      {items.length === 0 ? <p>Inventár je prázdny.</p> : (
        <ul>
          {items.map(item => (
            <li key={item.id}>
              {item.name} ({item.type}) 
              <button onClick={() => removeItem(item.id)}>❌</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Inventory;