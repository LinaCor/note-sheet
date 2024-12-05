import { useContext } from "react";
import { ListContext } from "../context";

export default function ListItem({ title, id, isChecked, indexList }) {

  const { removeListItem, changeListitem, isItemChecked } = useContext(ListContext);

  const handleChecked = (evt) => {
    if (evt.target.checked || !evt.target.checked) {
      isItemChecked(id, indexList);
    }
  }

  return (
    <li className="collection-item list-item">
      <label>
        <input
          type="checkbox"
          onChange={handleChecked}
          checked={isChecked} />
        <span className="label-content">{title}</span>
      </label>
      <button className="secondary-content"
        onClick={() => changeListitem(id, indexList)}
      ><i className="material-icons create-icon">create</i></button>
      <button className="secondary-content"
        onClick={() => removeListItem(id, indexList)}
      ><i className="material-icons delete-icon">delete</i></button>
    </li>
  );
}