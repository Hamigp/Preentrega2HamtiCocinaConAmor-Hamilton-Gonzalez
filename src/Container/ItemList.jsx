import React from "react";
import Spinner from "react-bootstrap/Spinner";
import Item from "./Item";

function GrowExample() {
  return <Spinner animation="grow" />;
}

const ItemList = ({ list }) => {
  

  return (
    <>
      {list.length === 0 && <GrowExample />}
      {list.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </>
  );
};


export default ItemList;