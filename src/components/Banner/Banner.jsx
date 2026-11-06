import NetflixBannerLogo from "../../assets/image/logo.png";
import { Play, Info } from "lucide-react";
import styles from "./Banner.module.css";
import { useEffect, useState } from "react";

import requests from "../../utility/requestUrls";
import { MovieInstance } from "../../utility/MovieInstance";

const BANNER_BASE = "https://image.tmdb.org/t/p/original/";

const Banner = () => {
  const [BannerImage, setBannerImage] = useState({});

  useEffect(() => {
    async function fetchBannerImage() {
      const request = await MovieInstance.get(requests.fetchNetflixOriginals);

      setBannerImage(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length)
        ],
      );
    }

    fetchBannerImage();
  }, []);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <div
      className={styles.Banner}
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("${BANNER_BASE}${BannerImage.backdrop_path}")`,
      }}
    >
      <div className={styles.contents}>
        {/* netflix img */}
        <img
          className={styles.logoImg}
          src={NetflixBannerLogo}
          alt="NetflixBannerLogo"
        />
        {/* title */}
        <h1 className={styles.title}>{BannerImage?.original_name}</h1>
        {/* description */}
        <h1 className={styles.description}>
          {truncate(BannerImage?.overview, 120)}
        </h1>
        {/* buttons */}
        <div className={styles.buttonContainer}>
          <button className={styles.button}>
            <Play size={30} />
            Play
          </button>
          <button className={styles.button}>
            <Info size={30} />
            My List
          </button>
        </div>
      </div>

      {/* fading */}
      <div className={styles.fadeBottom}></div>
    </div>
  );
};

export default Banner;
