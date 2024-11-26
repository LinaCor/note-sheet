import './my-style.css';
import List from './List';
import QuantityNote from './QuantityNote';
import { v4 as uuidv4 } from "uuid";
import { useState, useEffect, useContext } from 'react';
import { ListContext } from '../context';



export default function Notebook() {
  const [quanityList, setQuanityList] = useState([4]);

  const { getListitem, listItems } = useContext(ListContext);

  useEffect(() => {
    const locallist = localStorage.getItem('allList');
    if (locallist) {
      getListitem(JSON.parse(locallist));

      const sheetsHasItem = JSON.parse(locallist).filter(el => el.items.length !== 0);
      if (sheetsHasItem.length > 0) {
        const lastItemId = sheetsHasItem.pop().id;
        selectQuantity(lastItemId);
      }
    }
    //eslint-disable-next-line
  }, []);


  useEffect(() => {
    localStorage.setItem('allList', JSON.stringify(listItems));
  }, [listItems])

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
