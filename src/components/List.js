import ListItem from "./ListItem"

export default function List({ addListitem, listContent }) {

  function clickInput() {
    const inputValue = document.querySelector('.list-input');
    if (inputValue.value) {
      addListitem(inputValue.value);
      inputValue.value = '';
    } else {
      return;
    }
  }

  return (
    <div className="collection-container">
      <ul className="collection with-header">
        <li className="collection-header"><h4>List #1</h4></li>
        <li className="collection-item">
          <div>
            <label className="collection-input">
              <input type="text" className="list-input" />
              <button className="secondary-content" onClick={clickInput}><i className="material-icons add-icon">add</i></button>
            </label>
            <span>what i must do..?</span>
          </div>
        </li>
        {listContent.map((el, index) => <ListItem key={index} title={el} />)}
      </ul>
    </div>
  )
}