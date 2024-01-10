"use client";

import { useEffect, useState } from "react";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

import BACKEND_URI from "../data.js";
import { getAllPedals } from "./api/getAllPedals";
import { getAllCategories } from "./api/getAllCategories";

export default function Pedals() {
  const [filteredCategories, setFilteredCategories] = useState<any>([]);
  const [pedalsProductList, setPedalsProductList] = useState<any>([]);
  const [categoryData, setCategoryData] = useState<any>([]);

  useEffect(() => {
    reloadPedals();
    reloadCategories();
  }, []);

  async function reloadPedals() {
    const pedals = await getAllPedals();
    setPedalsProductList(pedals);
  }

  async function reloadCategories() {
    const categories = await getAllCategories();
    setCategoryData(categories);
  }

  const handleFilterChange = (selectedCategories: any) => {
    setFilteredCategories(selectedCategories);
  };
  const filteredPedals = pedalsProductList?.data?.pedals?.data?.filter(
    (pedal: any) =>
      filteredCategories.every((category: any) =>
        pedal?.attributes?.categories?.data?.some(
          (pedalCategory: any) => pedalCategory.attributes.value === category
        )
      )
  );
  return (
    <>
      <Navbar />

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

      <div className="wrapper">
        <main className="main main-pedals">
          <div className="container pedals-container">
            <section
              className="content main-pedals__content"
              style={{ display: "flex", flexWrap: "wrap" }}
            >
              <aside className="filters content__filters" style={{ flex: 1 }}>
                <CategoryFilter
                  categories={categoryData?.data?.categories?.data}
                  onFilterChange={handleFilterChange}
                  filteredCategories={filteredCategories}
                />
              </aside>

              {/* product list */}
              <section className="goods content__goods" style={{ flex: 2 }}>
                {filteredPedals?.map((data: any) => (
                  <a
                    href={`/product/${data.attributes.slug}`}
                    className="goods__item-link"
                  >
                    <div className="goods__item">
                      <img
                        src={`${BACKEND_URI}${data.attributes.image.data.attributes.url}`}
                        alt=""
                        className="goods__img"
                      />
                      <h3 className="goods__item-title">{}</h3>
                      <p className="goods__item-text">
                        Основан на: Dunlop Fuzz Face
                      </p>
                      <p className="goods__item-price">5500.00 ₽</p>
                      <p className="goods__item-presence goods__item-presence_on">
                        В наличии
                      </p>
                    </div>
                  </a>
                ))}
              </section>
            </section>
          </div>
        </main>
        <Footer />
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

  const groupedCategories: [] = categories?.reduce((acc: any, category: any) => {
    const type = category.attributes.type || "Other";
    acc[type] = acc[type] || [];
    acc[type].push(category);
    return acc;
  }, {});

  return (
    <div>
      {groupedCategories && Object.entries(groupedCategories)?.map(([type, typeCategories]: any) => (
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
