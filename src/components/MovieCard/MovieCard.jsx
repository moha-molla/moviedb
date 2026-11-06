import style from "./MovieCard.module.css";
import { FaCirclePlay, FaCirclePlus } from "react-icons/fa6";
import { GoCheckCircleFill } from "react-icons/go";
import { IoIosArrowDropdownCircle } from "react-icons/io";
// image base url
const IMAGE_BASE = "https://image.tmdb.org/t/p/w500";

function MovieCard({ movie }) {
  let geners = ["Adventure", "Action", "Thriller"];
  return (
    <div className={style.cardWrapper}>
      {/* Poster image */}
      <img
        className={style.poster}
        src={`${IMAGE_BASE}${movie?.poster_path}`}
        alt="poster image"
      />

      {/* hover card className */}
      <div className={style.hoverCard}>
        {/* image */}
        <img
          className={style.hoverImage}
          src={`${IMAGE_BASE}${movie?.poster_path}`}
          alt=" poster image hover"
        />
        {/* badge */}
        <div className={style.badge}>Recently added</div>
        {/* Button row */}
        <div className={style.buttonRow}>
          <FaCirclePlay
            className={style.circleButton}
            color="white"
            size={40}
          />
          <FaCirclePlus
            className={style.circleButton}
            color="white"
            size={40}
          />
          <GoCheckCircleFill
            className={style.circleButton}
            color="white"
            size={40}
          />
          <IoIosArrowDropdownCircle
            className={style.circleButtonSmall}
            color="white"
            size={40}
          />
        </div>

        {/* Metadata row */}
        <div className={style.metaRow}>
          <span className={style.tag}>U/A 16+</span>
          <span className={style.tag}>Movie</span>
          <span className={style.tag}>HD</span>
        </div>

        {/* geners */}
        <div className={style.geners}>
          {geners.map((g, index) => {
            return (
              <span key={index}>
                {g}
                {index < geners.length - 1 && (
                  <span className={style.dot}> • </span>
                )}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
