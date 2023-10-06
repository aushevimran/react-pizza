import React from "react";

import Header from "./components/Header";
import Categories from "./components/Categories";
import Sort from "./components/Sort";
import PizzaBlock from "./components/PizzaBlock";

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
            <PizzaBlock title="Бургер" price="400" />
            {PizzaBlock({
              title: "ШефБургер",
              price: 500,
            })}
            <PizzaBlock title="Бургер" price="400" />
            <PizzaBlock title="Бургер" price="400" />
            <PizzaBlock title="Бургер" price="400" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
