export default function List() {
  return (
    <div className="collection-container">
      <ul className="collection with-header">
        <li className="collection-header"><h4>First Names</h4></li>
        <li className="collection-item">
          <div>
            <label>
              <input type="checkbox" />
              <span>Red</span>
            </label>
            <a href="#!" className="secondary-content"><i className="material-icons delete-icon">delete</i></a>
          </div>
        </li>
      </ul>
    </div>
  )
}