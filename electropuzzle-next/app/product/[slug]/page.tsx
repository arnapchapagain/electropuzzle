'use client'

import Script from "next/script";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import BACKEND_URI from "../../data.js";
import fetchProductData from "./fetchProductData.js"

import Carousel  from 'reactjs-nextjs-carousel';
import { useEffect, useState } from "react";
import { addToBasket } from "@/verdor/basket/basket";

export default function Page({params}) {
  const [orderQuantity, setOrderQuantity] = useState(1);

  const [pedalData, setPedalData] = useState(null);
  const [isError, setError] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetchProductData(params, setPedalData, setLoading, setError)
  }, []);

  useEffect(() => {
    console.log(pedalData)
  }, [pedalData])

  let mainImage;
  let additionalImages;
  let slides = [];

  // Extract image URL from 'image' attribute
  if (pedalData){
    // Extract image URL from 'image' attribute
  mainImage = `${BACKEND_URI}${pedalData?.data?.pedals?.data?.[0]?.attributes?.image?.data?.attributes?.url}`;

  // Extract image URLs from 'additional_images' attribute
  const additionalImagesData = pedalData?.data?.pedals?.data?.[0]?.attributes?.additional_images?.data;

  additionalImages = Array.isArray(additionalImagesData) 
  ? additionalImagesData.map(image => `${BACKEND_URI}${image?.attributes?.url}`)
  : [];

  // Combine the main image URL and additional image URLs into a new array
  slides = [mainImage, ...additionalImages];
}

  if (isLoading) return <>Loading...</>
  if (isError) return <>Something went wrong...</>
  if (!pedalData) return <>No data</>

  const mainProductData = pedalData?.data?.pedals?.data?.[0]?.attributes;

  return (
    <>
    <Navbar />

    <nav id="burger-menu" className="burger-nav">
      <div className="burger-nav__block">
        <a tabIndex={-1} href="/" className="logo burger-nav__logo">
          <img
            src="images/logo-black.svg"
            alt="ElectroPuzzle"
            className="logo__img burger-nav__logo-img"
          />
        </a>
        <button tabIndex={-1} id="burger-close" className="burger-nav__closes">
          <img src="images/cancel.svg" alt="" className="burger-nav__closes-icon" />
        </button>
        <ul className="burger-nav__list">
          <li className="burger-nav__item">
            <a tabIndex={-1} href="index.html" className="burger-nav__item-link"
              >Главная</a>
          </li>
          <li className="burger-nav__item">
            <a tabIndex={-1} href="pedals.html" className="burger-nav__item-link"
              >Педали</a>
          </li>
          <li className="burger-nav__item">
            <a tabIndex={-1} href="contacts.html" className="burger-nav__item-link"
              >Контакты</a>
          </li>
          <li className="burger-nav__item">
            <a tabIndex={-1} href="basket.html" className="burger-nav__item-link"
              >Корзина</a>
          </li>
        </ul>
      </div>
    </nav>

    <div className="wrapper">
      <main className="main main-product">
        <div className="container product-container">
          <div className="product-content">
            <section className="product-item product-content__item">
              <h3 className="product-content__main-title">{mainProductData.name}</h3>
              <p className="product-content__main-subtitle">
                Основан на: {mainProductData.based_on}
              </p>

              {/* products image carousel */}
              <div style={{flex: 2}}>
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

              <div className="product-item__info" style={{flex: 3}}>
                <h3 className="product-content__title product-item__title">
                {mainProductData.name}
                </h3>
                <p className="product-item__subtitle">
                  Основан на: {mainProductData.based_on}
                </p>
                <p className="product-item__price">{mainProductData.price} ₽</p>
                <div className="product-item__sum">
                  <form id="form-sum" className="product-item__form" action="">
                    <div className="counter">
                      <button 
                      type="button"
                      onClick={() => {
                        if (orderQuantity > 0) {setOrderQuantity(prev => prev-1)}
                      }}>-</button>

                      <input type="text" id="count" value={orderQuantity} name="sum" />

                      <button 
                      type="button"
                      onClick={() => {
                        setOrderQuantity(prev => prev+1)
                      }}>+</button>
                    </div>
                  </form>

                  <p className="product-item__text">Осталось {mainProductData.stock} штуки</p>
                </div>
                <div className="product-item__btn-block">
                  <button
                    id="showPopup"
                    className="btn-green product-item__btn-buy"
                  >
                    Купить в один клик
                  </button>
                  <button className="product-item__btn-basket" onClick={() => {
                        addToBasket({
                          productSlug: `${params.slug}`,
                          quantity: orderQuantity,
                        });
                      }}>
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
              style={{marginBottom: "32px"}}
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
                  {Object.keys(mainProductData.characteristics).map((key) => (
                    <tr key={key}>
                      <td>{key}</td>
                      <td>{mainProductData.characteristics[key]}</td>
                    </tr>
                  ))}
                  </tbody>
                </table>
              </div>
              <div className="product-description__special">
                <h3 className="product-description__info-title">Особенности</h3>
                <p className="product-description__text">
                {mainProductData.peculiarity}
                </p>
              </div>
            </section>
            <h3 className="product-content__title" style={{marginBottom: "15px"}}>
              Видео
            </h3>

            {/* videos */}
            <section className="product-video">
              <div
                // onClick={() => openVideo('videos/video-one.mp4')}
                className="product-video__item"
              >
                <img src="images/video-one.webp" alt="" />
              </div>
              <div
                // onClick={() => openVideo('videos/video-one.mp4')}
                className="product-video__item"
              >
                <img src="images/video-two.webp" alt="" />
              </div>
              <div
                // onClick={() => openVideo('videos/video-one.mp4')}
                className="product-video__item"
              >
                <img src="images/video-three.webp" alt="" />
              </div>
              <div
                // onClick={() => openVideo('videos/video-one.mp4')}
                className="product-video__item"
              >
                <img src="images/video-vour.webp" alt="" />
              </div>
              <div
                // onClick={() => openVideo('videos/video-one.mp4')}
                className="product-video__item"
              >
                <img src="images/video-five.webp" alt="" />
              </div>
              <div
                // onClick={() => openVideo('videos/video-one.mp4')}
                className="product-video__item"
              >
                <img src="images/video-six.webp" alt="" />
              </div>
            </section>
            <div id="video-modal" className="video-window-modal">
              {/* <span () => lassName="close" onClick={closeVideo()">&times;</span} */}
              <video id="modal-video" controls></video>
            </div>

            <h3 className="product-content__title" style={{marginBottom: "30px"}}>
              Управление
            </h3>
            <section className="product-control">
              <ol className="product-control__list">
                <div className="product-control__list-column">
                  {Object.keys(mainProductData.management).map((key) => (
                    <li key={key} className="product-control__list-item">
                    {key}:
                    <span>{mainProductData.management[key]}</span>
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
              src="images/projects-icon.svg"
              alt=""
              className="projects__icon"
              width="46px"
              height="53px"
            />
            <h2 className="projects__title">Возможно подойдет.</h2>
          </div>

          <div className="projects__content">
            <a href="#" className="projects__item-link">
              <div className="projects__item">
                <figure>
                  <img
                    className="projects__item-img"
                    src="images/big-boss.webp"
                    alt=""
                  />
                  <figcaption>Big boss</figcaption>
                </figure>
              </div>
            </a>

            <a href="#" className="projects__item-link">
              <div className="projects__item">
                <figure>
                  <img
                    className="projects__item-img"
                    src="images/wings.webp"
                    alt=""
                  />
                  <figcaption>The wings</figcaption>
                </figure>
              </div>
            </a>

            <a href="#" className="projects__item-link">
              <div className="projects__item">
                <figure>
                  <img
                    className="projects__item-img"
                    src="images/dino-power.webp"
                    alt=""
                  />
                  <figcaption>Dino power</figcaption>
                </figure>
              </div>
            </a>

            <a href="404.html" className="projects__item-link">
              <div className="projects__item">
                <figure>
                  <img
                    className="projects__item-img"
                    src="images/radio-ray.webp"
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
    </>
  )
}