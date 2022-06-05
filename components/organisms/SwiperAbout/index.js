import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Navigation } from 'swiper';
import 'swiper/css';
import { breakpoint } from 'breakpoints';
import IconInfo from 'components/atoms/IconInfo';

const swiperSlideStyle = {
  listStyle: 'none',
  overflow: 'hidden',
};

const Card = styled.div`
  display: flex;
  justify-content: center;
`;

const SwiperAbout = ({ slides }) => {
  SwiperCore.use([Autoplay, Navigation]);

  return (
    <Swiper
      wrapperTag="ul"
      spaceBetween={50}
      loop="true"
      autoplay={{
        delay: 4000,
        pauseOnMouseEnter: true,
        disableOnInteraction: false,
      }}
      navigation
      slidesPerView={1}
      breakpoints={{
        [breakpoint.M.slice(0, -2)]: {
          slidesPerView: 2,
        },
        [breakpoint.L.slice(0, -2)]: {
          slidesPerView: 3,
        },
      }}
    >
      {slides?.map(({ id, icon, title, content }, index) => (
        <SwiperSlide id={id} tag="li" key={id} style={swiperSlideStyle}>
          <Card>
            <IconInfo
              inSwiper
              key={id}
              title={title}
              content={content}
              icon={index + 1}
            />
          </Card>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperAbout;
