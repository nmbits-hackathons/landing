import React from "react";
import styles from '../styles/Home.module.css';
import Slider from "react-slick";
import MinCifraSvg from '../static/images/mincifra.svg'
import MinStroiSvg from '../static/images/minstroi.svg'
import B2bdepSvg from '../static/images/b2bdep.svg'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useWindowDimensions from "../hooks/useWindowDimensions";

let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

export const CompaniesSlider: React.FC = (props) => {
    const { width } = useWindowDimensions();
    return (
        <div className={styles.companiesSlider}>
            <Slider {...settings} slidesToShow={width / 415}>
                <MinCifraSvg />
                <MinStroiSvg />
                <B2bdepSvg />
                <MinCifraSvg />
                <MinStroiSvg />
                <B2bdepSvg />
            </Slider>
        </div>
    )
}