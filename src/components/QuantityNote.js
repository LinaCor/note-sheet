import { useState } from "react";

export default function QuantityNote({ selectQuantity }) {
  const [errorMessage, seterrorMesage] = useState(false);
  const [textMessage, setTextmessage] = useState('только числа от 1');


  const clickValueBtn = () => {
    const input = document.querySelector('.value-input-list');
    const value = Number(input.value);

    if (!value || value <= 0) {
      seterrorMesage(true);
      setTextmessage('только числа от 1');
      return;
    }

    if (value > 10) {
      seterrorMesage(true);
      setTextmessage('не больше 10, чтобы точно все сделать');
      return;
    }

    selectQuantity(value);
    input.value = '';
    seterrorMesage(false);
  };


  const handleKeyPress = (evt) => {
    if (evt.key === 'Enter') {
      clickValueBtn();
    }
  }


  return (
    <>
      <div className="value-container container" >
        <h4>
          Сколько чек-листов вам требуется?
        </h4>
        <div className="value-input">
          <label className="collection-input">
            <input type="text" className="value-input-list" onKeyDown={handleKeyPress} />
          </label>

          <button className="btn input-btn" onClick={clickValueBtn}>сгенерировать</button>
        </div>
        <span className="error-message" style={{ opacity: errorMessage ? 1 : 0 }}>{textMessage}</span>
      </div >
    </>
  )
}