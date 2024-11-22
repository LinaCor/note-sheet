export default function ListItem({ title }) {

  return (
    <li className="collection-item list-item">
      <label>
        <input type="checkbox" />
        <span className="label-content">{title}</span>
      </label>
      <button className="secondary-content"><i className="material-icons create-icon">create</i></button>
      <button className="secondary-content"><i className="material-icons delete-icon">delete</i></button>
    </li>
  );
}