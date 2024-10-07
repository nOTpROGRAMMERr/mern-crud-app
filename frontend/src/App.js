import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ItemList from './components/ItemList';
import ItemForm from './components/ItemForm';

const App = () => {
  const [items, setItems] = useState([]);

  // Fetch items
  useEffect(() => {
    axios.get('http://localhost:5000/api/items')
      .then(response => setItems(response.data))
      .catch(error => console.error(error));
  }, []);

  // Add item
  const addItem = (item) => {
    axios.post('http://localhost:5000/api/items', item)
      .then(response => setItems([...items, response.data]))
      .catch(error => console.error(error));
  };

  // Delete item
  const deleteItem = (id) => {
    axios.delete(`http://localhost:5000/api/items/${id}`)
      .then(() => setItems(items.filter(item => item._id !== id)))
      .catch(error => console.error(error));
  };

  return (
    <div>
      <h1>CRUD App</h1>
      <ItemForm addItem={addItem} />
      <ItemList items={items} deleteItem={deleteItem} />
    </div>
  );
};

export default App;
