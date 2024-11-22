import './my-style.css';
import List from './List';
import { useState, useEffect } from 'react';
//import { v4 as uuidv4 } from "uuid";

export default function Notebook() {
  const [listContent, setListContent] = useState(['погладить морских свиней', 'полить цветы']);


  const addListitem = (item) => {
    setListContent([...listContent, item]);
  }

  return (
    <div>
      {/*<QuantityBook selectQuantity={selectQuantity} />*/}
      <div className="main-container container">
        <List addListitem={addListitem} listContent={listContent} />
      </div>
    </div>
  )
};