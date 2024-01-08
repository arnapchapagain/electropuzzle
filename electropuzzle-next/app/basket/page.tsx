"use client";

import Script from "next/script";

export default function BasketPage() {
  return (
    <>
      <header className="header header-page header-basket">
        <div className="container header__container header-page__container header-basket__container">
          <a href="index.html" className="logo header__logo">
            <img
              src="images/logo.svg"
              alt="ElectroPuzzle"
              className="logo__img header__logo-img"
            />
            <span className="logo__text header__logo-text">ElectroPuzzle</span>
          </a>
          <nav className="header__nav">
            <ul className="nav__list">
              <li className="nav__item">
                <a href="index.html" className="nav__item-link">
                  Главная
                </a>
              </li>
              <li className="nav__item">
                <a href="pedals.html" className="nav__item-link">
                  Педали
                </a>
              </li>
              <li className="nav__item">
                <a href="contacts.html" className="nav__item-link">
                  Контакты
                </a>
              </li>
              <li className="nav__item">
                <a href="basket.html" className="nav__item-link">
                  <img
                    src="images/basket-icon.svg"
                    alt=""
                    className="nav__item-icon"
                  />
                </a>
              </li>
            </ul>
          </nav>
          <button tabIndex={-1} id="burger" className="header__menu">
            <svg
              width="59"
              height="59"
              viewBox="0 0 59 59"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <rect width="59" height="59" fill="url(#pattern0)" />
              <defs>
                <pattern
                  id="pattern0"
                  patternContentUnits="objectBoundingBox"
                  width="1"
                  height="1"
                >
                  <use
                    xlinkHref="#image0_159_14"
                    transform="scale(0.00195312)"
                  />
                </pattern>
                <image
                  id="image0_159_14"
                  width="512"
                  height="512"
                  xlinkHref="data:image/png;base64,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"
                />
              </defs>
            </svg>
          </button>
        </div>
      </header>

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

      <div className="wrapper">
        <main className="main main-basket">
          <div className="container basket-container">
            <div className="basket-content">
              <div className="basket-content__block">
                <section className="basket-goods basket-content__goods">
                  <h3 className="basket-content__title">Корзина</h3>
                  <div
                    id="basketItem1"
                    className="basket-goods__item basket-item"
                  >
                    <img
                      src="images/basket-goods.webp"
                      alt=""
                      className="basket-goods__img"
                    />
                    <div className="basket-goods__name">
                      <h3 className="basket-goods__item-title">
                        Morning coffee
                      </h3>
                      <p className="basket-goods__ver">Вариант: Стандарт</p>
                    </div>
                    <div className="basket-goods__info">
                      <p className="basket-goods__price">11000.00 ₽</p>
                      <p className="basket-goods__sum">Количество: 1 шт</p>
                    </div>
                    <button
                      id="basket-goods-btn"
                      className="basket-goods__btn"
                      onClick={() => toggleBlock("basketItem1")}
                    >
                      <img
                        src="images/trash-icon.svg"
                        alt=""
                        className="basket-goods__btn-img"
                      />
                    </button>
                  </div>
                  <div id="empty" className="empty">
                    Пусто
                  </div>
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
