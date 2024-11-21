export default function QuantityBook({ selectQuantity }) {


  const handleRadio = (evt) => {
    const value = evt.target.value;
    selectQuantity(value);
  }

  return (
    <>
      <div className="radio-container container" >
        <h4>
          How many lists you need?
        </h4>
        <div className="radio-btns">
          <p>
            <label>
              <input name="group1" type="radio" value="3" onClick={handleRadio} />
              <span>3</span>
            </label>
          </p>
          <p>
            <label>
              <input name="group1" type="radio" value="6" onClick={handleRadio} />
              <span>6</span>
            </label>
          </p>
          <p>
            <label>
              <input name="group1" type="radio" value="9" onClick={handleRadio} />
              <span>9</span>
            </label>
          </p>
        </div>
      </div>
    </>
  )
}