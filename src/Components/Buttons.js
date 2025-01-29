function Buttons({onClickHandler, title, value}) {
  return <div>
    <button onClick={onClickHandler} className="btns" value={value}>{title}</button>
  </div>;
}

export default Buttons;
