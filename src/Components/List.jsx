import React, { useLayoutEffect } from "react";

import PropTypes from 'prop-types';
const List = (props) => {
  // const fruits = [
  //   { id: 1, name: "apple", calories: 95 },
  //   { id: 2, name: "banana", calories: 45 },
  //   { id: 3, name: "orange", calories: 50 },
  //   { id: 4, name: "pineapple", calories: 60 },
  //   { id: 5, name: "strawberry", calories: 150},
  //   { id: 6, name: "kiwi", calories: 100 },];

  // fruits.sort((a, b) => a.name.localeCompare(b.name)); //ALPHABETICAL ORDER
  // fruits.sort((a, b) => b.name.localeCompare(a.name)); //REVERSE ALPHABETICAL ORDER
  // fruits.sort((a, b) => a.calories - b.calories); //REVERSE LENGTH ORDER
  // const lowCalFruits = fruits.filter((fruit) => fruit.calories < 100);
  // const listItems = fruits.map((fruit) => (
  //   <li key={fruit.id}>
  //     {fruit.name}: &nbsp; <b> {fruit.calories} </b>{" "}
  //   </li>
  // ));
  // const listItems = lowCalFruits.map((fruit) => (
  //   <li key={fruit.id}> {fruit.name}: &nbsp; <b> {fruit.calories} </b> </li>
  // ));
  // const lowCalFruits = fruits.filter((fruit) => fruit.calories > 100);
  // const highCalFruits = fruits.filter((fruit) => fruit.calories >= 100);

  const category = props.category;
  const itemList = props.items;
  const listItems = itemList.map((item) => (
    <li key={item.id}>
      {item.name}: &nbsp; <b> {item.calories} </b>
    </li>
  ));
  return (
    <>
      <h3 className="list-category">{category}</h3>
      <ol className="list-items">{listItems}</ol>
    </>
  );
};
List.PropTypes = {
category: PropTypes.string,
items: PropTypes.arrayOf(PropTypes.shape({id: PropTypes.number, name: PropTypes.string, 
  calories: PropTypes.number})) 
}

List.defaultProps = {
  category: "category",
  items: [],

  
}

export default List;
