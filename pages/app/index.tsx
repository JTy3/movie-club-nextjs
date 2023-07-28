import { Banner, DashboardNav } from '@/components/Dashboard';
import { Card } from '@/components/ui';
import { Swiper, SwiperSlide } from 'swiper/react';
import { authOptions } from 'pages/api/auth/[...nextauth]';
import { getServerSession } from 'next-auth/next';
import { GroupService } from '@/lib/group';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import { FreeMode, Pagination } from 'swiper';

const Dashboard: React.FC = ({ session, groups }: any) => {
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
            {groups.map((group: any) => {
              return (
                <SwiperSlide>
                  <p>{group.group.name}</p>
                </SwiperSlide>
              );
            })}
            <SwiperSlide>
              <Card></Card>
            </SwiperSlide>
          </Swiper>
          <hr className="my-12" />
          <h2 className="text-xl font-bold text-gray-900 sm:text-2xl">
            Your Watchlist
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

export async function getServerSideProps(context: any) {
  const session = await getServerSession(context.req, context.res, authOptions);

  if (!session) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  const groupService = new GroupService();
  const groups = JSON.parse(
    JSON.stringify(await groupService.getUserGroups(session.user?.id as string))
  );

  return {
    props: {
      session,
      groups,
    },
  };
}

export default Dashboard;
