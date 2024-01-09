import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

import BACKEND_URI from "../data.js"

console.log(BACKEND_URI)

const productsList = {
  "data": {
    "pedals": {
      "data": [
        {
          "attributes": {
            "name": "Pedal",
            "category": "Overdrive",
            "based_on": "gg",
            "price": 55,
            "stock": 1,
            "description": "ff",
            "image": {
              "data": {
                "attributes": {
                  "name": "electro-puzzle-logo.png",
                  "url": "/uploads/electro_puzzle_logo_97baf571cd.png",
                  "alternativeText": null
                }
              }
            },
            "additional_imgages": {
              "data": []
            },
            "peculiarity": null,
            "management": null,
            "characteristics": null,
            "promo_codes": {
              "data": []
            }
          }
        },
        {
          "attributes": {
            "name": "gg",
            "category": "Overdrive",
            "based_on": "gg",
            "price": 500,
            "stock": 30,
            "description": "gg",
            "image": {
              "data": {
                "attributes": {
                  "name": "electro-puzzle-logo.png",
                  "url": "/uploads/electro_puzzle_logo_97baf571cd.png",
                  "alternativeText": null
                }
              }
            },
            "additional_imgages": {
              "data": []
            },
            "peculiarity": null,
            "management": null,
            "characteristics": null,
            "promo_codes": {
              "data": []
            }
          }
        }
      ]
    }
  }
};

export default function Pedals() {
    return (
      <>
        <Navbar />

        <section
        className="hero-pedals"
        style={{
            background: "url('images/hero-pedals.webp') no-repeat center center fixed",
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
                <section className="content main-pedals__content" style={{display: "flex", flexWrap: "wrap"}}>
                    <aside className="filters content__filters" style={{flex: 1}}>
                      <h2 className="filters__title">Фильтр</h2>
                      <div className="filters__item">
                          <h3 className="filters__item-title">
                          Категории<svg
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
                          <label className="filters__item-btn">
                              <input type="checkbox" checked />
                              <span className="filters__item-text"
                              >Все<span className="filters__item-num">115</span></span>
                          </label>

                          <label className="filters__item-btn">
                              <input type="checkbox" />
                              <span className="filters__item-text"
                              >Овердрайвы<span className="filters__item-num">15</span></span>
                          </label>

                          <label className="filters__item-btn">
                              <input type="checkbox" />
                              <span className="filters__item-text"
                              >Дисторшены<span className="filters__item-num">11</span></span>
                          </label>

                          <label className="filters__item-btn">
                              <input type="checkbox" />
                              <span className="filters__item-text"
                              >Фузы<span className="filters__item-num">25</span></span>
                          </label>

                          <label className="filters__item-btn">
                              <input type="checkbox" />
                              <span className="filters__item-text"
                              >Компрессоры<span className="filters__item-num">2</span></span>
                          </label>

                          <label className="filters__item-btn">
                              <input type="checkbox" />
                              <span className="filters__item-text"
                              >Модуляция и Дилеи<span className="filters__item-num">3</span></span>
                          </label>

                          <label className="filters__item-btn">
                              <input type="checkbox" />
                              <span className="filters__item-text">Фильтрация и EQ<span className="filters__item-num">2</span></span>
                          </label>

                          <label className="filters__item-btn">
                              <input type="checkbox" />
                              <span className="filters__item-text">Бустеры<span className="filters__item-num">5</span></span>
                          </label>
                          </form>
                      </div>
                      <div className="filters__item">
                          <h3 className="filters__item-title">
                          Серия<svg
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
                          <label className="filters__item-btn">
                              <input type="checkbox" />
                              <span className="filters__item-text"
                              >Black series<span className="filters__item-num">115</span></span>
                          </label>

                          <label className="filters__item-btn">
                              <input type="checkbox" />
                              <span className="filters__item-text"
                              >Gold series<span className="filters__item-num">0</span></span>
                          </label>
                          </form>
                      </div>
                    </aside>

                    {/* product list */}
                    <section className="goods content__goods" style={{flex: 2}}>
                        {
                            (productsList.data.pedals.data.length > 0) ? 
                            (
                              productsList.data.pedals.data.map((data) => (
                                <a href="/product" className="goods__item-link">
                                    <div className="goods__item">
                                        <img src={`${BACKEND_URI}${data.attributes.image.data.attributes.url}`} alt="" className="goods__img" />
                                        <h3 className="goods__item-title">{}</h3>
                                        <p className="goods__item-text">Основан на: Dunlop Fuzz Face</p>
                                        <p className="goods__item-price">5500.00 ₽</p>
                                        <p className="goods__item-presence goods__item-presence_on">
                                            В наличии
                                        </p>
                                    </div>
                                </a>
                              ))
                            ) 
                            : (<></>)
                        }
                    </section>
                </section>
                </div>
            </main>  
            <Footer />
        </div>
      </>
    );
  }