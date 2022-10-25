import "./itemListContainer.css"

function ItemListContainer(props) {
  return (
    <>
      <h1>{props.greeting}</h1>
      <button className="btn">{props.text}</button>
      <button className="btn">{props.text}</button>
      <button className="btn">{props.text}</button>
    </>
  );
}

export default ItemListContainer;
