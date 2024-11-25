import './my-style.css';
import List from './List';
import QuantityNote from './QuantityNote';
import { v4 as uuidv4 } from "uuid";
import { useState, useEffect, useContext } from 'react';
import { ListContext } from '../context';



export default function Notebook() {
  const [quanityList, setQuanityList] = useState([1]);

  const { getListitem } = useContext(ListContext);

  useEffect(() => {
    const locallist = localStorage.getItem('list#1');
    if (locallist) {
      getListitem(JSON.parse(locallist));
    }
    //eslint-disable-next-line
  }, []);


  const selectQuantity = (value) => {
    let currentValue = parseInt(value);
    if (!isNaN(currentValue)) {
      const arr = Array.from({ length: currentValue }, (_, i) => i + 1);
      setQuanityList(arr);
    }
  }


  return (
    <div>
      <QuantityNote selectQuantity={selectQuantity} />
      <div className="main-container container">
        <List />
        {/*{quanityList.map(el => {
          const listId = uuidv4();
          return (
            <List key={listId} id={listId} addListitem={addListitem} listContent={listContent} removeListItem={removeListItem} changeListitem={changeListitem} />)
        })}*/}
      </div>
    </div>
  )
};
