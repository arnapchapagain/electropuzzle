"use client";

import Script from "next/script";
import Navbar from "../components/Navbar/Navbar";
import { deleteFromBasket, getBasket } from "@/vendor/basket/basket";
import { getProductBySlug } from "@/data/pedals";
import { useEffect, useState } from "react";

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
                <section className="basket-goods basket-content__goods">
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
                  <h3 className="basket-content__title">
                    Информация о доставке
                  </h3>

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
                      Детали оплаты
                    </legend>
                    <div className="custom-radio">
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
                    </div>
                  </fieldset>
                </form>
                <div className="basket-pay__info">
                  <p className="basket-pay__text">Цена товаров</p>
                  <p className="basket-pay__price">11000.00 ₽</p>
                </div>
                <div className="basket-pay__info">
                  <p className="basket-pay__text">Стоимость доставки</p>
                  <p className="basket-pay__price">500.00 ₽</p>
                </div>
                <div className="basket-pay__info">
                  <p className="basket-pay__text">Скидка по купону</p>
                  <p className="basket-pay__price">-1500.00 ₽</p>
                </div>
                <div className="basket-pay__info">
                  <p className="basket-pay__text">Итого</p>
                  <p className="basket-pay__price">10000.00 ₽</p>
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

        <footer className="footer">
          <div className="container footer__container">
            <div className="footer__item footer__item_logo">
              <a href="index.html" className="logo footer__logo">
                <img
                  src="images/logo.svg"
                  alt="ElectroPuzzle"
                  className="logo__img footer__logo-img"
                />
                <span className="logo__text footer__logo-text">
                  ElectroPuzzle
                </span>
              </a>
              <form id="footer-form" action="" className="footer__form">
                <div className="footer__email">
                  <input
                    name="email"
                    id="footer-input"
                    type="email"
                    className="footer__input"
                    placeholder="john@example.com"
                    required
                  />
                  <button id="footer-btn" className="footer__btn" type="submit">
                    <img
                      className="footer__btn-img"
                      src="images/email-arrow.svg"
                      alt=""
                    />
                  </button>
                </div>
              </form>
            </div>
            <div className="footer__item footer__item_pedals">
              <h2 className="footer__item-title">ПЕДАЛИ</h2>
              <ul className="footer__list footer__list_pedals">
                <li className="footer__list-item">
                  <a href="#" className="footer__list-link">
                    Дилеи
                  </a>
                </li>
                <li className="footer__list-item">
                  <a href="#" className="footer__list-link">
                    Бустеры
                  </a>
                </li>
                <li className="footer__list-item">
                  <a href="#" className="footer__list-link">
                    Овердрайвы
                  </a>
                </li>
                <li className="footer__list-item">
                  <a href="#" className="footer__list-link">
                    Дисторшены
                  </a>
                </li>
                <li className="footer__list-item">
                  <a href="#" className="footer__list-link">
                    Модуляция
                  </a>
                </li>
                <li className="footer__list-item">
                  <a href="#" className="footer__list-link">
                    Фузы
                  </a>
                </li>
                <li className="footer__list-item">
                  <a href="#" className="footer__list-link">
                    Компрессоры
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer__item">
              <h2 className="footer__item-title">СТРАНИЦЫ</h2>
              <ul className="footer__list footer__list_pages">
                <li className="footer__list-item">
                  <a href="#" className="footer__list-link">
                    Главная
                  </a>
                </li>
                <li className="footer__list-item">
                  <a href="#" className="footer__list-link">
                    Педали
                  </a>
                </li>
                <li className="footer__list-item">
                  <a href="#" className="footer__list-link">
                    Контакты
                  </a>
                </li>
                <li className="footer__list-item">
                  <a href="#" className="footer__list-link">
                    Новости
                  </a>
                </li>
              </ul>
            </div>

            <div className="footer__item footer__item_img-block">
              <img
                width="264"
                height="264"
                className="footer__item-img"
                src="images/footer-pedals-img.webp"
                alt=""
              />
            </div>
          </div>
          <div className="footer__text">
            © 2023 ElectroPuzzle. Design by Kiselev Roman.
          </div>
        </footer>
      </div>

      <div className="overlay" id="overlay"></div>

      <div className="popup-container" id="popup1">
        <div className="blockcentr">
          <h3 className="popup-pay__title">Оформление заказа</h3>
          <form action="" className="popup-pay__form">
            <fieldset>
              <label htmlFor="popup-pay-fio">
                <span>ФИО*</span>
                <input
                  name="fio"
                  required
                  id="inputFio"
                  type="text"
                  className="popup-pay__input"
                />
              </label>
              <label htmlFor="popup-pay-tel">
                <span>Телефон*</span>
                <input
                  name="tel"
                  required
                  id="inputTel"
                  type="tel"
                  className="popup-pay__input"
                />
              </label>
            </fieldset>
            <button
              id="submit1"
              type="submit"
              className="popup-pay__btn openokno openokno2 btn-green"
            >
              Продолжить
            </button>
          </form>
        </div>
      </div>

      <div className="popup-container" id="popup2">
        <div className="blockcentr2">
          <div className="popup-pay__img-block">
            <img
              src="images/popup-pay-icon.webp"
              alt=""
              className="popup-pay__img"
            />
          </div>

          <h3 className="popup-pay__title">Заказ принят</h3>
          <button
            id="closePopup2"
            type="button"
            className="popup-pay__btn openokno2 btn-green"
          >
            Продолжить
          </button>
        </div>
      </div>
    </>
  );
}

function EachBasketProduct({
  productSlug,
  quantity,
  reloadBasket,
}: {
  productSlug: string;
  quantity: number;
  reloadBasket: any;
}) {
  const product = getProductBySlug(productSlug);

  return (
    <div>
      {/* <h3 className="basket-content__title"></h3> */}
      <div id="basketItem1" className="basket-goods__item basket-item">
        <img
          src={
            getProductBySlug(productSlug)?.attributes.image.data.attributes.url
          }
          alt=""
          className="basket-goods__img"
        />
        <div className="basket-goods__name">
          <h3 className="basket-goods__item-title">
            {product?.attributes.name}
          </h3>
          <p className="basket-goods__ver">Вариант: Стандарт</p>
        </div>
        <div className="basket-goods__info">
          <p className="basket-goods__price">{product?.attributes.price} ₽</p>
          <p className="basket-goods__sum">Количество: {quantity} шт</p>
        </div>
        <button id="basket-goods-btn" className="basket-goods__btn">
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
