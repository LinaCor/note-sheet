import './my-style.css';
import List from './List';
import QuantityNote from './QuantityNote';
import { v4 as uuidv4 } from "uuid";
import { useState, useEffect } from 'react';

export default function Notebook() {
  const [listContent, setListContent] = useState([]);
  const [quanityList, setQuanityList] = useState([1]);

  useEffect(() => {
    const locallist = localStorage.getItem('list#1');
    if (locallist) {
      setListContent(JSON.parse(locallist));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('list#1', JSON.stringify(listContent));
  }, [listContent]);

  const selectQuantity = (value) => {
    let currentValue = parseInt(value);
    if (!isNaN(currentValue)) {
      const arr = Array.from({ length: currentValue }, (_, i) => i + 1);
      setQuanityList(arr);
    }
  }


  const addListitem = (item) => {
    setListContent([...listContent, item]);
  };

  const removeListItem = (id) => {
    setListContent(listContent.filter(el => el.id !== id));
  };

  const changeListitem = (id) => {
    const input = document.querySelector('.list-input');

    const currentIndex = listContent.findIndex(el => el.id === id);
    input.value = listContent[currentIndex].title;
    removeListItem(id);
  };

  return (
    <div>
      <QuantityNote selectQuantity={selectQuantity} />
      <div className="main-container container">
        {quanityList.map(el => {
          const listId = uuidv4();
          return (
            <List key={listId} id={listId} addListitem={addListitem} listContent={listContent} removeListItem={removeListItem} changeListitem={changeListitem} />)
        })}
      </div>
    </div>
  )
};