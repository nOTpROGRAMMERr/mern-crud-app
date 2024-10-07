import React from 'react';

const ItemList = ({ items, deleteItem }) => {
  return (
    <ul>
      {items.map(item => (
        <li key={item._id}>
          {item.name} - {item.description}
          <button onClick={() => deleteItem(item._id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default ItemList;
