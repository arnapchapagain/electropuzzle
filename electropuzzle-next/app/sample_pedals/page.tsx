"use client";
import { categoryData, pedalsProductList } from "@/data/pedals";
import { useState } from "react";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

export default function PedalsPage() {
  const [filteredCategories, setFilteredCategories] = useState([]);

  const handleFilterChange = (selectedCategories: any) => {
    setFilteredCategories(selectedCategories);
  };
  const filteredPedals = pedalsProductList.data.pedals.data.filter(
    (pedal: any) =>
      filteredCategories.every((category) =>
        pedal.attributes.categories.data.some(
          (pedalCategory: any) => pedalCategory.attributes.value === category
        )
      )
  );

  return (
    <>
      <Navbar />

      <nav id="burger-menu" className="burger-nav">
        <div className="burger-nav__block">
          <a tabIndex={-1} href="index.html" className="logo burger-nav__logo">
            <img
              src="images/logo-black.svg"
              alt="ElectroPuzzle"
              className="logo__img burger-nav__logo-img"
            />
          </a>
          <button
            tabIndex={-1}
            id="burger-close"
            className="burger-nav__closes"
          >
            <img
              src="images/cancel.svg"
              alt=""
              className="burger-nav__closes-icon"
            />
          </button>
          <ul className="burger-nav__list">
            <li className="burger-nav__item">
              <a
                tabIndex={-1}
                href="index.html"
                className="burger-nav__item-link"
              >
                Главная
              </a>
            </li>
            <li className="burger-nav__item">
              <a
                tabIndex={-1}
                href="pedals.html"
                className="burger-nav__item-link"
              >
                Педали
              </a>
            </li>
            <li className="burger-nav__item">
              <a
                tabIndex={-1}
                href="contacts.html"
                className="burger-nav__item-link"
              >
                Контакты
              </a>
            </li>
            <li className="burger-nav__item">
              <a
                tabIndex={-1}
                href="basket.html"
                className="burger-nav__item-link"
              >
                Корзина
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <section
        className="hero-pedals"
        style={{
          background:
            "url('images/hero-pedals.webp') no-repeat center center fixed",
        }}
      >
        <div className="hero-pedals__content">
          <h1 className="hero-pedals__title">Педали</h1>
          <p className="hero-pedals__text">
            Адаптация классической схемы Dallas-Arbiter Fuzz Face, выпущенной в
            1966 году. Fuzz Face была скопирована непосредственно с Tone Bender
            Mk. 1.5
          </p>
        </div>
      </section>

      <div id="menu-filters" className="menu-filters">
        <form id="menu-form-filters" action="" className="menu-filters__form">
          <label className="menu-filters__item-btn">
            <input type="checkbox" checked />
            <span>Все</span>
          </label>

          <label className="menu-filters__item-btn">
            <input type="checkbox" />
            <span>Овердрайвы</span>
          </label>

          <label className="menu-filters__item-btn">
            <input type="checkbox" />
            <span>Дисторшены</span>
          </label>

          <label className="menu-filters__item-btn">
            <input type="checkbox" />
            <span>Фузы</span>
          </label>

          <label className="menu-filters__item-btn">
            <input type="checkbox" />
            <span>Компрессоры</span>
          </label>

          <label className="menu-filters__item-btn">
            <input type="checkbox" />
            <span>Модуляция и Дилеи</span>
          </label>

          <label className="menu-filters__item-btn">
            <input type="checkbox" />
            <span>Фильтрация и EQ</span>
          </label>

          <label className="menu-filters__item-btn">
            <input type="checkbox" />
            <span>Бустеры</span>
          </label>
          <button
            id="menu-form-btn"
            type="submit"
            className="menu-filters__btn"
          >
            Применить
          </button>
        </form>
      </div>

      <div className="wrapper">
        <main className="main main-pedals">
          <div className="container pedals-container">
            <div className="btn-filters-block">
              <button id="filters-btn" className="btn-filters">
                Фильтр
              </button>
            </div>
            <section className="content main-pedals__content">
              <aside className="filters content__filters">
                <h2 className="filters__title">Фильтр</h2>
                <CategoryFilter
                  categories={categoryData.data.categories.data}
                  onFilterChange={handleFilterChange}
                  filteredCategories={filteredCategories}
                />
              </aside>

              {/* product list */}
              <section className="goods content__goods">
                {filteredPedals.map((pedal: any, index: number) => (
                  <>
                    <a key={index} href="/product" className="goods__item-link">
                      <div className="goods__item">
                        <img
                          src={pedal.attributes.image.data.attributes.url}
                          alt=""
                          className="goods__img"
                        />
                        <h3 className="goods__item-title">{}</h3>
                        <p className="goods__item-text">
                          {pedal.attributes.name}
                        </p>
                        <p className="goods__item-price">
                          {pedal.attributes.price} ₽
                        </p>
                        <p className="goods__item-presence goods__item-presence_on">
                          {pedal.attributes.description}
                        </p>
                      </div>
                    </a>
                  </>
                ))}
              </section>
            </section>
          </div>
        </main>
        <Footer />
      </div>
      <div className="bg-white text-black">
        <CategoryFilter
          categories={categoryData.data.categories.data}
          onFilterChange={handleFilterChange}
          filteredCategories={filteredCategories}
        />
        <h2>Filtered Pedals</h2>
        <ul>
          {filteredPedals.map((pedal: any) => (
            <li key={pedal.attributes.name}>{pedal.attributes.name}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

const CategoryFilter = ({
  categories,
  onFilterChange,
  filteredCategories,
}: {
  categories: any;
  onFilterChange: any;
  filteredCategories: any;
}) => {
  const [selectedCategories, setSelectedCategories] = useState<any>([]);

  const handleCategoryChange = (category: any) => {
    const updatedCategories = selectedCategories.includes(category)
      ? selectedCategories.filter((c: any) => c !== category)
      : [...selectedCategories, category];

    setSelectedCategories(updatedCategories);
    onFilterChange(updatedCategories);
  };

  const groupedCategories = categories.reduce((acc: any, category: any) => {
    const type = category.attributes.type || "Other";
    acc[type] = acc[type] || [];
    acc[type].push(category);
    return acc;
  }, {});

  return (
    <div>
      {Object.entries(groupedCategories).map(([type, typeCategories]: any) => (
        <div key={type} className="filters__item">
          <h3 className="filters__item-title">
            {type}
            <svg
              className="filters__item-icon"
              width="21"
              height="3"
              viewBox="0 0 21 3"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="0.916992"
                y1="1.5"
                x2="20.917"
                y2="1.5"
                stroke="black"
                stroke-width="2"
              />
            </svg>
          </h3>
          <form action="" className="filters__form">
            {typeCategories.map((category: any) => (
              <label className="filters__item-btn">
                <input
                  type="checkbox"
                  id={category.attributes.value}
                  checked={selectedCategories.includes(
                    category.attributes.value
                  )}
                  onChange={() =>
                    handleCategoryChange(category.attributes.value)
                  }
                />
                <span
                  className={`text-2xl flex gap-5 ${
                    filteredCategories.includes(category.attributes.value)
                      ? "font-bold"
                      : ""
                  }`}
                >
                  {category.attributes.value}
                  <span className="">115</span>
                </span>
              </label>
            ))}
          </form>
        </div>
      ))}
    </div>
  );
};
