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
            "name": "Modi Ji",
            "based_on": "Indian Government",
            "price": 69420,
            "stock": 1,
            "description": "# Modi Ji \n## The Prime Minister of India\n\nAayega toh modi hi 🔥🔥\nDekh kya raha hai aaise 😡? Modi ji mere bhagwan hai. 😍😘🥰\nOni cha. Use code **bhen-k-lodey** for 69% off 😏🤤🥵🥵",
            "image": {
              "data": {
                "attributes": {
                  "name": "POV: Modi Ji",
                  "url": "/uploads/3xov_Y1edu_Dqa_Dbr_P_Kq2l_Bt_QF_Xd_Raa34xd_S7_GX_Wto_JHE_e9183013cd.webp",
                  "alternativeText": "Only Modi Ji. No Alt Text"
                }
              }
            },
            "additional_images": {
              "data": [
                {
                  "attributes": {
                    "name": "images.jpeg",
                    "url": "/uploads/images_6251d64243.jpeg",
                    "alternativeText": "Rajesh dai horni looks"
                  }
                }
              ]
            },
            "peculiarity": "Modi ji is more pecular than the pecular word itself. Be careful what you say about him. 2024 mi aayega toh modi hi ",
            "management": {
              "first_name": "Modi",
              "last_name": "Ji"
            },
            "characteristics": {
              "chest": "Very big. 46+ inch",
              "bicep": "Arnold ke papa"
            },
            "slug": "modi-ji",
            "videos": {
              "data": []
            },
            "categories": {
              "data": [
                {
                  "attributes": {
                    "type": "Series",
                    "value": "Black series",
                    "description": null
                  }
                },
                {
                  "attributes": {
                    "type": "Main",
                    "value": "Overdrive",
                    "description": null
                  }
                }
              ]
            }
          }
        },
        {
          "attributes": {
            "name": "Rajesh Dai",
            "based_on": "rajesh dai",
            "price": 1000000,
            "stock": 10000000,
            "description": "# Rajesh Dai \n## K sochya bhai, yo ho rajesh dai 🔥🔥\n\nDharahara bhaneko k ho taha xa? **Rajesh dai ko L**\nRajesh dai jasto omnipotent manxe bheteko xas ?\n- Yeti barsa bhayo, still he is our dai 🥰🥰\n\nRajesh dai lai ma yeti maya garchu\n\n```c\nwhile (true){\n    printf(\"I love you rajesh dai x%d\", ++i);\n}\n```\n",
            "image": {
              "data": {
                "attributes": {
                  "name": "images.jpeg",
                  "url": "/uploads/images_70ccd31548.jpeg",
                  "alternativeText": "Rajesh dai kungfu panda"
                }
              }
            },
            "additional_images": {
              "data": [
                {
                  "attributes": {
                    "name": "images.jpeg",
                    "url": "/uploads/images_c85d3d9466.jpeg",
                    "alternativeText": "Rajesh dai never cuts"
                  }
                },
                {
                  "attributes": {
                    "name": "images.jpeg",
                    "url": "/uploads/images_8d238b2351.jpeg",
                    "alternativeText": "Breaking news"
                  }
                },
                {
                  "attributes": {
                    "name": "images.jpeg",
                    "url": "/uploads/images_674b14c816.jpeg",
                    "alternativeText": "Rajesh dai's emails"
                  }
                },
                {
                  "attributes": {
                    "name": "images.jpeg",
                    "url": "/uploads/images_6251d64243.jpeg",
                    "alternativeText": "Rajesh dai horni looks"
                  }
                },
                {
                  "attributes": {
                    "name": "images.jpeg",
                    "url": "/uploads/images_398b4db655.jpeg",
                    "alternativeText": "Rajesh dai power"
                  }
                }
              ]
            },
            "peculiarity": "Rajesh dia is everywhere. I see him in mobile, computer, google, youtube, my bed, toilet, my eyes. uff",
            "management": {
              "manager": "rajesh dai doesn't need manager. he manages nepal",
              "residence": "rajesh dai lives everywhere"
            },
            "characteristics": {
              "feature": "features lekhdai gayo bhaney ta computer ko memory sakki jala."
            },
            "slug": "rajesh-dai",
            "videos": {
              "data": []
            },
            "categories": {
              "data": [
                {
                  "attributes": {
                    "type": "Series",
                    "value": "Gold series",
                    "description": null
                  }
                },
                {
                  "attributes": {
                    "type": "Main",
                    "value": "Boosters",
                    "description": null
                  }
                }
              ]
            }
          }
        }
      ]
    }
  }
}

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
                                <a href={`/product/${data.attributes.slug}`} className="goods__item-link">
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