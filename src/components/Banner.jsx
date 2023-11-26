// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

import classes from "../styles/Banner.module.css";

export default function Banner() {
    return (
        <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            modules={[Autoplay, Pagination, Navigation]}
            className={classes.mySwipper}
        >
            <SwiperSlide>
                <img
                    alt=""
                    src="https://yc.cldmlk.com/2000000001/uploads/1687921157907_1687404390824_Oppenheimercscopy.jpg"
                />
            </SwiperSlide>
            <SwiperSlide>
                <img
                    alt=""
                    src="https://media.cinemacloud.co.uk/imageFilm/1540_1_3.jpg"
                />
            </SwiperSlide>
            <SwiperSlide>
                <img
                    alt=""
                    src="https://mecinemas.com/assets/img/posters/TransformersRiseOfBeasts_banner.jpg"
                />
            </SwiperSlide>
            <SwiperSlide>
                <img
                    alt=""
                    src="https://shopatshowcaseusa.com/cdn/shop/collections/fnafbanner_653a8d01-bb6f-41d3-b6a1-bb68e9f22b12.jpg?v=1664477870"
                />
            </SwiperSlide>
        </Swiper>
    );
}
