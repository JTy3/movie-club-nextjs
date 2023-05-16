import { Banner, DashboardNav } from "@/components/Dashboard";
import { useSession, signOut } from "next-auth/react";
import { Card } from "@/components/ui";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { FreeMode, Pagination } from "swiper";

const Dashboard: React.FC = () => {
  const { data: session } = useSession();
  return (
    <div className="flex">
      <DashboardNav />
      <div className="w-full">
        <Banner />
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <hr className="my-12" />
          <h2 className="text-xl font-bold text-gray-900 sm:text-2xl">
            Groups
          </h2>
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            modules={[FreeMode, Pagination]}
            className="mySwiper"
            breakpoints={{
              // when window width is >= 480px
              640: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              // when window width is >= 640px
              1024: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
            }}
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
          <hr className="my-12" />
          <h2 className="text-xl font-bold text-gray-900 sm:text-2xl">
            Movies
          </h2>
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            modules={[FreeMode, Pagination]}
            className="mySwiper"
            breakpoints={{
              // when window width is >= 480px
              640: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              // when window width is >= 640px
              1024: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
            }}
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
          <hr className="my-12" />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
