import React from "react";
import styles from '../styles/Home.module.css';
import Slider from "react-slick";
import minCifra from '../static/images/mincifra.png'
import minStroi from '../static/images/minstroi.png'
import b2bdep from '../static/images/b2bdep.png'
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3.5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

export const CompaniesSlider: React.FC = (props) => {
    return (
        <div className={styles.companiesSlider}>
            <Slider {...settings}>
                <div>
                    <Image alt="Министерство" src={minCifra} />
                </div>
                <div>
                    <Image alt="Министерство" src={minStroi} />
                </div>
                <div>
                    <Image alt="Министерство" src={b2bdep} />
                </div>
                <div>
                    <Image alt="Министерство" src={minCifra} />
                </div>
                <div>
                    <Image alt="Министерство" src={minStroi} />
                </div>
                <div>
                    <Image alt="Министерство" src={b2bdep} />
                </div>
            </Slider>
        </div>
    )
}