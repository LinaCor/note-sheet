import './my-style.css';
import List from './List';
import QuantityNote from './QuantityNote';
import { v4 as uuidv4 } from "uuid";
import { useState, useEffect, useContext } from 'react';
import { ListContext } from '../context';



export default function Notebook() {
  const [quanityList, setQuanityList] = useState([1]);

  const { getListitem } = useContext(ListContext);

  //useEffect(() => {
  //  const locallist = localStorage.getItem('list#1');
  //  if (locallist) {
  //    getListitem(JSON.parse(locallist));
  //  }
  //  //eslint-disable-next-line
  //}, []);

  const selectQuantity = (value) => {
    let currentValue = parseInt(value);
    if (!isNaN(currentValue)) {
      const newLists = Array.from({ length: currentValue }, () => ({
        id: uuidv4(),
        items: [],
      }));
      setQuanityList(newLists);
    }
  }


  return (
    <div>
      <QuantityNote selectQuantity={selectQuantity} />
      <div className="main-container container">
        {quanityList.map((el, index) => {
          return <List key={el.id} id={el.id} index={index} />
        })}
      </div>
    </div>
  )
};
