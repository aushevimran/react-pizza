import React from "react";

const Categories = () => {
  const arrCategories = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];
  const [active, setActive] = React.useState(0);

  const ClickButton = (index) => {
    setActive(index);
  };

  return (
    <div className="categories">
      <ul>
        {arrCategories.map((value, index) => (
          <li
            key={index}
            onClick={() => ClickButton(index)}
            className={active === index ? "active" : ""}
          >
            {value}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
