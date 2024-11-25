import ListItem from "./ListItem"
import { v4 as uuidv4 } from "uuid";
import { useContext } from "react";
import { ListContext } from "../context";


export default function List() {

  const { listItems, addNewListItem } = useContext(ListContext);

  function clickInput() {
    const input = document.querySelector('.list-input');
    if (input.value) {
      const newObject = {
        id: uuidv4(),
        title: input.value,
        isChecked: false,
      }
      addNewListItem(newObject);
      input.value = '';
    } else {
      return;
    }
  }

  const handleKeyPress = (evt) => {
    if (evt.key === 'Enter') {
      clickInput();
    }
  }

  return (
    <div className="collection-container">
      <ul className="collection with-header">
        <li className="collection-header"><h4>List #1</h4></li>
        <li className="collection-item">
          <div>
            <label className="collection-input">
              <input type="text" className="list-input"
                onKeyDown={handleKeyPress}
              />
              <button className="secondary-content" onClick={clickInput}><i className="material-icons add-icon">add</i></button>
            </label>
            <span>что же я должен сделать..?</span>
          </div>
        </li>
        {listItems.map((el) => {
          return <ListItem key={el.id} {...el} />
        })}
      </ul>
    </div>
  )
}