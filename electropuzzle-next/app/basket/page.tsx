"use client";

import Script from "next/script";
import Navbar from "../components/Navbar/Navbar";
import { deleteFromBasket, getBasket } from "@/vendor/basket/basket";
import { useEffect, useState } from "react";
import { getProductBySlug } from "../api/pedals/getPedalBySlug";
import Footer from "../components/Footer/Footer";

export default function BasketPage() {
  const [basket, setBasket] = useState<any>(getBasket());

  function reloadBasket() {
    setBasket(getBasket());
  }

  return (
    <>
      <Navbar />

      <div className="wrapper">
        <main className="main main-basket">
          <div className="container basket-container">
            <div className="basket-content">
              <div className="basket-content__block">
                <section className="basket-goods flex flex-col gap-5 basket-content__goods">
                  {basket.map(
                    (
                      product: { productSlug: string; quantity: number },
                      index: number
                    ) => (
                      <div key={index}>
                        <EachBasketProduct
                          reloadBasket={reloadBasket}
                          quantity={product.quantity}
                          productSlug={product.productSlug}
                        />
                      </div>
                    )
                  )}
                </section>
                <section className="basket-info basket-content__info">
                  <h3 className="basket-content__title"></h3>

                  <form id="form-info" action="" className="basket-info__form">
                    <fieldset className="basket-info__main">
                      <label
                        htmlFor="fio"
                        className="basket-info__fio basket-info__title-input"
                      >
                        <span>ФИО*</span>
                        <input
                          name="fio"
                          id="fio"
                          type="text"
                          className="basket-info__input basket-info__fio-input"
                          required
                        />
                      </label>
                      <label
                        htmlFor="phone"
                        className="basket-info__phone basket-info__title-input"
                      >
                        <span>Телефон*</span>
                        <input
                          name="phone"
                          id="phone"
                          type="tel"
                          className="basket-info__input basket-info__phone-input"
                          required
                        />
                      </label>
                      <label
                        htmlFor="email"
                        className="basket-info__email basket-info__title-input"
                      >
                        <span>Email</span>
                        <input
                          name="email"
                          id="email"
                          type="email"
                          className="basket-info__input basket-info__email-input"
                        />
                      </label>
                    </fieldset>
                    <fieldset className="basket-info__extra">
                      <div className="accordion">
                        <div className="accordion-item">
                          <div className="accordion-header">
                            <legend className="basket-info__extra-title">
                              <img
                                className="basket-info__extra-title-img"
                                style={{ marginRight: "5px" }}
                                src="images/arrow-form.svg"
                                alt=""
                              />
                              Заполнить адрес
                            </legend>
                          </div>
                          <div className="accordion-content">
                            <label
                              htmlFor="address"
                              className="basket-info__address basket-info__title-input"
                            >
                              <span>Адрес</span>
                              <input
                                name="address"
                                id="address"
                                type="text"
                                className="basket-info__input basket-info__address-input"
                              />
                            </label>
                            <label
                              htmlFor="index"
                              className="basket-info__index basket-info__title-input"
                            >
                              <span>Индекс</span>
                              <input
                                name="index"
                                id="index"
                                type="text"
                                className="basket-info__input basket-info__index-input"
                              />
                            </label>
                            <label
                              htmlFor="apartment"
                              className="basket-info__apartment basket-info__title-input"
                            >
                              <span>Квартира</span>
                              <input
                                name="apartment"
                                id="apartment"
                                type="text"
                                className="basket-info__input basket-info__apartment-input"
                              />
                            </label>
                            <label
                              htmlFor="floor"
                              className="basket-info__floor basket-info__title-input"
                            >
                              <span>Этаж</span>
                              <input
                                name="floor"
                                id="floor"
                                type="text"
                                className="basket-info__input basket-info__floor-input"
                              />
                            </label>
                            <label
                              htmlFor="entrance"
                              className="basket-info__entrance basket-info__title-input"
                            >
                              <span>Подъезд</span>
                              <input
                                name="entrance"
                                id="entrance"
                                type="text"
                                className="basket-info__input basket-info__entrance-input"
                              />
                            </label>
                            <label
                              htmlFor="comm"
                              className="basket-info__comm basket-info__title-input"
                            >
                              <span>Комментаний</span>
                              <input
                                name="comm"
                                id="comm"
                                type="text"
                                className="basket-info__input basket-info__comm-input"
                              />
                            </label>
                          </div>
                        </div>
                      </div>
                    </fieldset>
                  </form>
                </section>
              </div>
              <Script>
                {`const accordionItems =
                document.querySelectorAll(".accordion-item");

              accordionItems.forEach((item) => {
                const header = item.querySelector(".accordion-header");
                const content = item.querySelector(".accordion-content");

                header.addEventListener("click", () => {
                  if (content.style.maxHeight) {
                    content.style.maxHeight = null;
                  } else {
                    content.style.maxHeight = content.scrollHeight + "px";
                  }
                  document
                    .querySelector(".basket-info__extra-title-img")
                    .classList.toggle("basket-info__extra-title_active");
                });
              })`}
              </Script>
              <section className="basket-pay basket-content__pay">
                <h3 className="basket-content__title basket-content__title_pay">
                  Оплата заказа
                </h3>
                <form action="" className="basket-pay__promo">
                  <div className="basket-pay__input-block">
                    <input
                      name="promo"
                      type="text"
                      placeholder="Ввести промкод"
                      className="basket-pay__input-promo"
                    />
                    <button
                      className="basket-pay__btn-promo btn-green"
                      type="submit"
                    >
                      Применить
                    </button>
                  </div>
                </form>
                <form id="form-pay" action="" className="basket-pay__form">
                  <fieldset>
                    <legend className="basket-pay__form-title">
                      Отгрузочные реквизиты
                    </legend>
                    <select className="py-4 px-4 pe-9 block w-full border-gray-200 rounded-lg text-md focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none ">
                      <option selected>Select shipping address</option>
                      <option>Nepal</option>
                      <option>Kathmandu</option>
                      <option>Russia</option>
                    </select>
                    {/* <div className="custom-radio">
                      <label>
                        <input checked type="radio" name="radio" />
                        <div className="custom-radio__label">
                          Заказать через Авито
                        </div>
                      </label>
                    </div>
                    <div className="clear"></div>

                    <div className="custom-radio">
                      <label>
                        <input type="radio" name="radio" />
                        <div className="custom-radio__label">
                          Заказать на сайте
                        </div>
                      </label>
                    </div> */}
                  </fieldset>
                </form>
                <div>
                  {basket.map(
                    (
                      product: { productSlug: string; quantity: number },
                      index: number
                    ) => (
                      <div key={index}>
                        <BasketProductPrices
                          quantity={product.quantity}
                          productSlug={product.productSlug}
                        />
                      </div>
                    )
                  )}

                  {/* Shipping Cost */}
                  <div className="basket-pay__info">
                    <p className="basket-pay__text">Shipping Cost</p>
                    <p className="basket-pay__price">250 ₽</p>
                  </div>
                </div>

                <button
                  id="showPopup"
                  className="btn-green basket-pay__btn-pay"
                  type="submit"
                >
                  Оформить заказ
                </button>
              </section>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}

type ProductType = {
  attributes: {
    image: {
      data: {
        attributes: {
          url: string;
        };
      };
    };
    name: string;
    price: number;
    description: string;
  };
};

function EachBasketProduct({
  productSlug,
  quantity,
  reloadBasket,
}: {
  productSlug: string;
  quantity: number;
  reloadBasket: any;
}) {
  const [product, setProduct] = useState<ProductType | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const fetchedProduct = await getProductBySlug(productSlug);
      setProduct(fetchedProduct);
    };

    fetchProduct();
  }, [productSlug]);

  if (!product) {
    return null;
  }

  return (
    <div>
      <div
        id="basketItem1"
        className="basket-goods__item basket-item flex gap-5"
      >
        <img
          src={
            "http://localhost:1337" +
            product?.attributes.image.data.attributes.url
          }
          alt=""
          className="h-40 aspect-square w-40"
        />
        <div className="w-[100%]">
          <h3 className="font-bold text-3xl">{product?.attributes.name}</h3>
          <p className="text-xl line-clamp-3">
            {product.attributes.description}
          </p>
        </div>
        <div className="basket-goods__info">
          <p className="text-xl">{product?.attributes.price * quantity} ₽</p>
          <p className="text-xl">Количество: {quantity} шт</p>
        </div>
        <button
          id="basket-goods-btn"
          className="basket-goods__btn hover:scale-[105%]"
        >
          <img
            onClick={() => {
              deleteFromBasket({ productSlug: productSlug, quantity: 1 });
              reloadBasket();
            }}
            src="images/trash-icon.svg"
            alt=""
            className="basket-goods__btn-img"
          />
        </button>
      </div>
      <div id="empty" className="empty">
        Пусто
      </div>
    </div>
  );
}

function BasketProductPrices({ productSlug, quantity }: { productSlug: string; quantity: number }) {
  const [product, setProduct] = useState<ProductType | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const fetchedProduct = await getProductBySlug(productSlug);
      setProduct(fetchedProduct);
    };

    fetchProduct();
  }, [productSlug]);

  if (!product) {
    return null;
  }

  return (
    <div className="basket-pay__info">
      <p className="basket-pay__text">{product.attributes.name}</p>
      <p className="basket-pay__price">{product.attributes.price * quantity } ₽</p>
    </div>
  );
}
