"use client";

import Video from "next-video";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import BACKEND_URI from "../../data.js";
import fetchProductData from "./fetchProductData.js";

import Carousel from "reactjs-nextjs-carousel";
import { useEffect, useState } from "react";
import { addToBasket } from "@/vendor/basket/basket";
import Link from "next/link";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";

export default function Page({ params }: { params: any }) {
  const [orderQuantity, setOrderQuantity] = useState(1);

  const [pedalData, setPedalData] = useState<any>();
  const [isError, setError] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetchProductData(params, setPedalData, setLoading, setError);
  }, []);

  // useEffect(() => {
  //   console.log(pedalData);
  // }, [pedalData]);

  let mainImage;
  let additionalImages;
  let slides: any = [];

  if (pedalData) {
    mainImage = `${BACKEND_URI}${pedalData?.data?.pedals?.data?.[0]?.attributes?.image?.data?.attributes?.url}`;
    const additionalImagesData =
      pedalData?.data?.pedals?.data?.[0]?.attributes?.additional_images?.data;

    additionalImages = Array.isArray(additionalImagesData)
      ? additionalImagesData.map(
          (image) => `${BACKEND_URI}${image?.attributes?.url}`
        )
      : [];
    slides = [mainImage, ...additionalImages];
  }

  if (isLoading) return <>Loading...</>;
  if (isError) return <>Something went wrong...</>;
  if (!pedalData) return <>No data</>;

  const mainProductData = pedalData?.data?.pedals?.data?.[0]?.attributes

  return (
    <>
      <Navbar />

      <nav id="burger-menu" className="burger-nav">
        <div className="burger-nav__block">
          <a tabIndex={-1} href="/" className="logo burger-nav__logo">
            <img
              src="/images/logo-black.svg"
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
              src="/images/cancel.svg"
              alt=""
              className="burger-nav__closes-icon"
            />
          </button>
          <ul className="burger-nav__list">
            <li className="burger-nav__item">
              <a
                tabIndex={-1}
                href="/"
                className="burger-nav__item-link"
              >
                Главная
              </a>
            </li>
            <li className="burger-nav__item">
              <a
                tabIndex={-1}
                href="/pedals"
                className="burger-nav__item-link"
              >
                Педали
              </a>
            </li>
            <li className="burger-nav__item">
              <a
                tabIndex={-1}
                href="/contacts"
                className="burger-nav__item-link"
              >
                Контакты
              </a>
            </li>
            <li className="burger-nav__item">
              <a
                tabIndex={-1}
                href="/basket"
                className="burger-nav__item-link"
              >
                Корзина
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <div className="wrapper">
        <main className="main main-product">
          <div className="container product-container">
            <div className="product-content">
              <section className="product-item product-content__item">
                <h3 className="product-content__main-title">
                  {mainProductData.name}
                </h3>
                <p className="product-content__main-subtitle">
                  Основан на: {mainProductData.based_on}
                </p>

                {/* products image carousel */}
                <div style={{ flex: 2 }}>
                  <div className="w-full">
                    <Carousel
                      slides={slides}
                      thumbWidth={"280rem"}
                      autoSlide={false}
                      effect="slide"
                      carouselWidth={"80rem"}
                    />
                  </div>
                </div>

                <div className="product-item__info" style={{ flex: 3 }}>
                  <h3 className="product-content__title product-item__title">
                    {mainProductData.name}
                  </h3>
                  <p className="product-item__subtitle">
                    Основан на: {mainProductData.based_on}
                  </p>
                  <p className="product-item__price">{mainProductData.price * orderQuantity} ₽</p>
                  <div className="product-item__sum">
                    <form
                      id="form-sum"
                      className="product-item__form"
                      action=""
                    >
                      <div className="counter">
                        {/* <button
                          type="button"
                          onClick={() => {
                            if (orderQuantity - 1 > 0) {
                              setOrderQuantity((prev) => prev - 1);
                            }
                          }}
                        >
                          -
                        </button> */}

                        <input
                          type="text"
                          id="count"
                          value={orderQuantity}
                          name="sum"
                        />

                        {/* <button
                          type="button"
                          onClick={() => {
                            if (orderQuantity + 1 <= mainProductData.stock) {
                              setOrderQuantity((prev) => prev + 1);
                            }
                          }}
                        >
                          +
                        </button> */}
                      </div>
                    </form>

                    <p className="product-item__text">
                      Осталось {mainProductData.stock} штуки
                    </p>
                  </div>
                  <div className="product-item__btn-block">
                    <a
                      href={mainProductData.avito_link}
                      target="_blank" 
                      rel="noopener noreferrer"
                      style={{color: "white !important"}}
                      className="w-50 py-6 me-6 rounded-full px-12 mb-4 bg-green-900 text-white"
                    >
                      Заказать с Авито
                    </a>
                    <button
                      className="product-item__btn-basket"
                      onClick={async () => {
                        await addToBasket({
                          productSlug: `${params.slug}`,
                          quantity: orderQuantity,
                        });
                      }}
                    >
                      Добавить в корзину
                    </button>
                  </div>
                  <p className="product-item__text">
                    {mainProductData.description}
                  </p>
                </div>
              </section>
              <h3
                className="product-content__title product-description__title"
                style={{ marginBottom: "32px" }}
              >
                Описание
              </h3>
              <section className="product-description">
                <div className="product-description__char">
                  <table className="product-description__table">
                    <caption className="product-description__info-title">
                      Характеристики
                    </caption>
                    <tbody>
                      {Object.keys(mainProductData.characteristics).map(
                        (key) => (
                          <tr key={key}>
                            <td>{key}</td>
                            <td>{mainProductData.characteristics[key]}</td>
                          </tr>
                        )
                      )}
                    </tbody>
                  </table>
                </div>
                <div className="product-description__special">
                  <h3 className="product-description__info-title">
                    Особенности
                  </h3>
                  <p className="product-description__text">
                    {mainProductData.peculiarity}
                  </p>
                </div>
              </section>
              <h3
                className="product-content__title"
                style={{ marginBottom: "15px" }}
              >
                Видео
              </h3>

              {/* videos */}
              <section className="product-video ">
                <div
                  // onClick={() => openVideo('videos/video-one.mp4')}
                  className="product-video__item"
                >
                  {mainProductData?.videos?.data[0] ? (
                    <Video
                      src={
                        BACKEND_URI +
                        mainProductData?.videos?.data[0]?.attributes?.url
                      }
                    />
                  ) : (
                    <>Видео для этого продукта не найдено</>
                  )}
                </div>
              </section>

              <h3
                className="product-content__title"
                style={{ marginBottom: "15px" }}
              >
                Другие видео
              </h3>

              <div className="flex flex-row flex-wrap gap-10">
              {mainProductData.youtube_links.data.map((video: any, index: number) => (
               <div key={index} className="">
                {/* Check if Embed Code is present */}
                {video.attributes.embed_code ? (
                  <div dangerouslySetInnerHTML={{ __html: video.attributes.embed_code }} />
                  ) : (
                    <>
                    {/* Preview Image */}
                    <Link href={video.attributes.link}>
                      {video.attributes.preview_image.data.attributes.url && (
                        <img
                          className="w-30 h-96 rounded-lg inset-8 pointer-events-none"
                          src={BACKEND_URI + video.attributes.preview_image.data.attributes.url}
                          alt={video.attributes.preview_image.data.attributes.alternativeText}
                        />
                      )}
                    </Link>
                    {/* Link to YouTube */}
                    <a href={video.attributes.link} className="mt-8" target="_blank" rel="noopener noreferrer">
                      Watch on YouTube
                    </a>
                  </>
                  )
                }
              </div>
              ))}
              </div>

              <hr className="mt-20" />
              <h3
                className="product-content__title mt-10"
                style={{ marginBottom: "30px" }}
              >
                Управление
              </h3>
              <section className="product-control">
                <ol className="product-control__list">
                  <div className="product-control__list-column">
                    {Object.keys(mainProductData.management).map((key) => (
                      <li key={key} className="product-control__list-item">
                        {key}:<span>{mainProductData.management[key]}</span>
                      </li>
                    ))}
                  </div>
                </ol>
              </section>
            </div>
          </div>
        </main>

        <section className="projects product-projects">
          <div className="container">
            <div className="projects__head">
              <img
                src="/images/projects-icon.svg"
                alt=""
                className="projects__icon"
                width="46px"
                height="53px"
              />
              <h2 className="projects__title">Возможно подойдет.</h2>
            </div>

            <div className="projects__content">
              <a href="/pedals" className="projects__item-link">
                <div className="projects__item">
                  <figure>
                    <img
                      className="projects__item-img"
                      src="/images/big-boss.webp"
                      alt=""
                    />
                    <figcaption>Big boss</figcaption>
                  </figure>
                </div>
              </a>

              <a href="/pedals" className="projects__item-link">
                <div className="projects__item">
                  <figure>
                    <img
                      className="projects__item-img"
                      src="/images/wings.webp"
                      alt=""
                    />
                    <figcaption>The wings</figcaption>
                  </figure>
                </div>
              </a>

              <a href="/pedals" className="projects__item-link">
                <div className="projects__item">
                  <figure>
                    <img
                      className="projects__item-img"
                      src="/images/dino-power.webp"
                      alt=""
                    />
                    <figcaption>Dino power</figcaption>
                  </figure>
                </div>
              </a>

              <a href="/pedals" className="projects__item-link">
                <div className="projects__item">
                  <figure>
                    <img
                      className="projects__item-img"
                      src="/images/radio-ray.webp"
                      alt=""
                    />
                    <figcaption>Radio ray</figcaption>
                  </figure>
                </div>
              </a>
            </div>
          </div>
        </section>

        <Footer />
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        />
    </>
  );
}
