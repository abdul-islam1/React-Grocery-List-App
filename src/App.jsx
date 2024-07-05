import { useState } from 'react';
import './app.css'
import { Footer, Header, Content, AddItem } from './components/export'


function App() {

  const [items, setItems] = useState(JSON.parse(localStorage.getItem('shoppinglist')));

  const [newItem, setNewItem] = useState('');

  const setAndSaveItems = (newItems) => {
    setItems(newItems)
    localStorage.setItem('shoppinglist', JSON.stringify(newItems))
  }

  const addItem = (newItem) => {

    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = {
      id,
      checked: false,
      item: newItem
    }
    const listItems = [...items, myNewItem]
    setAndSaveItems(listItems)
  }
  // just a git test

  const handleCheck = id => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item

    )
    setItsetAndSaveItemsems(listItems)

  }

  const handleDelete = (id) => {
    const listItems = items.filter(item => item.id !== id)
    setAndSaveItems(listItems)


  }

  const handleSubmit = (e) => {
    e.preventDefault();
    addItem(newItem)
    setNewItem('');
  }

  return (
    <div className='App'>
      <Header title="Grocery List" />
      <AddItem newItem={newItem} setNewItem={setNewItem} handleSubmit={handleSubmit} />
      <Content items={items} handleCheck={handleCheck} handleDelete={handleDelete} />
      <Footer length={items.length} />
    </div>
  )
}

export default App
