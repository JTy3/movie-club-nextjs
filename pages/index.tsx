import { Button, Card } from "../components/ui";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import HeaderNav from "../components/HeaderNav";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { FreeMode, Pagination } from "swiper";

export default function Home() {
  return (
    <div>
      <HeaderNav />

      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
              <img
                alt="Party"
                src="https://m.media-amazon.com/images/M/MV5BOWJmMWRlYTMtMDQ3ZC00ZDI3LWEyNTMtY2FlNDhjODdlMGI0XkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_FMjpg_UX600_.jpg"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>

            <div className="lg:py-24">
              <h2 className="text-3xl font-bold sm:text-4xl">
                Movie of the week
              </h2>

              <p className="mt-4 text-gray-600">
                Jake Sully lives with his newfound family formed on the
                extrasolar moon Pandora. Once a familiar threat returns to
                finish what was previously started, Jake must work with Neytiri
                and the army of the Na'vi race to protect their home.
              </p>

              <a
                href="#"
                className="mt-8 inline-block rounded bg-red-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-red-700 focus:outline-none focus:ring focus:ring-red-400"
              >
                Where to watch
              </a>
            </div>
          </div>
        </div>
        <div className="bg-gray-100">
          <div className="mx-auto max-w-screen-xl px-4 py-16 lg:flex lg:items-center">
            <div className="mx-auto max-w-xl text-center">
              <h1 className="text-3xl font-extrabold sm:text-5xl">
                Vote for next week.
              </h1>

              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <a
                  className="block w-full rounded bg-red-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
                  href="/get-started"
                >
                  Vote Now
                </a>

                <a
                  className="block w-full rounded px-12 py-3 text-sm font-medium text-red-600 shadow hover:text-red-700 focus:outline-none focus:ring active:text-red-500 sm:w-auto"
                  href="/about"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
          <div className="mx-auto max-w-screen-xl px-4 pb-16 lg:flex lg:items-center h-auto">
            <Swiper
              slidesPerView={3}
              spaceBetween={30}
              freeMode={true}
              pagination={{
                clickable: true,
              }}
              modules={[FreeMode, Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>
                <Card></Card>
              </SwiperSlide>
              <SwiperSlide>
                <Card></Card>
              </SwiperSlide>
              <SwiperSlide>
                <Card></Card>
              </SwiperSlide>
              <SwiperSlide>
                <Card></Card>
              </SwiperSlide>
              <SwiperSlide>
                <Card></Card>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
    </div>
  );
}
