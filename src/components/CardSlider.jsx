import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CardSliderData } from "../AllData/Data";

const CardSlider = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="mt-20">
        <Slider {...settings} S>
          {CardSliderData.map((e) => (
            <div className="bg-white h-[300px] w-[300px] text-black rounded-xl card-border">
              <div className="rounded-t-xl flex justify-start p-4">
                <img src={e.image} alt="" className="h-20 w-20 rounded-full" />
                <p className="text-lg m-3">{e.name}</p>
              </div>

              <div className="flex flex-col justify-cente items-center gap-4 p-4">
                <p>{e.description}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default CardSlider;
