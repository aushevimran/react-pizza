import React from "react";

import Header from "./components/Header";
import Categories from "./components/Categories";
import Sort from "./components/Sort";
import PizzaBlock from "./components/PizzaBlock";

import BD from "./assets/db.json";

import "./scss/app.scss";
// Деструктуризация объекта
// const func = ({ price, elem }) => {
//   // const { price, elem } = elemets;
//   console.log(price + elem);
// };
// func({
//   price: 200,
//   elem: 111,
// });
function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {BD.map((obj) => (
              <PizzaBlock
                title={obj.name}
                image={obj.imageUrl}
                price={obj.price}
                sizes={obj.sizes}
                type={obj.types}
              />
            ))}
            {/* {PizzaBlock({
              title: "ШефБургер",
              price: 500,
            })} */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
