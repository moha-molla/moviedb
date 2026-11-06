import MovieCard from "../MovieCard/MovieCard";
import Styles from "./SlideShow.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const SlideShow = ({ title, movies }) => {
  return (
    <div>
      <h2 className={Styles.title}>{title}</h2>
      <div className={Styles.Row}>
        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={10}
          slidesPerView={4}
        >
          {movies?.map((movie) => (
            <SwiperSlide key={movie.id}>
              <MovieCard movie={movie} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default SlideShow;
