import ListItem from "./ListItem"
import { v4 as uuidv4 } from "uuid";


export default function List({ addListitem, listContent, removeListItem, changeListitem }) {

  function clickInput() {
    const input = document.querySelector('.list-input');
    if (input.value) {
      const newObject = {
        id: uuidv4(),
        title: input.value,
      }
      addListitem(newObject);
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
              <input type="text" className="list-input" onKeyDown={handleKeyPress} />
              <button className="secondary-content" onClick={clickInput}><i className="material-icons add-icon">add</i></button>
            </label>
            <span>что же я должен сделать..?</span>
          </div>
        </li>
        {listContent.map((el) => {
          return <ListItem key={el.id} {...el} removeListItem={removeListItem} changeListitem={changeListitem} />
        })}
      </ul>
    </div>
  )
}