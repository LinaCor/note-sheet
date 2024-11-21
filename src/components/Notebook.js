import './my-style.css';
import List from './List';
import QuantityBook from './QuantityBook';
import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from "uuid";

export default function Notebook() {
  const [list, setValueList] = useState([1]);

  const selectQuantity = (value) => {
    let currentValue = parseInt(value);
    if (!isNaN(currentValue)) {
      const arr = Array.from({ length: currentValue }, (_, i) => i + 1);
      setValueList(arr);
    }
  };

  return (
    <div>
      <QuantityBook selectQuantity={selectQuantity} />
      <div className="main-container container">
        {list.map(el => <List key={uuidv4()} />)}
      </div>
    </div>
  )
};